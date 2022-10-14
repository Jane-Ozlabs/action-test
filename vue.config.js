const path = require('path');

module.exports = {
    publicPath: "/partner",
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
