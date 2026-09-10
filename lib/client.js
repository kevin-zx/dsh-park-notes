window.__ModuleLoader__.load({
	id: "dsh-park-notes",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;

		var React = require("react");

		//#region styles — geometry and tokens follow the official composer-dock family (GoalBar)
		var css = [
			".parkNotes_dock{box-sizing:border-box;width:100%;max-width:calc(var(--dsh-composer-card-max-width,748px) - 4 * var(--dsh-composer-dock-inset,8px));margin:0 auto;font:inherit}",
			".parkNotes_card{box-sizing:border-box;background:var(--dsw-alias-bg-layer-1);border:.5px solid var(--dsw-alias-border-l1);border-radius:12px}",
			".parkNotes_bar{box-sizing:border-box;width:100%;align-items:center;gap:8px;height:36px;padding:4px 10px 4px 12px;display:flex;cursor:pointer;color:inherit;background:transparent;border:none;border-radius:12px;font:inherit;text-align:inherit}",
			".parkNotes_card:not(.parkNotes_open) .parkNotes_bar:hover{background:var(--dsw-alias-interactive-bg-hover)}",
			".parkNotes_card.parkNotes_open .parkNotes_bar{border-radius:12px 12px 0 0}",
			".parkNotes_glyph{color:var(--dsw-alias-label-tertiary);flex:none;display:inline-flex;font-size:14px}",
			".parkNotes_title{color:var(--dsw-alias-label-primary);flex:none;font-size:13px;font-weight:500;line-height:24px}",
			".parkNotes_count{flex:none;background:var(--dsw-alias-bg-layer-2);border:.5px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-secondary);border-radius:999px;padding:0 7px;font-size:11px;line-height:18px;font-weight:500}",
			".parkNotes_spacer{flex:1}",
			".parkNotes_chevron{flex:none;color:var(--dsw-alias-label-tertiary);display:inline-flex;transition:transform .16s,color .16s}",
			".parkNotes_bar:hover .parkNotes_chevron{color:var(--dsw-alias-label-secondary)}",
			".parkNotes_panel{padding:10px 12px;border-top:.5px solid var(--dsw-alias-border-l1);display:flex;flex-direction:column;gap:10px}",
			".parkNotes_head{display:flex;align-items:center;gap:8px}",
			".parkNotes_headTitle{color:var(--dsw-alias-label-secondary);font-size:12px;font-weight:500;line-height:18px}",
			".parkNotes_close{width:28px;height:28px;color:var(--dsw-alias-label-tertiary);cursor:pointer;background:transparent;border:none;border-radius:999px;justify-content:center;align-items:center;padding:0;display:inline-flex;font-size:15px;line-height:1}",
			".parkNotes_close:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-secondary)}",
			".parkNotes_search{box-sizing:border-box;width:100%;height:28px;border:.5px solid var(--dsw-alias-border-l4);background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);border-radius:8px;padding:0 8px;font:inherit;font-size:12px;line-height:20px;outline:none}",
			".parkNotes_search:focus{border-color:var(--dsw-alias-state-business-primary)}",
			".parkNotes_search::placeholder{color:var(--dsw-alias-label-caption)}",
			".parkNotes_input{box-sizing:border-box;width:100%;min-height:56px;resize:none;border:.5px solid var(--dsw-alias-border-l4);background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);border-radius:8px;padding:8px 10px;font:inherit;font-size:13px;line-height:20px;outline:none}",
			".parkNotes_input:focus{border-color:var(--dsw-alias-state-business-primary)}",
			".parkNotes_input::placeholder{color:var(--dsw-alias-label-caption)}",
			".parkNotes_actions{display:flex;align-items:center;gap:8px}",
			".parkNotes_hint{flex:1;min-width:0;color:var(--dsw-alias-label-caption);font-size:11px;line-height:18px}",
			".parkNotes_btn{flex:none;height:28px;border:none;background:transparent;color:var(--dsw-alias-label-secondary);border-radius:8px;padding:0 10px;font-size:12px;line-height:20px;cursor:pointer}",
			".parkNotes_btn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}",
			".parkNotes_btn[data-variant=primary]{color:var(--dsw-alias-state-business-primary);font-weight:500}",
			".parkNotes_btn[data-variant=primary]:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-state-business-primary)}",
			".parkNotes_btn:disabled{opacity:.4;cursor:default}",
			".parkNotes_list{display:flex;flex-direction:column;gap:6px;max-height:240px;overflow:auto}",
			".parkNotes_item{box-sizing:border-box;display:flex;gap:6px;align-items:flex-start;border:.5px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);border-radius:8px;padding:6px 6px 6px 8px}",
			".parkNotes_itemPinned{border-color:var(--dsw-alias-state-business-primary)}",
			".parkNotes_itemHistory{background:transparent;border-style:dashed}",
			".parkNotes_text{flex:1;min-width:0;font-size:13px;line-height:20px;color:var(--dsw-alias-label-primary);white-space:pre-wrap;overflow-wrap:anywhere;cursor:text}",
			".parkNotes_itemHistory .parkNotes_text{color:var(--dsw-alias-label-secondary)}",
			".parkNotes_text:hover{color:var(--dsw-alias-state-business-primary)}",
			".parkNotes_editBox{box-sizing:border-box;width:100%;min-height:44px;resize:vertical;border:.5px solid var(--dsw-alias-state-business-primary);background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);border-radius:6px;padding:6px 8px;font:inherit;font-size:13px;line-height:20px;outline:none}",
			".parkNotes_mini{flex:none;height:22px;border:none;background:transparent;color:var(--dsw-alias-label-tertiary);border-radius:6px;padding:0 6px;font-size:11px;line-height:22px;cursor:pointer}",
			".parkNotes_mini:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-secondary)}",
			".parkNotes_pin{flex:none;width:22px;height:22px;border:none;background:transparent;color:var(--dsw-alias-label-caption);border-radius:6px;padding:0;font-size:11px;line-height:22px;cursor:pointer}",
			".parkNotes_pin:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-secondary)}",
			".parkNotes_pinOn{color:var(--dsw-alias-state-business-primary)}",
			".parkNotes_meta{flex:none;color:var(--dsw-alias-label-caption);font-size:11px;line-height:22px}",
			".parkNotes_section{display:flex;flex-direction:column;gap:6px}",
			".parkNotes_sectionHead{display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none;color:var(--dsw-alias-label-secondary);font-size:12px;line-height:20px;font-weight:500}",
			".parkNotes_sectionHead:hover{color:var(--dsw-alias-label-primary)}",
			".parkNotes_empty{color:var(--dsw-alias-label-caption);font-size:12px;line-height:20px;text-align:center;border:.5px dashed var(--dsw-alias-border-l2);border-radius:8px;padding:10px 8px}",
			".parkNotes_ok{color:var(--dsw-alias-state-success-primary);font-size:11px;line-height:18px}"
		].join("\n");
		var tagId = "dsh-park-notes/surface.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			var tag = document.createElement("style");
			tag.dataset.plugin = "dsh-park-notes";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		//#endregion

		//#region locales
		var zh = {
			"title": "稍后说",
			"pending": "条待聊",
			"close": "收起",
			"placeholderEmpty": "记下稍后想聊的话……",
			"placeholderMore": "再记一条……",
			"empty": "还没有内容。等待 AI 时想聊什么就先记到下面，不会打断当前对话。",
			"hint": "Enter 记录 · Shift+Enter 换行 · Alt+N 打开 · 只填入输入框不发送",
			"add": "记录",
			"pushAll": "全部带入输入框",
			"pushOne": "带入",
			"pushOneTitle": "带入输入框（不发送），并移入历史",
			"remove": "删除",
			"removeTitle": "删除",
			"pushed": "已放入输入框，确认后发送即可",
			"editTitle": "点击编辑",
			"save": "保存",
			"cancel": "取消",
			"pin": "置顶",
			"unpin": "取消置顶",
			"history": "已带入",
			"historyEmpty": "还没有带入过的内容。",
			"historyToggle": "展开或收起已带入",
			"clearHistory": "清空",
			"clearHistoryTitle": "清空已带入历史",
			"repush": "重新带入",
			"repushTitle": "再次放入输入框",
			"tagPushed": "已带入",
			"tagSent": "已发送",
			"search": "搜索便签……",
			"noMatch": "没有匹配的便签。",
			"export": "导出",
			"exportTitle": "导出为 Markdown 文件",
			"exportedPending": "待聊",
			"exportedHistory": "已带入"
		};
		var en = {
			"title": "Talk later",
			"pending": "pending",
			"close": "Collapse",
			"placeholderEmpty": "Note something to talk about later…",
			"placeholderMore": "Jot another one…",
			"empty": "Nothing parked yet. While the AI works, jot what you want to bring up — it never interrupts the conversation.",
			"hint": "Enter to save · Shift+Enter for a new line · Alt+N opens · only fills the draft, never sends",
			"add": "Save",
			"pushAll": "All into draft",
			"pushOne": "To draft",
			"pushOneTitle": "Append to the composer draft (not sent) and move to history",
			"remove": "Remove",
			"removeTitle": "Remove",
			"pushed": "In the draft — review and send when ready",
			"editTitle": "Click to edit",
			"save": "Save",
			"cancel": "Cancel",
			"pin": "Pin",
			"unpin": "Unpin",
			"history": "Pushed",
			"historyEmpty": "Nothing pushed yet.",
			"historyToggle": "Expand or collapse pushed items",
			"clearHistory": "Clear",
			"clearHistoryTitle": "Clear pushed history",
			"repush": "To draft",
			"repushTitle": "Append to the draft again",
			"tagPushed": "In draft",
			"tagSent": "Sent",
			"search": "Search notes…",
			"noMatch": "No matching notes.",
			"export": "Export",
			"exportTitle": "Export as a Markdown file",
			"exportedPending": "To discuss",
			"exportedHistory": "Pushed"
		};
		//#endregion

		//#region persistence (browser-local, per session, with v1 migration)
		var STORAGE_PREFIX = "dsh-park-notes:v1:";
		var STORAGE_LEGACY_PREFIX = "dsh-idea-note:v1:";

		var idCounter = 0;
		function newId() {
			idCounter += 1;
			return String(Date.now()) + "-" + String(idCounter);
		}

		function normalize(list) {
			var out = [];
			for (var i = 0; i < list.length; i++) {
				var n = list[i];
				if (!n || typeof n.text !== "string") continue;
				var note = {
					id: typeof n.id === "string" && n.id ? n.id : newId(),
					text: n.text,
					at: typeof n.at === "number" ? n.at : Date.now(),
					status: n.status === "pushed" ? "pushed" : "pending"
				};
				if (typeof n.pushedAt === "number") note.pushedAt = n.pushedAt;
				if (typeof n.sentAt === "number") note.sentAt = n.sentAt;
				if (typeof n.editedAt === "number") note.editedAt = n.editedAt;
				if (typeof n.cmd === "string") note.cmd = n.cmd;
				if (n.pinned === true) note.pinned = true;
				out.push(note);
			}
			return out;
		}

		function parseRaw(raw) {
			try {
				var parsed = JSON.parse(raw);
				return Array.isArray(parsed) ? normalize(parsed) : [];
			} catch (error) {
				return [];
			}
		}

		function readNotes(sessionId) {
			if (!sessionId || typeof window === "undefined" || typeof window.localStorage === "undefined") return [];
			try {
				var raw = window.localStorage.getItem(STORAGE_PREFIX + sessionId);
				if (raw) return parseRaw(raw);
				// migrate notes stored by the pre-rename build
				var legacy = window.localStorage.getItem(STORAGE_LEGACY_PREFIX + sessionId);
				if (legacy) {
					var notes = parseRaw(legacy);
					window.localStorage.setItem(STORAGE_PREFIX + sessionId, JSON.stringify(notes));
					window.localStorage.removeItem(STORAGE_LEGACY_PREFIX + sessionId);
					return notes;
				}
				return [];
			} catch (error) {
				return [];
			}
		}

		function writeNotes(sessionId, notes) {
			if (!sessionId || typeof window === "undefined" || typeof window.localStorage === "undefined") return;
			try {
				window.localStorage.setItem(STORAGE_PREFIX + sessionId, JSON.stringify(notes));
			} catch (error) {
				// quota/private-mode failures are non-fatal; notes stay in memory for this render
			}
		}
		//#endregion

		//#region shared state — the dock and the `/note` projection are two entries of
		// this same bundle, so one tiny bus keeps them in sync without a store service
		var noteListeners = new Set();
		var dockOpeners = new Set();

		function subscribeNotes(listener) {
			noteListeners.add(listener);
			return function () { noteListeners.delete(listener); };
		}

		function notifyNotes() {
			noteListeners.forEach(function (listener) {
				try {
					listener();
				} catch (error) {
					console.error("[park-notes] listener failed:", error);
				}
			});
		}

		function openDocks() {
			dockOpeners.forEach(function (opener) {
				try {
					opener();
				} catch (error) {
					console.error("[park-notes] opener failed:", error);
				}
			});
		}

		/**
		* Park one note that arrived through the `/note` command. Idempotent per
		* command id, so a replayed conversation history cannot duplicate a note.
		* @param sessionId - owning session, when resolvable.
		* @param text - note body.
		* @param commandId - the command run's id.
		* @returns whether a note was actually added.
		*/
		function parkNoteFromCommand(sessionId, text, commandId) {
			if (!sessionId || !text) return false;
			var list = readNotes(sessionId);
			for (var i = 0; i < list.length; i++) {
				if (commandId && list[i].cmd === commandId) return false;
			}
			var note = { id: newId(), text: text, at: Date.now(), status: "pending" };
			if (commandId) note.cmd = commandId;
			list.push(note);
			writeNotes(sessionId, list);
			notifyNotes();
			return true;
		}
		//#endregion

		//#region component
		function Chevron(open) {
			return React.createElement("svg", {
				width: "12",
				height: "12",
				viewBox: "0 0 12 12",
				fill: "none",
				style: open ? { transform: "rotate(180deg)" } : undefined
			}, React.createElement("path", {
				d: "M3 4.5 6 7.5 9 4.5",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}));
		}

		/** Short clock label for a timestamp (history meta). */
		function timeLabel(ms) {
			try {
				var d = new Date(ms);
				var pad = function (v) { return v < 10 ? "0" + String(v) : String(v); };
				return pad(d.getHours()) + ":" + pad(d.getMinutes());
			} catch (error) {
				return "";
			}
		}

		/**
		* ParkNotesDock: the talk-later strip docked above the message composer.
		* Collapsed: one bar with the pending count. Expanded: pending notes (pinned
		* first), a quick-capture input, and a collapsed history of pushed notes.
		* Pushing appends to the composer draft (never sends) and moves the note to
		* history; a note is marked sent once that draft is submitted.
		*/
		function ParkNotesDock(props) {
			var sessionId = props.sessionId;
			var useInput = props.useInput;
			var inputActions = props.inputActions;
			var t = props.t || function (key) { return zh[key] || key; };

			var state = React.useState(false);
			var open = state[0];
			var setOpen = state[1];
			var textState = React.useState("");
			var text = textState[0];
			var setText = textState[1];
			var notesState = React.useState(function () { return readNotes(sessionId); });
			var notes = notesState[0];
			var setNotes = notesState[1];
			var pushedState = React.useState(0);
			var pushedAt = pushedState[0];
			var setPushedAt = pushedState[1];
			var historyState = React.useState(false);
			var historyOpen = historyState[0];
			var setHistoryOpen = historyState[1];
			var editState = React.useState(null);
			var editingId = editState[0];
			var setEditingId = editState[1];
			var editTextState = React.useState("");
			var editText = editTextState[0];
			var setEditText = editTextState[1];
			var searchState = React.useState("");
			var search = searchState[0];
			var setSearch = searchState[1];

			var pushWatch = React.useRef(null);
			var prevDraft = React.useRef(null);
			var notesRef = React.useRef(notes);
			var inputRef = React.useRef(null);
			notesRef.current = notes;

			var currentDraft = useInput(function (s) { return s.draft; });

			React.useEffect(function () {
				setNotes(readNotes(sessionId));
				setText("");
				setPushedAt(0);
				setEditingId(null);
				setHistoryOpen(false);
				setSearch("");
				pushWatch.current = null;
				prevDraft.current = null;
			}, [sessionId]);

			// a `/note` run writes this session's notes: repaint the dock
			React.useEffect(function () {
				return subscribeNotes(function () { setNotes(readNotes(sessionId)); });
			}, [sessionId]);

			// the Alt+N shortcut asks every mounted dock (one per session) to reveal
			// its capture box
			React.useEffect(function () {
				var opener = function () { setOpen(true); };
				dockOpeners.add(opener);
				return function () { dockOpeners.delete(opener); };
			}, []);

			React.useEffect(function () {
				if (open && inputRef.current !== null) inputRef.current.focus();
			}, [open]);

			// Mark pushed notes as sent once the draft that carried them is submitted
			// (the composer clears the whole draft on submit; clearing it any other way
			// before the note text is gone leaves the note as "in draft").
			React.useEffect(function () {
				var prev = prevDraft.current;
				prevDraft.current = currentDraft;
				var watch = pushWatch.current;
				if (!watch) return;
				if (prev !== null && typeof prev === "string" && prev.indexOf(watch.body) >= 0 && currentDraft === "") {
					pushWatch.current = null;
					var ids = watch.ids;
					var next = notesRef.current.map(function (n) {
						if (ids.indexOf(n.id) < 0 || typeof n.sentAt === "number") return n;
						var copy = Object.assign({}, n);
						copy.sentAt = Date.now();
						return copy;
					});
					setNotes(next);
					writeNotes(sessionId, next);
				}
			}, [currentDraft]);

			function commit(next) {
				setNotes(next);
				writeNotes(sessionId, next);
			}

			function addNote() {
				var trimmed = text.trim();
				if (!trimmed) return;
				commit(notes.concat([{ id: newId(), text: trimmed, at: Date.now(), status: "pending" }]));
				setText("");
			}

			function removeNote(id) {
				commit(notes.filter(function (n) { return n.id !== id; }));
				setPushedAt(0);
				if (editingId === id) setEditingId(null);
			}

			function togglePin(id) {
				commit(notes.map(function (n) {
					if (n.id !== id) return n;
					var copy = Object.assign({}, n);
					if (copy.pinned === true) delete copy.pinned;
					else copy.pinned = true;
					return copy;
				}));
			}

			function startEdit(note) {
				setEditingId(note.id);
				setEditText(note.text);
			}

			function saveEdit() {
				var trimmed = editText.trim();
				if (!trimmed) return;
				commit(notes.map(function (n) {
					if (n.id !== editingId) return n;
					var copy = Object.assign({}, n);
					copy.text = trimmed;
					copy.editedAt = Date.now();
					return copy;
				}));
				setEditingId(null);
				setEditText("");
			}

			function pushToDraft(list) {
				if (!inputActions || !list.length) return;
				var body = list.map(function (n) { return n.text; }).join("\n");
				inputActions.setDraft(currentDraft ? currentDraft + "\n\n" + body : body);
				setPushedAt(Date.now());
				var ids = [];
				for (var i = 0; i < list.length; i++) ids.push(list[i].id);
				pushWatch.current = { ids: ids, body: body };
				// the note stays, but moves to history so the pending list keeps only
				// what is still waiting to be raised
				commit(notes.map(function (n) {
					if (ids.indexOf(n.id) < 0) return n;
					var copy = Object.assign({}, n);
					copy.status = "pushed";
					copy.pushedAt = Date.now();
					return copy;
				}));
				setHistoryOpen(true);
			}

			function clearHistory() {
				commit(notes.filter(function (n) { return n.status !== "pushed"; }));
				setPushedAt(0);
			}

			/** Download every note of this session as a Markdown file. */
			function exportNotes() {
				try {
					var lines = ["# " + t("title") + " · " + new Date().toLocaleString()];
					lines.push("", "## " + t("exportedPending") + " (" + pending.length + ")");
					if (pending.length === 0) lines.push("-");
					for (var i = 0; i < pending.length; i++) {
						lines.push("- " + (pending[i].pinned === true ? "[!] " : "") + pending[i].text.replace(/\s*\n\s*/g, " "));
					}
					lines.push("", "## " + t("exportedHistory") + " (" + history.length + ")");
					for (var j = 0; j < history.length; j++) {
						var n = history[j];
						lines.push("- [x] " + n.text.replace(/\s*\n\s*/g, " ") + "  (" + (typeof n.sentAt === "number" ? t("tagSent") : t("tagPushed")) + " " + timeLabel(n.sentAt || n.pushedAt || n.at) + ")");
					}
					var blob = new Blob([lines.join("\n") + "\n"], { type: "text/markdown;charset=utf-8" });
					var url = URL.createObjectURL(blob);
					var link = document.createElement("a");
					link.href = url;
					link.download = "park-notes-" + new Date().toISOString().slice(0, 10) + ".md";
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
					setTimeout(function () { URL.revokeObjectURL(url); }, 5000);
				} catch (error) {
					console.error("[park-notes] export failed:", error);
				}
			}

			var query = search.trim().toLowerCase();
			var total = notes.length;
			var pending = notes.filter(function (n) { return n.status !== "pushed"; });
			var history = notes.filter(function (n) { return n.status === "pushed"; });
			pending.sort(function (a, b) {
				var pa = a.pinned === true ? 1 : 0;
				var pb = b.pinned === true ? 1 : 0;
				if (pa !== pb) return pb - pa;
				return a.at - b.at;
			});
			history.sort(function (a, b) { return (b.pushedAt || b.at) - (a.pushedAt || a.at); });
			var matchesQuery = function (n) { return query === "" || n.text.toLowerCase().indexOf(query) >= 0; };
			var visiblePending = query === "" ? pending : pending.filter(matchesQuery);
			var visibleHistory = query === "" ? history : history.filter(matchesQuery);

			var count = pending.length;

			function renderEditArea(note) {
				return React.createElement("div", { className: "parkNotes_item", key: note.id },
					React.createElement("textarea", {
						className: "parkNotes_editBox",
						value: editText,
						autoFocus: true,
						rows: 2,
						"aria-label": t("editTitle"),
						onChange: function (e) { setEditText(e.target.value); },
						onKeyDown: function (e) {
							if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
								e.preventDefault();
								saveEdit();
							} else if (e.key === "Escape") {
								setEditingId(null);
								setEditText("");
							}
						}
					}),
					React.createElement("button", { type: "button", className: "parkNotes_mini", onClick: saveEdit }, t("save")),
					React.createElement("button", {
						type: "button",
						className: "parkNotes_mini",
						onClick: function () { setEditingId(null); setEditText(""); }
					}, t("cancel"))
				);
			}

			function renderPendingItem(note) {
				if (editingId === note.id) return renderEditArea(note);
				var pinned = note.pinned === true;
				return React.createElement("div", {
					className: pinned ? "parkNotes_item parkNotes_itemPinned" : "parkNotes_item",
					key: note.id
				},
					React.createElement("button", {
						type: "button",
						className: pinned ? "parkNotes_pin parkNotes_pinOn" : "parkNotes_pin",
						title: pinned ? t("unpin") : t("pin"),
						onClick: function () { togglePin(note.id); }
					}, "\uD83D\uDCCC"),
					React.createElement("span", {
						className: "parkNotes_text",
						title: t("editTitle"),
						onClick: function () { startEdit(note); }
					}, note.text),
					React.createElement("button", {
						type: "button",
						className: "parkNotes_mini",
						title: t("pushOneTitle"),
						onClick: function () { pushToDraft([note]); }
					}, t("pushOne")),
					React.createElement("button", {
						type: "button",
						className: "parkNotes_mini",
						title: t("removeTitle"),
						onClick: function () { removeNote(note.id); }
					}, t("remove"))
				);
			}

			function renderHistoryItem(note) {
				if (editingId === note.id) return renderEditArea(note);
				var sent = typeof note.sentAt === "number";
				return React.createElement("div", { className: "parkNotes_item parkNotes_itemHistory", key: note.id },
					React.createElement("span", {
						className: "parkNotes_text",
						title: t("editTitle"),
						onClick: function () { startEdit(note); }
					}, note.text),
					React.createElement("span", { className: "parkNotes_meta" }, sent ? t("tagSent") : t("tagPushed")),
					React.createElement("span", { className: "parkNotes_meta" }, timeLabel(note.sentAt || note.pushedAt || note.at)),
					React.createElement("button", {
						type: "button",
						className: "parkNotes_mini",
						title: t("repushTitle"),
						onClick: function () { pushToDraft([note]); }
					}, t("repush")),
					React.createElement("button", {
						type: "button",
						className: "parkNotes_mini",
						title: t("removeTitle"),
						onClick: function () { removeNote(note.id); }
					}, t("remove"))
				);
			}

			var bar = React.createElement("button", {
				type: "button",
				className: "parkNotes_bar",
				"aria-expanded": open,
				onClick: function () { setOpen(!open); }
			},
				React.createElement("span", { className: "parkNotes_glyph" }, "\uD83D\uDCA1"),
				React.createElement("span", { className: "parkNotes_title" }, t("title")),
				count > 0 && React.createElement("span", { className: "parkNotes_count" }, String(count)),
				React.createElement("span", { className: "parkNotes_spacer" }),
				React.createElement("span", { className: "parkNotes_chevron" }, Chevron(open))
			);

			var body = null;
			if (open) {
				var pendingArea;
				if (count === 0) {
					pendingArea = React.createElement("div", { className: "parkNotes_empty" }, query === "" ? t("empty") : t("noMatch"));
				} else if (visiblePending.length === 0) {
					pendingArea = React.createElement("div", { className: "parkNotes_empty" }, t("noMatch"));
				} else {
					pendingArea = React.createElement("div", { className: "parkNotes_list", role: "list" }, visiblePending.map(renderPendingItem));
				}

				var historyArea = null;
				if (history.length > 0) {
					historyArea = React.createElement("div", { className: "parkNotes_section" },
						React.createElement("div", {
							className: "parkNotes_sectionHead",
							role: "button",
							tabIndex: 0,
							"aria-expanded": historyOpen,
							"aria-label": t("historyToggle"),
							onClick: function () { setHistoryOpen(!historyOpen); },
							onKeyDown: function (e) {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									setHistoryOpen(!historyOpen);
								}
							}
						},
							React.createElement("span", { className: "parkNotes_chevron" }, Chevron(historyOpen)),
							React.createElement("span", null, t("history")),
							React.createElement("span", { className: "parkNotes_count" }, String(history.length)),
							React.createElement("span", { className: "parkNotes_spacer" }),
							React.createElement("button", {
								type: "button",
								className: "parkNotes_mini",
								title: t("clearHistoryTitle"),
								onClick: function (e) { e.stopPropagation(); clearHistory(); }
							}, t("clearHistory"))
						),
						historyOpen && (visibleHistory.length > 0
							? React.createElement("div", { className: "parkNotes_list", role: "list" }, visibleHistory.map(renderHistoryItem))
							: React.createElement("div", { className: "parkNotes_empty" }, t("noMatch")))
					);
				}

				body = React.createElement("div", { className: "parkNotes_panel" },
					React.createElement("div", { className: "parkNotes_head" },
						count > 0 && React.createElement("span", { className: "parkNotes_headTitle" }, count + " " + t("pending")),
						React.createElement("span", { className: "parkNotes_spacer" }),
						total > 0 && React.createElement("button", {
							type: "button",
							className: "parkNotes_mini",
							title: t("exportTitle"),
							onClick: exportNotes
						}, t("export")),
						React.createElement("button", {
							type: "button",
							className: "parkNotes_close",
							"aria-label": t("close"),
							onClick: function () { setOpen(false); }
						}, "\u00D7")
					),
					total >= 3 && React.createElement("input", {
						className: "parkNotes_search",
						type: "text",
						value: search,
						placeholder: t("search"),
						"aria-label": t("search"),
						onChange: function (e) { setSearch(e.target.value); },
						onKeyDown: function (e) {
							if (e.key === "Escape") {
								if (search !== "") setSearch("");
								else setOpen(false);
							}
						}
					}),
					pendingArea,
					React.createElement("textarea", {
						className: "parkNotes_input",
						ref: inputRef,
						placeholder: count > 0 ? t("placeholderMore") : t("placeholderEmpty"),
						value: text,
						autoFocus: true,
						rows: 2,
						onChange: function (e) { setText(e.target.value); },
						onKeyDown: function (e) {
							// IME composition (e.g. pinyin candidate confirm) must not record
							if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
								e.preventDefault();
								addNote();
							} else if (e.key === "Escape") {
								setOpen(false);
							}
						}
					}),
					React.createElement("div", { className: "parkNotes_actions" },
						React.createElement("span", { className: "parkNotes_hint" }, t("hint")),
						React.createElement("button", {
							type: "button",
							className: "parkNotes_btn",
							"data-variant": "primary",
							onClick: addNote
						}, t("add")),
						count > 0 && React.createElement("button", {
							type: "button",
							className: "parkNotes_btn",
							disabled: !inputActions,
							onClick: function () { pushToDraft(pending.slice()); }
						}, t("pushAll"))
					),
					pushedAt > 0 && React.createElement("div", { className: "parkNotes_ok", role: "status" }, t("pushed")),
					historyArea
				);
			}

			return React.createElement("div", { className: "parkNotes_dock", "data-park-notes": "" },
				React.createElement("div", { className: open ? "parkNotes_card parkNotes_open" : "parkNotes_card" }, bar, body)
			);
		}
		//#endregion

		//#region plugin
		/** Required services: the fiber waits for these before apply runs. */
		var inject = ["slots", "locale"];

		/**
		* Current visible session id, resolved at command time — the composer that
		* accepted `/note` belongs to it.
		* @param ctx - client root context.
		* @returns the session id, or undefined when it cannot be resolved.
		*/
		function activeSessionId(ctx) {
			try {
				var sessions = ctx.get("sessions");
				var state = sessions !== undefined && sessions.list !== undefined && typeof sessions.list.getSnapshot === "function"
					? sessions.list.getSnapshot()
					: undefined;
				return state !== undefined && state.current !== undefined ? state.current : undefined;
			} catch (error) {
				return undefined;
			}
		}

		/**
		* Project the host `/note` command run: park its text as a pending note.
		* State-only definition (no view target), so the built-in command row keeps
		* rendering the host result.
		* @param ctx - client root context.
		*/
		function registerNoteCommandProjection(ctx) {
			// `ctx.inject` waits for the service: the conversation package may be
			// provided by a later row in the client composition, and a plain ctx.get
			// at apply time would miss it and silently drop the `/note` projection.
			ctx.inject(["uiConversation"], function (scope) {
				var uiConversation = scope.get("uiConversation");
				if (uiConversation === undefined || uiConversation.events === undefined) return;
				if (typeof uiConversation.events.register !== "function") return;
				scope.effect(function () {
					return uiConversation.events.register({
						kind: "park-notes-command",
						match: function (event) {
							if (!event || event.type !== "command/run") return null;
							var data = event.data;
							if (!data || data.name !== "note") return null;
							return { id: "note-" + String(data.commandId), role: "start" };
						},
						start: function (context, match) {
							try {
								var data = match !== undefined && match.event !== undefined ? match.event.data : undefined;
								var raw = data !== undefined && typeof data.args === "string" ? data.args : "";
								var trimmed = raw.replace(/^\s+|\s+$/g, "");
								if (trimmed) parkNoteFromCommand(activeSessionId(ctx), trimmed, data !== undefined ? String(data.commandId) : undefined);
							} catch (error) {
								console.error("[park-notes] /note projection failed:", error);
							}
							return { parked: true };
						},
						update: function (context) {
							return context.state;
						}
					});
				}, "park-notes: /note projection");
				console.log("[park-notes] /note projection registered");
			});
		}

		/**
		* Alt+N reveals and focuses the capture box of the visible session's dock.
		* @param ctx - client root context.
		*/
		function registerShortcut(ctx) {
			if (typeof document === "undefined") return;
			ctx.effect(function () {
				var onKeyDown = function (event) {
					if (!event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
					if (event.isComposing === true) return;
					var key = event.key;
					if (key !== "n" && key !== "N") return;
					event.preventDefault();
					openDocks();
				};
				document.addEventListener("keydown", onKeyDown);
				return function () { document.removeEventListener("keydown", onKeyDown); };
			}, "park-notes: Alt+N shortcut");
		}

		/**
		* Client plugin body: the park-notes dock entry, the `/note` projection and
		* the Alt+N shortcut.
		* @param ctx - client root context.
		*/
		function apply(ctx) {
			var slots = ctx.get("slots");
			var locale = ctx.get("locale");
			if (slots === undefined) return;
			if (locale !== undefined) {
				ctx.effect(function () {
					return locale.register("parkNotes", { zh: zh, en: en });
				}, "park-notes: dictionaries");
			}
			registerNoteCommandProjection(ctx);
			registerShortcut(ctx);
			try {
				return slots.inject("conversation.input.dock", function () {
					return slots.register({
						name: "conversation.input.dock",
						id: "park-notes",
						order: 15,
						locale: "parkNotes",
						label: function () { return ctx.get("locale") !== undefined ? ctx.locale.bind("parkNotes")("title") : zh.title; }
					}, ParkNotesDock);
				});
			} catch (error) {
				console.error("[park-notes] register failed:", error);
				return;
			}
		}
		exports.apply = apply;
		exports.inject = inject;
		//#endregion
		return module.exports;
	}
});
