module.exports = {
  devServer: {  // configuration for webpack-dev-server
    port: 63342,
    // port: 8080, // port to run dev-server
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {'^/api': ''},
        secure: false,
        changeOrigin: true,
      }
    }
  },
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/js2_vue_cli/server/public/'
  //   : ''
};