# dsh-park-notes · 稍后说 / Talk later

Park thoughts while the AI is working — without interrupting the conversation.

**⚠️ Disclaimer / 免责声明**

Plugins run third-party code on your machine. Review the source before
installing — this project is a community plugin, not affiliated with
DeepSeek. / 插件会在你的机器上执行第三方代码，安装前请自行审阅源码；本项目为社区插件，与 DeepSeek 官方无关联。

---

## The problem / 要解决的问题

**Scenario — 你在和 AI 对话的过程中，突然想到"这个也想和 AI 聊聊"。**

- AI 正在输出，你的思路被带跑了——刚想到一条新的问题/话题/补充，想立刻说；
- 但如果**直接发送**：要么打断 AI 当前的生成（它本该一次说完那件事），要么把两件不相关的事揉进下一个回合，节奏全乱；
- 如果**等一会儿再说**：等它生成完，你的想法往往已经忘了，或者只记得"好像有个事要说"却想不起来是什么。

**一句话：在"现在说会打断"和"晚点说会忘"之间，缺一个零成本的中间态。**

## What it solves / 它如何解决

`稍后说` 在输入框上方放了一条**常驻便签条**：想到什么，点开随手记一条（回车即可，不打断正在进行的对话），然后继续专注当前的事。等这轮聊完、你想聊那个话题了，**一键把便签带进输入框草稿**（只填草稿、不自动发送），确认后发送即可。

- **记的时候**：零打断——便签在输入框旁，3 秒完成，AI 的生成不受影响；
- **存的时候**：随会话走——每条便签挂在当前会话下，刷新、重启都不丢；
- **用的时候**：一键带入——不再靠记忆，草稿里就是你要聊的内容；
- **用完即清**：带入后自动从便签列表移除，不会重复携带。

While the agent is busy writing, you think of something worth raising later.
`稍后说` gives you a tiny strip above the composer: jot the thought, forget
about it, and when the current exchange is over push the parked items straight
into your next draft (never sent automatically), then delete them with one
click.

---

## Install / 安装

Requires the web profile (`dsh web`). / 需要 web 版 dsh（`dsh web`）。

```bash
# from a git checkout / 从 Git 仓库安装
dsh plugin --profile web add github:kevin-zx/dsh-park-notes

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

- **`/note <text>`** — type it in the composer and press Enter: the text is parked
  as a pending note, the command runs directly against the agent (no model
  message is created) and its result row confirms it. Keyboard-only and fully
  non-interrupting. / **`/note 内容`** — 在输入框直接敲，回车即记录；命令直接
  对 agent 执行、**不产生模型消息**，结果行给出确认。纯键盘、零打断。
- **`Alt+N`** — reveal and focus the capture box without touching the mouse. /
  **`Alt+N`** — 打开并聚焦记录框，不用鼠标。
- **Collapsed**: `💡 稍后说 (2)` — always visible, shows the pending count. /
  **折叠**：常驻条带，显示待聊数量。
- **Expanded**: pending notes (pinned first), an optional search box, the
  quick-capture input, then a collapsed **history**. / **展开**：待聊列表
  （置顶优先）→ 搜索框（便签 ≥ 3 条时出现）→ 快捷记录框 → 折叠的「已带入」历史。
  - `Enter` records (IME-safe, `Shift+Enter` newline), `Esc` collapses. /
    `Enter` 记录（支持中文输入法，`Shift+Enter` 换行），`Esc` 收起。
  - **带入** appends a note to the composer draft (not sent) and moves it to
    history; **删除** drops it; **全部带入输入框** does both at once. /
    「带入」= 追加到输入框草稿（不发送）并移入历史；「删除」直接丢弃。
  - **Edit**: click a note's text to edit in place (`Enter` saves, `Esc` cancels). /
    **二次编辑**：点击条目文字就地编辑（`Enter` 保存、`Esc` 取消）。
  - **Pin**: 📌 keeps a note on top of the pending list. /
    **置顶**：📌 把条目固定在待聊列表最前。
  - **Search**: filter pending and history together (substring match). /
    **搜索**：一个输入框同时过滤待聊与历史。
  - **Export**: download every note of the session as Markdown
    (`park-notes-YYYY-MM-DD.md`). / **导出**：把本会话全部便签导出为 Markdown 文件。
  - **History**: pushed notes stay under a collapsed `已带入` section, tagged
    `已带入` / `已发送` (a note flips to `已发送` once the draft carrying it is
    actually submitted), with 重新带入 / 删除 / 清空. / **历史**：带入过的内容收进
    折叠的「已带入」区，标注「已带入 / 已发送」（真正把草稿发出去后自动标记），
    支持重新带入、删除、清空。
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
