module.exports = function (grunt, options) {
    return {
        options: {
            baseUrl: "web/bundles/GFIAssetsBundle/js/require.min.js",
            //mainConfigFile: "path/to/config.js",
            //name: "path/to/almond",
            out: "web/bundles/GFIAssetsBundle/js/require.js"
        }
    };
};