# dsh-park-notes · 稍后说 / Talk later

Park thoughts while the AI is working — without interrupting the conversation.

While the agent is busy writing, you often think of something worth raising
later. Interrupting the current turn would break the flow; forgetting it would
lose it. **Park Notes** gives you a tiny strip above the composer: jot the
thought, forget about it, and when the current exchange is over push the
parked items straight into your next draft (never sent automatically), then
delete them with one click.

**⚠️ Disclaimer / 免责声明**

Plugins run third-party code on your machine. Review the source before
installing — this project is a community plugin, not affiliated with
DeepSeek. / 插件会在你的机器上执行第三方代码，安装前请自行审阅源码；本项目为社区插件，与 DeepSeek 官方无关联。

---

## Install / 安装

Requires the web profile (`dsh web`). / 需要 web 版 dsh（`dsh web`）。

```bash
# from a git checkout / 从 Git 仓库安装
dsh plugin --profile web add github:<your-username>/dsh-park-notes

# or once published to npm / 或发布 npm 后：
dsh plugin --profile web add dsh-park-notes
```

Restart `dsh web` (or refresh the page after the live patch reload), and the
`💡 稍后说` strip appears above the message composer in every session. /
重启 `dsh web`（或刷新页面），输入框上方即出现 `💡 稍后说` 条带。

Manual alternative — in `$DSH_HOME/profiles/web/cordis.patch.yml` / 手动方式：

```yaml
- insert:
    - id: park-notes
      name: 'dsh-park-notes'
```

Use **either** the bundle install (`dsh plugin add ...`) **or** the manual
row — not both, or the row id collides. / 二选一，不能同时用，否则行 id 冲突。

## Usage / 用法

- **Collapsed**: `💡 稍后说 (2)` — always visible, shows the pending count. /
  **折叠**：常驻条带，显示待聊数量。
- **Expanded**: the parked list, then a quick-capture input. /
  **展开**：待聊列表 + 快捷记录框。
  - `Enter` records (IME-safe, `Shift+Enter` newline), `Esc` collapses. /
    `Enter` 记录（支持中文输入法，`Shift+Enter` 换行），`Esc` 收起。
  - **带入** appends a note to the composer draft (not sent) and removes it
    from the list; **删除** drops it; **全部带入输入框** does both at once. /
    「带入」= 追加到输入框草稿（不发送）并从列表移除；「删除」直接丢弃。
- Data lives in the browser `localStorage` per session (key
  `dsh-park-notes:v1:<sessionId>`); server restarts don't affect it. Notes
  written by the pre-rename `dsh-idea-note` build migrate automatically. /
  数据存浏览器 localStorage（按会话隔离），服务器重启不影响；旧版
  `dsh-idea-note` 的便签自动迁移。

## How it works / 原理

A DSH web plugin = one package with a host half and a browser half. /
DSH 网页插件 = 一个包，含 host 半边和浏览器半边。

- `lib/index.js` — host half: empty apply, exists so the Loader row mounts.
- `lib/client.js` — browser half: a `window.__ModuleLoader__.load(...)`
  bundle (same hand-written format as shipped `dsh-client-ui-*` packages, no
  build step). It declares `inject: ["slots", "locale"]` — the `inject`
  export is the Cordis dependency declaration; without it `apply` runs before
  the `slots` service exists and fails silently.
- `package.json` → `dsh.client` is how client-modules discovers and serves
  the bundle over `/plugins`; `dsh.bundle.patch` is what `dsh plugin add`
  uses to mount the row automatically.
- UI registers in `conversation.input.dock` (order 15), the same slot family
  as Todo / Goal / queue docks.

## Develop / edit / 开发

`lib/client.js` is plain JavaScript — edit it; a running dsh web picks the
change up via client HMR (or Ctrl+Shift+R). Syntax check: `node --check lib/client.js`.
/ `lib/client.js` 是纯 JS，直接编辑即可，开发热更新自动生效。

## Requirements / limits / 限制

- Web profile only (browser UI); no host-side behavior yet. / 仅 web 界面。
- Notes are per-session, per-browser (localStorage). Cross-browser sync would
  need a host half with `dsh-storage` — a good next step. / 便签按会话、
  按浏览器隔离；跨浏览器同步可做 v2（host 存储）。
- Two browser tabs editing the same session's notes: last write wins. /
  同会话双标签页编辑时以最后写入为准。

## License

MIT
