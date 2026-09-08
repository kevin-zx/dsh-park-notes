//#region host half
/**
* Park Notes surface plugin, node half. The empty apply exists so the plugin
* appears in the host cordis.yml / Loader; the browser half ships the
* `conversation.input.dock` entry through exports["./client"], discovered
* from the package.json dsh.client declaration.
*/
/** Host plugin body — no host-side behavior for this surface plugin. */
function apply() {}
//#endregion
export { apply };
