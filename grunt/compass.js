module.exports = function (grunt, options) {
    return {
        all: {
            options: {
                sourcemap: true,
                sassDir: '<%= assetPath %>/scss',
                cssDir: '<%= assetPath %>/css',
                environment: 'production'
            }
        },
        gh: {
            options: {
                sourcemap: true,
                sassDir: 'gh-pages/src/scss',
                cssDir: 'gh-pages/dist/css',
                environment: 'production'
            }
        }
    };
};