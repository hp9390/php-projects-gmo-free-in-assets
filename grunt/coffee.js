module.exports = function (grunt, options) {
    return {
        all: {
            expand: true,
            flatten: true,
            cwd: 'web/bundles/GFIAssetsBundle/coffee',
            src: ['*.coffee'],
            dest: 'web/bundles/GFIAssetsBundle/js',
            ext: '.js'
        }
    };
};