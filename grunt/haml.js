module.exports = function (grunt, options) {
    return {
        main: {
            files: [
                {
                    expand: true,
                    cwd: '<%= assetPath %>/haml',
                    src: '**/*.haml',
                    dest: '<%= assetPath %>/html',
                    ext: '.html'
                }
            ]
        },
        gh: {
            files: [
                {
                    expand: true,
                    cwd: 'gh-pages/src/haml',
                    src: '**/*.haml',
                    dest: 'gh-pages/dist/',
                    ext: '.html'
                }
            ]
        }
    };
};