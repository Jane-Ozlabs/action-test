const path = require('path');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
    publicPath: "/",
    // outputDir: "dist/partner",
    // indexPath: "../index.html",
    devServer: {
        allowedHosts: "all",
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        },
        plugins: [
            new ScriptExtHtmlWebpackPlugin({
                custom: {
                    test:/\.js$/,
                    attribute: 'nonce',
                    value: process.env.VUE_APP_SCRIPT_NONCE
                }           
            })
        ]
    },

    transpileDependencies: [
      'vuetify'
    ]
}
