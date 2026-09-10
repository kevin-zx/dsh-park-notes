//#region host half
/**
* Park Notes host half. Registers the `/note <text>` slash command: it runs
* directly against the agent (no model message is created) and its result row is
* the confirmation the user sees. The note text itself is parked by the browser
* half, which projects the `command/run` event for this command from the session
* event stream. The `commands` service is read optionally: profiles without a
* command adapter (headless, ACP) simply skip the registration.
*/
/** Slash-command name (without the leading slash). */
var COMMAND_NAME = "note";

/** Trim leading/trailing whitespace without relying on newer String APIs. */
function trim(text) {
	return typeof text === "string" ? text.replace(/^\s+|\s+$/g, "") : "";
}

/**
* Host plugin body: register the `/note` command when a command registry exists.
* @param ctx - host plugin context.
*/
function apply(ctx) {
	ctx.inject(["commands"], function (scope) {
		var commands = scope.get("commands");
		if (commands === undefined) return;
		scope.effect(function () {
			return commands.register({
				name: COMMAND_NAME,
				description: "记入「稍后说」便签，不打断当前对话 / Park a note for later without interrupting",
				input: { hint: "<要记的内容 / what to raise later>" },
				handler: function (invocation) {
					var text = trim(invocation && invocation.rawInput);
					if (!text) return { kind: "error", text: "用法 / usage: /note <想聊的内容>" };
					return { kind: "success", text: "已记入「稍后说」：" + text };
				}
			});
		}, "park-notes: /note command");
		scope.logger("park-notes").info("slash command /%s registered", COMMAND_NAME);
	});
}
//#endregion
export { apply };
