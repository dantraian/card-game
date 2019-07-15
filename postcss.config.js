module.exports = {
  plugins: [require("tailwindcss")("tailwind.js"), require("autoprefixer")()],
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
};
