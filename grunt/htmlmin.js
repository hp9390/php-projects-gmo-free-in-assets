module.exports = function (grunt, options) {
    return {
        gh: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: [
                {
                    expand: true,
                    cwd: 'gh-pages/dist/html/',
                    src: ['**/*.html'],
                    dest: 'gh-pages/dist/',
                    ext: '.html'
                }
            ]
        }
    };
};