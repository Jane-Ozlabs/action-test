const path = require("path");

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
                "@": path.join(__dirname, "src/"),
            },
        },
    },

    transpileDependencies: ["vuetify"],
};
