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
			".parkNotes_item{box-sizing:border-box;display:flex;gap:8px;align-items:flex-start;border:.5px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);border-radius:8px;padding:6px 6px 6px 10px}",
			".parkNotes_text{flex:1;min-width:0;font-size:13px;line-height:20px;color:var(--dsw-alias-label-primary);white-space:pre-wrap;overflow-wrap:anywhere}",
			".parkNotes_mini{flex:none;height:22px;border:none;background:transparent;color:var(--dsw-alias-label-tertiary);border-radius:6px;padding:0 6px;font-size:11px;line-height:22px;cursor:pointer}",
			".parkNotes_mini:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-secondary)}",
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
			"hint": "Enter 记录 · Shift+Enter 换行 · 只会填入输入框，不会发送",
			"add": "记录",
			"pushAll": "全部带入输入框",
			"pushOne": "带入",
			"pushOneTitle": "带入输入框（不发送），并移除本条",
			"remove": "删除",
			"removeTitle": "删除",
			"pushed": "已放入输入框，确认后发送即可"
		};
		var en = {
			"title": "Talk later",
			"pending": "pending",
			"close": "Collapse",
			"placeholderEmpty": "Note something to talk about later…",
			"placeholderMore": "Jot another one…",
			"empty": "Nothing parked yet. While the AI works, jot what you want to bring up — it never interrupts the conversation.",
			"hint": "Enter to save · Shift+Enter for a new line · only fills the draft, never sends",
			"add": "Save",
			"pushAll": "All into draft",
			"pushOne": "To draft",
			"pushOneTitle": "Append to the composer draft (not sent) and remove this note",
			"remove": "Remove",
			"removeTitle": "Remove",
			"pushed": "In the draft — review and send when ready"
		};
		//#endregion

		//#region persistence (browser-local, per session, with v1 migration)
		var STORAGE_PREFIX = "dsh-park-notes:v1:";
		var STORAGE_LEGACY_PREFIX = "dsh-idea-note:v1:";

		function parseRaw(raw) {
			try {
				var parsed = JSON.parse(raw);
				return Array.isArray(parsed) ? parsed.filter(function (n) { return n && typeof n.text === "string"; }) : [];
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

		var idCounter = 0;
		function newId() {
			idCounter += 1;
			return String(Date.now()) + "-" + String(idCounter);
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

		function NoteItem(note, actions, t) {
			return React.createElement("div", { className: "parkNotes_item", key: note.id },
				React.createElement("span", { className: "parkNotes_text" }, note.text),
				React.createElement("button", {
					type: "button",
					className: "parkNotes_mini",
					title: t("pushOneTitle"),
					onClick: actions.push
				}, t("pushOne")),
				React.createElement("button", {
					type: "button",
					className: "parkNotes_mini",
					title: t("removeTitle"),
					onClick: actions.remove
				}, t("remove"))
			);
		}

		/**
		* ParkNotesDock: the talk-later strip docked above the message composer.
		* Collapsed: one bar with the pending count. Expanded: the parked list;
		* each note can be appended to the composer draft (never submitted) and
		* is then taken off the list. Quick capture sits under the list.
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

			var currentDraft = useInput(function (s) { return s.draft; });

			React.useEffect(function () {
				setNotes(readNotes(sessionId));
				setText("");
				setPushedAt(0);
			}, [sessionId]);

			function commit(next) {
				setNotes(next);
				writeNotes(sessionId, next);
			}

			function addNote() {
				var trimmed = text.trim();
				if (!trimmed) return;
				commit(notes.concat([{ id: newId(), text: trimmed, at: Date.now() }]));
				setText("");
			}

			function removeNote(id) {
				commit(notes.filter(function (n) { return n.id !== id; }));
				setPushedAt(0);
			}

			function pushToDraft(list) {
				if (!inputActions || !list.length) return;
				var body = list.map(function (n) { return n.text; }).join("\n");
				inputActions.setDraft(currentDraft ? currentDraft + "\n\n" + body : body);
				setPushedAt(Date.now());
				// take the pushed notes off the list so a note is never
				// carried twice; the draft keeps the text for sending
				var pushed = {};
				for (var i = 0; i < list.length; i++) pushed[list[i].id] = true;
				commit(notes.filter(function (n) { return !pushed[n.id]; }));
			}

			var count = notes.length;

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
				var list = null;
				if (count > 0) {
					list = React.createElement("div", { className: "parkNotes_list", role: "list" },
						notes.map(function (n) {
							return NoteItem(n, {
								push: function () { pushToDraft([n]); },
								remove: function () { removeNote(n.id); }
							}, t);
						})
					);
				} else {
					list = React.createElement("div", { className: "parkNotes_empty" }, t("empty"));
				}

				body = React.createElement("div", { className: "parkNotes_panel" },
					React.createElement("div", { className: "parkNotes_head" },
						count > 0 && React.createElement("span", { className: "parkNotes_headTitle" }, count + " " + t("pending")),
						React.createElement("span", { className: "parkNotes_spacer" }),
						React.createElement("button", {
							type: "button",
							className: "parkNotes_close",
							"aria-label": t("close"),
							onClick: function () { setOpen(false); }
						}, "\u00D7")
					),
					list,
					React.createElement("textarea", {
						className: "parkNotes_input",
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
							onClick: function () { pushToDraft(notes); }
						}, t("pushAll"))
					),
					pushedAt > 0 && React.createElement("div", { className: "parkNotes_ok", role: "status" }, t("pushed"))
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
		* Client plugin body: the park-notes dock entry.
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
