module.exports = function (grunt, options) {
    return {
        all: {
            options: {
                sassDir: 'web/bundles/GFIAssetsBundle/scss',
                cssDir: 'web/bundles/GFIAssetsBundle/css',
                environment: 'production'
            }
        }
    };
};