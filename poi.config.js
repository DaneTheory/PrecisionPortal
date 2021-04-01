module.exports = {
  reactRefresh: true,

  entry: [
    'src/registerServiceWorker',
    'src/index'
  ],

  plugins: [
    {
      resolve: '@poi/plugin-pwa'
    },
    {
      resolve: '@poi/plugin-astroturf'
    }
  ],

  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
//        data: `@import "./styles/globals.scss";`
      }
    }
  }

}
