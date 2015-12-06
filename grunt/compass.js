module.exports = function (grunt, options) {
    return {
        all: {
            options: {
                sourcemap: true,
                sassDir: '<%= assetPath %>/scss',
                cssDir: '<%= assetPath %>/css',
                environment: 'production'
            }
        }
    };
};