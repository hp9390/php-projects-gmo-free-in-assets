module.exports = function (grunt, options) {
    return {
        all: {
            expand: true,
            flatten: true,
            sourcemap: true,
            cwd: '<%= assetPath %>/coffee',
            src: ['*.coffee'],
            dest: '<%= assetPath %>/js',
            ext: '.js'
        }
    };
};