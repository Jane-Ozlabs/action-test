const path = require('path');

module.exports = {
    publicPath: "./",
    devServer: {
        allowedHosts: "all",
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        }
    },

    transpileDependencies: [
      'vuetify'
    ]
}
