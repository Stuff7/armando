import sveltePreprocess from "svelte-preprocess";

export default {
  compilerOptions: {
    cssHash: ({ hash, css }) => `css-${hash(css)}`,
  },
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
