import sveltePreprocess from "svelte-preprocess";

export default {
  preprocess: sveltePreprocess({
    scss: {
      importer(url) {
        if (url.startsWith("style/")) {
          return { file: `./src/${url}.scss` };
        }
        return null;
      },
    },
  }),
};
