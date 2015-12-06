module.exports = function (grunt, options) {
    return {
        my_target: {
            options: {
                sourceMap: true,
                sourceMapIncludeSources: true
            },
            files: {
                '<%= assetPath %>/js/require.min.js': ['<%= assetPath %>/bower_components/requirejs/require.js'],
                '<%= assetPath %>/js/requirejsConfig.min.js': ['<%= assetPath %>/js/requirejsConfig.js'],
                '<%= assetPath %>/js/main.min.js': ['<%= assetPath %>/js/main.js']
            }
        }
    };
};