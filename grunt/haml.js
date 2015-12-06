module.exports = function (grunt, options) {
    return {
        main: {
            files: [
                {expand: true, cwd: '<%= assetPath %>/haml', src: '**/*.haml', dest: '<%= assetPath %>/html', ext: '.html'}
            ]
        }
    };
};