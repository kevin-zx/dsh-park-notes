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
			".parkNotes_ok{color:var(--dsw-alias-state-success-primary);font-size:11px;line-height:18px}",
			".parkNotes_thumbs{display:flex;flex-wrap:wrap;gap:6px;align-items:center}",
			".parkNotes_itemBody{display:flex;flex-direction:column;gap:6px;flex:1;min-width:0}",
			".parkNotes_itemMain{display:flex;gap:6px;align-items:flex-start}",
			".parkNotes_thumb{position:relative;width:44px;height:44px;border:.5px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);border-radius:6px;padding:0;cursor:zoom-in;overflow:hidden;display:inline-flex;align-items:center;justify-content:center}",
			".parkNotes_thumb img{width:100%;height:100%;object-fit:cover;display:block}",
			".parkNotes_thumbX{position:absolute;top:-1px;right:-1px;width:16px;height:16px;border:none;border-radius:999px;background:var(--dsw-alias-bg-overlay,var(--dsw-alias-bg-layer-1));color:var(--dsw-alias-label-secondary);font-size:11px;line-height:16px;padding:0;cursor:pointer}",
			".parkNotes_thumbX:hover{color:var(--dsw-alias-state-error-primary)}",
			".parkNotes_addImage{flex:none;height:44px;min-width:44px;border:.5px dashed var(--dsw-alias-border-l2);background:transparent;color:var(--dsw-alias-label-tertiary);border-radius:6px;font-size:11px;line-height:1.2;cursor:pointer;padding:0 8px}",
			".parkNotes_addImage:hover{border-color:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-state-business-primary)}",
			".parkNotes_drop{outline:1px dashed var(--dsw-alias-state-business-primary);outline-offset:2px}",
			".parkNotes_lightbox{position:fixed;inset:0;z-index:2147483000;background:rgba(0,0,0,.72);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:24px}",
			".parkNotes_lightboxImg{max-width:min(88vw,1100px);max-height:78vh;border-radius:8px;background:var(--dsw-alias-bg-layer-1)}",
			".parkNotes_lightboxBar{display:flex;gap:8px;align-items:center}",
			".parkNotes_lightboxBtn{height:28px;border:.5px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);border-radius:8px;padding:0 10px;font-size:12px;cursor:pointer}",
			".parkNotes_lightboxBtn:hover{background:var(--dsw-alias-interactive-bg-hover)}",
			".parkNotes_lightboxHint{color:var(--dsw-alias-label-caption);font-size:11px;line-height:18px;text-align:center}",
			".parkNotes_imageHint{color:var(--dsw-alias-label-primary);font-size:11px;line-height:18px;background:var(--dsw-alias-bg-layer-2);border:.5px solid var(--dsw-alias-state-business-primary);border-radius:8px;padding:6px 8px}",
			".parkNotes_stats{display:flex;align-items:center;gap:8px;color:var(--dsw-alias-label-caption);font-size:11px;line-height:18px;border-top:.5px solid var(--dsw-alias-border-l2);padding-top:8px}"
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
			"exportedHistory": "已带入",
			"addImage": "＋图片",
			"addImageTitle": "添加图片（也可直接粘贴或拖入）",
			"removeImage": "移除这张图片",
			"imageCount": "张图",
			"previewTitle": "点击查看大图",
			"copyImage": "复制图片",
			"copyImageTitle": "复制到剪贴板，粘进输入框即成附件",
			"copied": "图片已复制，在输入框按 Ctrl+V 即可作为附件粘贴",
			"imageHandoff": "图片已复制到剪贴板 → 在输入框按 Ctrl+V 粘贴；也可以直接把缩略图拖进输入框",
			"copyFailed": "复制失败——可以直接把缩略图拖进输入框作为附件",
			"preparing": "正在准备图片……",
			"images": "图片",
			"cleanHistoryImages": "清理历史图片",
			"cleanHistoryImagesTitle": "删除已带入/已发送便签的图片（文字保留）；孤儿图片与超预算的历史图片会自动清理",
			"dragImageTitle": "拖动到输入框即可作为附件",
			"downloadImage": "保存",
			"downloadImageTitle": "保存到本地文件",
			"closePreview": "关闭（Esc）",
			"psOnlyHint": "图片会存在浏览器本地（IndexedDB），不会上传"
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
			"exportedHistory": "Pushed",
			"addImage": "+ Image",
			"addImageTitle": "Add an image (paste or drop works too)",
			"removeImage": "Remove this image",
			"imageCount": "img",
			"previewTitle": "Click to enlarge",
			"copyImage": "Copy image",
			"copyImageTitle": "Copy to clipboard, then paste into the composer as an attachment",
			"copied": "Image copied — press Ctrl+V in the composer to attach it",
			"imageHandoff": "Image copied → press Ctrl+V in the composer, or drag the thumbnail straight into it",
			"copyFailed": "Copy failed — drag the thumbnail into the composer instead",
			"preparing": "Preparing image…",
			"images": "Images",
			"cleanHistoryImages": "Clean history images",
			"cleanHistoryImagesTitle": "Delete images of pushed notes (text is kept); orphan images and past-budget history images are cleaned automatically",
			"dragImageTitle": "Drag into the composer to attach",
			"downloadImage": "Save",
			"downloadImageTitle": "Save as a local file",
			"closePreview": "Close (Esc)",
			"psOnlyHint": "Images stay in this browser (IndexedDB); nothing is uploaded"
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
				if (Array.isArray(n.images)) {
					var imgs = [];
					for (var k = 0; k < n.images.length; k++) {
						if (typeof n.images[k] === "string" && n.images[k]) imgs.push(n.images[k]);
					}
					if (imgs.length > 0) note.images = imgs;
				}
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

		//#region image store (IndexedDB — localStorage is far too small for images)
		var IDB_NAME = "dsh-park-notes";
		var IDB_STORE = "images";
		var dbPromise = null;
		/** In-memory copies of image bytes, so a just-added image needs no store read. */
		var imageBlobCache = Object.create(null);

		function openImagesDb() {
			if (dbPromise !== null) return dbPromise;
			dbPromise = new Promise(function (resolve, reject) {
				try {
					if (typeof indexedDB === "undefined") {
						reject(new Error("indexedDB unavailable"));
						return;
					}
					var request = indexedDB.open(IDB_NAME, 1);
					request.onupgradeneeded = function () {
						var db = request.result;
						if (!db.objectStoreNames.contains(IDB_STORE)) db.createObjectStore(IDB_STORE, { keyPath: "id" });
					};
					request.onsuccess = function () { resolve(request.result); };
					request.onerror = function () { reject(request.error); };
				} catch (error) {
					reject(error);
				}
			});
			return dbPromise;
		}

		/**
		* Downscale an image into a small PNG used for panel thumbnails, so a
		* multi-megabyte screenshot is never decoded just to draw a 44px tile.
		* @param blob - source image bytes.
		* @param max - longest edge in pixels.
		* @returns a promise of the thumbnail blob, or null when it cannot be made.
		*/
		function makeThumbBlob(blob, max) {
			return new Promise(function (resolve) {
				var url;
				try {
					url = URL.createObjectURL(blob);
				} catch (error) {
					resolve(null);
					return;
				}
				var image = new Image();
				image.onload = function () {
					try {
						var width = image.naturalWidth;
						var height = image.naturalHeight;
						if (!width || !height) {
							URL.revokeObjectURL(url);
							resolve(null);
							return;
						}
						var scale = Math.min(1, max / Math.max(width, height));
						var canvas = document.createElement("canvas");
						canvas.width = Math.max(1, Math.round(width * scale));
						canvas.height = Math.max(1, Math.round(height * scale));
						canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
						canvas.toBlob(function (out) {
							URL.revokeObjectURL(url);
							resolve(out || null);
						}, "image/png");
					} catch (error) {
						URL.revokeObjectURL(url);
						resolve(null);
					}
				};
				image.onerror = function () {
					URL.revokeObjectURL(url);
					resolve(null);
				};
				image.src = url;
			});
		}

		/**
		* Store one image blob under a caller-chosen id. The record lands immediately
		* (so the push hand-off and the drag-out can read it right away) and the small
		* thumbnail is added in a second, non-blocking write.
		* @param id - image id.
		* @param blob - image bytes.
		* @param name - original file name, when known.
		* @returns a promise resolving when the record itself is stored.
		*/
		function saveImageAs(id, blob, name) {
			var base = {
				id: id,
				blob: blob,
				type: blob.type || "image/png",
				name: typeof name === "string" ? name : "",
				at: Date.now()
			};
			return openImagesDb().then(function (db) {
				return new Promise(function (resolve, reject) {
					var tx = db.transaction(IDB_STORE, "readwrite");
					tx.objectStore(IDB_STORE).put(base);
					tx.oncomplete = function () { resolve(base); };
					tx.onerror = function () { reject(tx.error); };
				});
			}).then(function (stored) {
				makeThumbBlob(blob, 160).then(function (thumb) {
					if (thumb === null) return null;
					var record = Object.assign({}, base, { thumb: thumb });
					return openImagesDb().then(function (db) {
						return new Promise(function (resolve) {
							var tx = db.transaction(IDB_STORE, "readwrite");
							tx.objectStore(IDB_STORE).put(record);
							tx.oncomplete = function () { resolve(true); };
							tx.onerror = function () { resolve(false); };
						});
					});
				}).catch(function () { /* thumbnail is optional */ });
				return stored;
			});
		}

		/**
		* Resolve an image's bytes, preferring the in-memory copy of an image the user
		* just added and retrying briefly while its store write is still in flight.
		* @param imageId - stored image id.
		* @param attempts - remaining retries.
		* @returns a promise of the blob, or null.
		*/
		function resolveImageBlob(imageId, attempts) {
			var cached = imageBlobCache[imageId];
			if (cached !== undefined) return Promise.resolve(cached);
			return loadImage(imageId).then(function (record) {
				if (record !== null && record.blob !== undefined) {
					imageBlobCache[imageId] = record.blob;
					return record.blob;
				}
				if (attempts <= 0) return null;
				return new Promise(function (resolve) { setTimeout(resolve, 150); }).then(function () {
					return resolveImageBlob(imageId, attempts - 1);
				});
			});
		}

		/** @returns a promise of the stored record, or null. */
		function loadImage(id) {
			return openImagesDb().then(function (db) {
				return new Promise(function (resolve) {
					var tx = db.transaction(IDB_STORE, "readonly");
					var request = tx.objectStore(IDB_STORE).get(id);
					request.onsuccess = function () { resolve(request.result || null); };
					request.onerror = function () { resolve(null); };
				});
			}).catch(function () { return null; });
		}

		/** Delete stored images; failures are non-fatal. */
		function deleteImages(ids) {
			if (!ids || ids.length === 0) return Promise.resolve();
			return openImagesDb().then(function (db) {
				return new Promise(function (resolve) {
					var tx = db.transaction(IDB_STORE, "readwrite");
					var store = tx.objectStore(IDB_STORE);
					for (var i = 0; i < ids.length; i++) store.delete(ids[i]);
					tx.oncomplete = function () { resolve(); };
					tx.onerror = function () { resolve(); };
				});
			}).catch(function () { });
		}

		/** Total image budget; the oldest history-only images are trimmed past it. */
		var IMAGE_BUDGET_BYTES = 80 * 1024 * 1024;
		/** A single image above this is downscaled before storing. */
		var IMAGE_MAX_BYTES = 12 * 1024 * 1024;
		/** Longest edge kept when a single image is downscaled. */
		var IMAGE_MAX_EDGE = 2560;

		/** Human-readable byte size. */
		function formatBytes(bytes) {
			if (bytes < 1024) return bytes + " B";
			if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
			if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + " MB";
			return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
		}

		/** Visit every note this plugin stored in the browser, across sessions. */
		function forEachStoredNote(visit) {
			if (typeof window === "undefined" || typeof window.localStorage === "undefined") return;
			try {
				var keys = [];
				for (var i = 0; i < window.localStorage.length; i++) {
					var key = window.localStorage.key(i);
					if (typeof key === "string" && key.indexOf(STORAGE_PREFIX) === 0) keys.push(key);
				}
				for (var j = 0; j < keys.length; j++) {
					var list = parseRaw(window.localStorage.getItem(keys[j]));
					for (var k = 0; k < list.length; k++) visit(list[k]);
				}
			} catch (error) {
				/* best effort */
			}
		}

		/** Image ids still referenced by any note, split by whether a pending note holds them. */
		function imageIdIndex() {
			var pending = {};
			var history = {};
			forEachStoredNote(function (note) {
				if (note.images === undefined) return;
				var target = note.status === "pushed" ? history : pending;
				for (var i = 0; i < note.images.length; i++) target[note.images[i]] = true;
			});
			return { pending: pending, history: history };
		}

		/** Every stored image record with the metadata the trimmer needs. */
		function listImageRecords() {
			return openImagesDb().then(function (db) {
				return new Promise(function (resolve) {
					var tx = db.transaction(IDB_STORE, "readonly");
					var request = tx.objectStore(IDB_STORE).getAll();
					request.onsuccess = function () {
						var rows = request.result || [];
						var out = [];
						for (var i = 0; i < rows.length; i++) {
							var row = rows[i];
							out.push({
								id: row.id,
								at: typeof row.at === "number" ? row.at : 0,
								size: row.blob !== undefined && row.blob !== null ? row.blob.size : 0
							});
						}
						resolve(out);
					};
					request.onerror = function () { resolve([]); };
				});
			}).catch(function () { return []; });
		}

		/**
		* Remove the given image ids from every stored note, in every session, so a
		* trimmed image never leaves a dangling reference behind.
		* @param ids - image ids to strip.
		* @returns a promise resolved once every session key was rewritten.
		*/
		function stripImageRefs(ids) {
			if (!ids || ids.length === 0) return Promise.resolve();
			var doomed = {};
			for (var i = 0; i < ids.length; i++) doomed[ids[i]] = true;
			try {
				var keys = [];
				for (var j = 0; j < window.localStorage.length; j++) {
					var key = window.localStorage.key(j);
					if (typeof key === "string" && key.indexOf(STORAGE_PREFIX) === 0) keys.push(key);
				}
				for (var k = 0; k < keys.length; k++) {
					var list = parseRaw(window.localStorage.getItem(keys[k]));
					var changed = false;
					var next = [];
					for (var m = 0; m < list.length; m++) {
						var note = list[m];
						if (note.images !== undefined) {
							var rest = [];
							for (var n = 0; n < note.images.length; n++) {
								if (doomed[note.images[n]] !== true) rest.push(note.images[n]);
							}
							if (rest.length !== note.images.length) {
								changed = true;
								if (rest.length > 0) note.images = rest;
								else delete note.images;
							}
						}
						next.push(note);
					}
					if (changed) window.localStorage.setItem(keys[k], JSON.stringify(next));
				}
			} catch (error) {
				/* best effort */
			}
			return Promise.resolve();
		}

		/**
		* Keep the image store honest and bounded: drop orphans no note references,
		* then trim the oldest images that only archived (pushed) notes hold until the
		* store fits its budget. Images of pending notes are never trimmed.
		* @returns a promise of { count, bytes, trimmed }.
		*/
		function maintainImageStore() {
			return listImageRecords().then(function (records) {
				var index = imageIdIndex();
				var kept = [];
				var orphans = [];
				for (var i = 0; i < records.length; i++) {
					var record = records[i];
					if (index.pending[record.id] === true || index.history[record.id] === true) kept.push(record);
					else orphans.push(record.id);
				}
				return deleteImages(orphans).then(function () {
					var total = 0;
					for (var j = 0; j < kept.length; j++) total += kept[j].size;
					if (total <= IMAGE_BUDGET_BYTES) return { count: kept.length, bytes: total, trimmed: 0 };
					kept.sort(function (a, b) { return a.at - b.at; });
					var doomed = [];
					for (var k = 0; k < kept.length && total > IMAGE_BUDGET_BYTES; k++) {
						if (index.pending[kept[k].id] === true) continue;
						doomed.push(kept[k].id);
						total -= kept[k].size;
					}
					if (doomed.length === 0) return { count: kept.length, bytes: total, trimmed: 0 };
					return stripImageRefs(doomed).then(function () {
						return deleteImages(doomed).then(function () {
							return { count: kept.length - doomed.length, bytes: total, trimmed: doomed.length };
						});
					});
				});
			}).catch(function () { return { count: 0, bytes: 0, trimmed: 0 }; });
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

		/** Extract image files from a paste or drop payload. */
		function imageFilesFrom(dataTransfer) {
			var out = [];
			if (!dataTransfer) return out;
			if (dataTransfer.files && dataTransfer.files.length > 0) {
				for (var i = 0; i < dataTransfer.files.length; i++) {
					var file = dataTransfer.files[i];
					if (file && typeof file.type === "string" && file.type.indexOf("image/") === 0) out.push(file);
				}
			}
			if (out.length === 0 && dataTransfer.items) {
				for (var j = 0; j < dataTransfer.items.length; j++) {
					var item = dataTransfer.items[j];
					if (item.kind === "file" && typeof item.type === "string" && item.type.indexOf("image/") === 0) {
						var asFile = item.getAsFile();
						if (asFile) out.push(asFile);
					}
				}
			}
			return out;
		}

		/**
		* Re-encode an image blob as PNG through a canvas. Chrome's async clipboard
		* only accepts image/png on write, so a JPEG/WebP screenshot would otherwise
		* fail the hand-off silently.
		* @param blob - source image bytes.
		* @returns a promise of a PNG blob.
		*/
		function blobToPng(blob) {
			return new Promise(function (resolve, reject) {
				var url;
				try {
					url = URL.createObjectURL(blob);
				} catch (error) {
					reject(error);
					return;
				}
				var image = new Image();
				image.onload = function () {
					try {
						var canvas = document.createElement("canvas");
						canvas.width = image.naturalWidth;
						canvas.height = image.naturalHeight;
						canvas.getContext("2d").drawImage(image, 0, 0);
						canvas.toBlob(function (out) {
							URL.revokeObjectURL(url);
							if (out) resolve(out);
							else reject(new Error("canvas.toBlob returned nothing"));
						}, "image/png");
					} catch (error) {
						URL.revokeObjectURL(url);
						reject(error);
					}
				};
				image.onerror = function () {
					URL.revokeObjectURL(url);
					reject(new Error("image decode failed"));
				};
				image.src = url;
			});
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
			var draftImagesState = React.useState([]);
			var draftImages = draftImagesState[0];
			var setDraftImages = draftImagesState[1];
			var urlsState = React.useState({});
			var urls = urlsState[0];
			var setUrls = urlsState[1];
			var previewState = React.useState(null);
			var preview = previewState[0];
			var setPreview = previewState[1];
			var hintState = React.useState("");
			var imageHint = hintState[0];
			var setImageHint = hintState[1];
			var dropState = React.useState(false);
			var dropActive = dropState[0];
			var setDropActive = dropState[1];
			var statsState = React.useState(null);
			var stats = statsState[0];
			var setStats = statsState[1];
			var fileInputRef = React.useRef(null);
			var urlsRef = React.useRef({});


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

			// housekeeping once per session: orphan images are dropped and archived
			// images are trimmed to the budget, then the panel shows what is stored
			React.useEffect(function () {
				var alive = true;
				maintainImageStore().then(function (result) {
					if (!alive) return;
					setStats(result);
					if (result.trimmed > 0) {
						setNotes(readNotes(sessionId));
						notifyNotes();
					}
				});
				return function () { alive = false; };
			}, [sessionId]);

			// a `/note` run writes this session's notes: repaint the dock
			React.useEffect(function () {
				return subscribeNotes(function () { setNotes(readNotes(sessionId)); });
			}, [sessionId]);

			// materialize object URLs for every stored image the panel can show
			React.useEffect(function () {
				var wanted = {};
				for (var i = 0; i < notes.length; i++) {
					var imgs = notes[i].images;
					if (!imgs) continue;
					for (var j = 0; j < imgs.length; j++) wanted[imgs[j]] = true;
				}
				for (var k = 0; k < draftImages.length; k++) wanted[draftImages[k].id] = true;
				var pending = [];
				for (var id in wanted) {
					if (!Object.prototype.hasOwnProperty.call(wanted, id)) continue;
					if (urlsRef.current[id] !== undefined) continue;
					pending.push(id);
				}
				if (pending.length === 0) return;
				for (var p = 0; p < pending.length; p++) {
					(function (imageId) {
						loadImage(imageId).then(function (record) {
							if (record === null || record.blob === undefined) return;
							// paint the stored thumbnail (tiny) and keep the full blob for
							// drag-out / clipboard / lightbox only
							var display = record.thumb !== undefined ? record.thumb : record.blob;
							var url;
							try {
								url = URL.createObjectURL(display);
							} catch (error) {
								return;
							}
							urlsRef.current[imageId] = url;
							imageBlobCache[imageId] = record.blob;
							setUrls(Object.assign({}, urlsRef.current));
						});
					})(pending[p]);
				}
			}, [notes, draftImages]);

			// release every object URL when the dock unmounts (session switch, stop)
			React.useEffect(function () {
				return function () {
					for (var id in urlsRef.current) {
						if (!Object.prototype.hasOwnProperty.call(urlsRef.current, id)) continue;
						try {
							URL.revokeObjectURL(urlsRef.current[id]);
						} catch (error) {
							/* ignore */
						}
					}
					urlsRef.current = {};
				};
			}, []);

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

			/** Save dropped / pasted / picked image files into the draft attachment row. */
			function addImageFiles(files) {
				if (!files || files.length === 0) return;
				var accepted = [];
				for (var i = 0; i < files.length; i++) {
					var file = files[i];
					if (file && typeof file.type === "string" && file.type.indexOf("image/") === 0) accepted.push(file);
				}
				if (accepted.length === 0) return;
				for (var j = 0; j < accepted.length; j++) {
					(function (picked) {
						var id = "img-" + newId();
						// show the in-memory file immediately (no IndexedDB round trip),
						// then persist it in the background with its thumbnail
						try {
							urlsRef.current[id] = URL.createObjectURL(picked);
							imageBlobCache[id] = picked;
							setUrls(Object.assign({}, urlsRef.current));
						} catch (error) {
							console.error("[park-notes] preview URL failed:", error);
						}
						setDraftImages(function (current) {
							return current.concat([{ id: id, type: picked.type, name: picked.name || "" }]);
						});
						// a single oversized image is downscaled before it is stored
						var prepare = picked.size > IMAGE_MAX_BYTES ? makeThumbBlob(picked, IMAGE_MAX_EDGE) : Promise.resolve(null);
						prepare.then(function (smaller) {
							return saveImageAs(id, smaller !== null ? smaller : picked, picked.name);
						}).catch(function (error) {
							console.error("[park-notes] image save failed:", error);
							setImageHint(t("psOnlyHint"));
						});
					})(accepted[j]);
				}
			}

			/**
			* Put one stored image on the system clipboard (called from a click gesture).
			* @param imageId - stored image id.
			* @param forHandoff - true when this is the push-to-draft hand-off.
			*/
			function copyImageToClipboard(imageId, forHandoff) {
				var done = function () { setImageHint(forHandoff === true ? t("imageHandoff") : t("copied")); };
				try {
					if (typeof navigator === "undefined" || navigator.clipboard === undefined || typeof ClipboardItem === "undefined") {
						setImageHint(t("copyFailed"));
						return;
					}
					resolveImageBlob(imageId, 10).then(function (blob) {
						if (blob === null) {
							setImageHint(t("copyFailed"));
							return null;
						}
						var type = blob.type || "";
						var prepare = type === "image/png" ? Promise.resolve(blob) : blobToPng(blob);
						return prepare.then(function (png) {
							return navigator.clipboard.write([new ClipboardItem({ "image/png": png })]).then(done);
						});
					}).catch(function (error) {
						console.error("[park-notes] clipboard copy failed:", error);
						setImageHint(t("copyFailed"));
					});
				} catch (error) {
					console.error("[park-notes] clipboard unavailable:", error);
				}
			}

			/** Save one stored image to a local file. */
			function downloadImage(imageId, type) {
				var url = urlsRef.current[imageId];
				if (url === undefined) return;
				try {
					var ext = type === "image/jpeg" ? ".jpg" : type === "image/webp" ? ".webp" : type === "image/gif" ? ".gif" : ".png";
					var link = document.createElement("a");
					link.href = url;
					link.download = "park-note-" + String(imageId).replace(/^img-/, "") + ext;
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				} catch (error) {
					console.error("[park-notes] download failed:", error);
				}
			}

			function addNote() {
				var trimmed = text.trim();
				if (!trimmed && draftImages.length === 0) return;
				var note = { id: newId(), text: trimmed, at: Date.now(), status: "pending" };
				if (draftImages.length > 0) {
					var ids = [];
					for (var i = 0; i < draftImages.length; i++) ids.push(draftImages[i].id);
					note.images = ids;
				}
				commit(notes.concat([note]));
				setText("");
				setDraftImages([]);
				setImageHint("");
			}

			function removeNote(id) {
				var target = null;
				for (var i = 0; i < notes.length; i++) if (notes[i].id === id) target = notes[i];
				commit(notes.filter(function (n) { return n.id !== id; }));
				if (target !== null && target.images !== undefined) deleteImages(target.images);
				setPushedAt(0);
				if (editingId === id) setEditingId(null);
			}

			/** Drop one image from a note and from the image store. */
			function removeNoteImage(noteId, imageId) {
				commit(notes.map(function (n) {
					if (n.id !== noteId || n.images === undefined) return n;
					var copy = Object.assign({}, n);
					var rest = [];
					for (var i = 0; i < n.images.length; i++) if (n.images[i] !== imageId) rest.push(n.images[i]);
					if (rest.length > 0) copy.images = rest;
					else delete copy.images;
					return copy;
				}));
				deleteImages([imageId]);
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
				var body = list.map(function (n) { return n.text; }).filter(function (s) { return s.length > 0; }).join("\n");
				var firstImage = null;
				for (var k = 0; k < list.length && firstImage === null; k++) {
					if (list[k].images !== undefined && list[k].images.length > 0) firstImage = list[k].images[0];
				}
				if (body.length > 0) inputActions.setDraft(currentDraft ? currentDraft + "\n\n" + body : body);
				setPushedAt(Date.now());
				// an image cannot be injected as a composer attachment through the public
				// API, so hand it over through the clipboard: paste it into the composer
				if (firstImage !== null) {
					setImageHint(t("preparing"));
					copyImageToClipboard(firstImage, true);
				}
				var ids = [];
				for (var i = 0; i < list.length; i++) ids.push(list[i].id);
				// sent-detection only applies to text that can be matched in the draft
				pushWatch.current = body.length > 0 ? { ids: ids, body: body } : null;
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
				var removed = [];
				for (var i = 0; i < notes.length; i++) {
					if (notes[i].status === "pushed" && notes[i].images !== undefined) removed = removed.concat(notes[i].images);
				}
				commit(notes.filter(function (n) { return n.status !== "pushed"; }));
				deleteImages(removed);
				setPushedAt(0);
			}

			/** Delete the images of this session's archived notes (their text stays). */
			function cleanHistoryImages() {
				var ids = [];
				for (var i = 0; i < notes.length; i++) {
					if (notes[i].status === "pushed" && notes[i].images !== undefined) ids = ids.concat(notes[i].images);
				}
				if (ids.length === 0) {
					maintainImageStore().then(setStats);
					return;
				}
				deleteImages(ids).then(function () {
					commit(notes.map(function (n) {
						if (n.status !== "pushed" || n.images === undefined) return n;
						var copy = Object.assign({}, n);
						delete copy.images;
						return copy;
					}));
					return maintainImageStore().then(setStats);
				});
			}

			/** Download every note of this session as a Markdown file. */
			function exportNotes() {
				try {
					var lines = ["# " + t("title") + " · " + new Date().toLocaleString()];
					var imgTag = function (n) {
						return n.images !== undefined && n.images.length > 0 ? "  [" + n.images.length + " " + t("imageCount") + "]" : "";
					};
					lines.push("", "## " + t("exportedPending") + " (" + pending.length + ")");
					if (pending.length === 0) lines.push("-");
					for (var i = 0; i < pending.length; i++) {
						lines.push("- " + (pending[i].pinned === true ? "[!] " : "") + pending[i].text.replace(/\s*\n\s*/g, " ") + imgTag(pending[i]));
					}
					lines.push("", "## " + t("exportedHistory") + " (" + history.length + ")");
					for (var j = 0; j < history.length; j++) {
						var n = history[j];
						lines.push("- [x] " + n.text.replace(/\s*\n\s*/g, " ") + imgTag(n) + "  (" + (typeof n.sentAt === "number" ? t("tagSent") : t("tagPushed")) + " " + timeLabel(n.sentAt || n.pushedAt || n.at) + ")");
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

			/**
			* Open the enlarged view. The tile paints the stored thumbnail instantly and
			* the full-resolution object URL is created only for this preview.
			* @param imageId - stored image id.
			*/
			function openPreview(imageId) {
				var full = null;
				try {
					if (imageBlobCache[imageId] !== undefined) full = URL.createObjectURL(imageBlobCache[imageId]);
				} catch (error) {
					full = null;
				}
				setPreview({ id: imageId, url: full !== null ? full : urls[imageId], full: full });
			}

			/** Close the enlarged view and release its full-resolution URL. */
			function closePreview() {
				if (preview !== null && preview.full !== null && preview.full !== undefined) {
					try {
						URL.revokeObjectURL(preview.full);
					} catch (error) {
						/* ignore */
					}
				}
				closePreview();
			}

			/**
			* Start dragging one stored image out of the panel. The composer accepts
			* dropped image files, so this is the direct hand-off into the draft.
			* @param event - dragstart event.
			* @param imageId - stored image id.
			*/
			function startImageDrag(event, imageId) {
				try {
					var blob = imageBlobCache[imageId];
					if (blob === undefined) return;
					var type = blob.type || "image/png";
					var ext = type.indexOf("jpeg") >= 0 ? ".jpg" : type.indexOf("webp") >= 0 ? ".webp" : type.indexOf("gif") >= 0 ? ".gif" : ".png";
					var file = new File([blob], String(imageId) + ext, { type: type });
					event.dataTransfer.effectAllowed = "copy";
					event.dataTransfer.items.add(file);
					event.dataTransfer.setData("text/plain", t("title"));
				} catch (error) {
					console.error("[park-notes] image drag failed:", error);
				}
			}

			/** Thumbnail row for one note's images (click to enlarge, × to remove). */
			function renderThumbs(note) {
				if (note.images === undefined || note.images.length === 0) return null;
				var thumbs = [];
				var buildThumb = function (imageId) {
					var url = urls[imageId];
					thumbs.push(React.createElement("span", {
						className: "parkNotes_thumb",
						key: imageId,
						title: t("dragImageTitle"),
						draggable: true,
						onDragStart: function (event) { startImageDrag(event, imageId); }
					},
						url !== undefined
							? React.createElement("img", {
								src: url,
								alt: "",
								draggable: false,
								onClick: function () { openPreview(imageId); }
							})
							: React.createElement("span", { className: "parkNotes_meta" }, "\u2026"),
						React.createElement("button", {
							type: "button",
							className: "parkNotes_thumbX",
							title: t("removeImage"),
							onClick: function (event) {
								event.stopPropagation();
								removeNoteImage(note.id, imageId);
							}
						}, "\u00D7")
					));
				};
				for (var i = 0; i < note.images.length; i++) buildThumb(note.images[i]);
				return React.createElement("div", { className: "parkNotes_thumbs" }, thumbs);
			}

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
					React.createElement("div", { className: "parkNotes_itemBody" },
						renderThumbs(note),
						React.createElement("div", { className: "parkNotes_itemMain" },
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
						)
					)
				);
			}

			function renderHistoryItem(note) {
				if (editingId === note.id) return renderEditArea(note);
				var sent = typeof note.sentAt === "number";
				return React.createElement("div", { className: "parkNotes_item parkNotes_itemHistory", key: note.id },
					React.createElement("div", { className: "parkNotes_itemBody" },
						renderThumbs(note),
						React.createElement("div", { className: "parkNotes_itemMain" },
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
						)
					)
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

				body = React.createElement("div", {
					className: dropActive ? "parkNotes_panel parkNotes_drop" : "parkNotes_panel",
					onDragOver: function (event) {
						if (imageFilesFrom(event.dataTransfer).length > 0 || (event.dataTransfer && event.dataTransfer.types && Array.prototype.indexOf.call(event.dataTransfer.types, "Files") >= 0)) {
							event.preventDefault();
							setDropActive(true);
						}
					},
					onDragLeave: function () { setDropActive(false); },
					onDrop: function (event) {
						var files = imageFilesFrom(event.dataTransfer);
						setDropActive(false);
						if (files.length === 0) return;
						event.preventDefault();
						addImageFiles(files);
					}
				},
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
					React.createElement("div", { className: "parkNotes_thumbs" },
						draftImages.map(function (image) {
							var url = urls[image.id];
							return React.createElement("span", {
								className: "parkNotes_thumb",
								key: image.id,
								title: t("dragImageTitle"),
								draggable: true,
								onDragStart: function (event) { startImageDrag(event, image.id); }
							},
								url !== undefined
									? React.createElement("img", {
										src: url,
										alt: "",
										draggable: false,
										onClick: function () { openPreview(image.id); }
									})
									: React.createElement("span", { className: "parkNotes_meta" }, "\u2026"),
								React.createElement("button", {
									type: "button",
									className: "parkNotes_thumbX",
									title: t("removeImage"),
									onClick: function (event) {
										event.stopPropagation();
										setDraftImages(function (current) {
											return current.filter(function (item) { return item.id !== image.id; });
										});
									}
								}, "\u00D7")
							);
						}),
						React.createElement("button", {
							type: "button",
							className: "parkNotes_addImage",
							title: t("addImageTitle"),
							onClick: function () { if (fileInputRef.current !== null) fileInputRef.current.click(); }
						}, t("addImage")),
						React.createElement("input", {
							ref: fileInputRef,
							type: "file",
							accept: "image/*",
							multiple: true,
							style: { display: "none" },
							onChange: function (event) {
								addImageFiles(event.target.files);
								event.target.value = "";
							}
						})
					),
					React.createElement("textarea", {
						className: "parkNotes_input",
						ref: inputRef,
						placeholder: count > 0 ? t("placeholderMore") : t("placeholderEmpty"),
						value: text,
						autoFocus: true,
						rows: 2,
						onChange: function (e) { setText(e.target.value); },
						onPaste: function (event) {
							var files = imageFilesFrom(event.clipboardData);
							if (files.length === 0) return;
							event.preventDefault();
							addImageFiles(files);
						},
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
					imageHint !== "" && React.createElement("div", { className: "parkNotes_imageHint", role: "status" }, imageHint),
					stats !== null && stats.count > 0 && React.createElement("div", { className: "parkNotes_stats" },
						React.createElement("span", null, t("images") + " " + stats.count + " · " + formatBytes(stats.bytes)),
						React.createElement("span", { className: "parkNotes_spacer" }),
						React.createElement("button", {
							type: "button",
							className: "parkNotes_mini",
							title: t("cleanHistoryImagesTitle"),
							onClick: cleanHistoryImages
						}, t("cleanHistoryImages"))
					),
					pushedAt > 0 && React.createElement("div", { className: "parkNotes_ok", role: "status" }, t("pushed")),
					historyArea
				);
			}

			var lightbox = preview === null ? null : React.createElement("div", {
				className: "parkNotes_lightbox",
				role: "dialog",
				tabIndex: 0,
				autoFocus: true,
				"aria-label": t("previewTitle"),
				onClick: function () { closePreview(); },
				onKeyDown: function (event) {
					if (event.key === "Escape") {
						event.preventDefault();
						closePreview();
					}
				}
			},
				React.createElement("img", {
					className: "parkNotes_lightboxImg",
					src: preview.url,
					alt: "",
					onClick: function (event) { event.stopPropagation(); }
				}),
				React.createElement("div", { className: "parkNotes_lightboxBar" },
					React.createElement("button", {
						type: "button",
						className: "parkNotes_lightboxBtn",
						title: t("copyImageTitle"),
						onClick: function (event) { event.stopPropagation(); copyImageToClipboard(preview.id); }
					}, t("copyImage")),
					React.createElement("button", {
						type: "button",
						className: "parkNotes_lightboxBtn",
						title: t("downloadImageTitle"),
						onClick: function (event) { event.stopPropagation(); downloadImage(preview.id, ""); }
					}, t("downloadImage")),
					React.createElement("button", {
						type: "button",
						className: "parkNotes_lightboxBtn",
						onClick: function (event) { event.stopPropagation(); closePreview(); }
					}, t("closePreview"))
				),
				imageHint !== "" && React.createElement("div", { className: "parkNotes_lightboxHint" }, imageHint)
			);

			return React.createElement("div", { className: "parkNotes_dock", "data-park-notes": "" },
				React.createElement("div", { className: open ? "parkNotes_card parkNotes_open" : "parkNotes_card" }, bar, body),
				lightbox
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
