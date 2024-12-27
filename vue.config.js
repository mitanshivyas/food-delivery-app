module.exports = {
  // Base public path
  publicPath: '/',

  // Output directory for build
  outputDir: 'dist',

  // Directory for static assets
  assetsDir: '',

  // Linting on save
  lintOnSave: true,

  // Enable runtime compiler
  runtimeCompiler: false,

  // Disable source maps in production
  productionSourceMap: true,

  // CSS-related options
  css: {
    // Enable CSS source maps
    sourceMap: false,
  },

  // Webpack configuration
  configureWebpack: {},

  // Webpack-chain customization
  chainWebpack: (config) => {},

  // Development server options
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
  },

  // Plugin options
  pluginOptions: {},
};
