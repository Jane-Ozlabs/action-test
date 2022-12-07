const path = require('path');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
    publicPath: "/",
    // outputDir: "dist/partner",
    // indexPath: "../index.html",
    devServer: {
        allowedHosts: "all",
    },

    css: {
        extract: {
            ignoreOrder: true
        }
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
        ],
        // 250kb 이상일 경우 webpack은 경고를 합니다. 경고를 관리하는 변수가 hint
        performance: {
            hints: false,
        },
        // 청크란? 하나의 번들 파일을 효과적으로 다루기 위해 여러가지의 파일로 다시 나누는 것
        // chunks 모든 코드의 중복되는 요소들을 확인해 spliting webpack 공식 문서에서도 all 옵션 권장
        // 생성할 청크의 최소 바이트와 최대 바이트 설정
        optimization: {
            splitChunks: {
                chunks: 'all',
                minSize: 10000,
                maxSize: 250000,
            }
        },
    },

    transpileDependencies: [
        'vuetify'
    ]
}
