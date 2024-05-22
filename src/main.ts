import "~/polyfills";
import "~/style/globals/_index.scss";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import App from "~/App.svelte";

export default new App({ target: document.body });
