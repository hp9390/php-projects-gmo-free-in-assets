module.exports = function (grunt, options) {
    return {
        options: {
            files: ['package.json', 'composer.json', 'web/bundles/GFIAssetsBundle/version.json'],
            updateConfigs: [],
            commit: true,
            commitMessage: 'Release v%VERSION%',
            commitFiles: ['-a'],
            createTag: true,
            tagName: 'v%VERSION%',
            tagMessage: 'Version %VERSION%',
            push: true,
            pushTo: 'origin',
            gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
            globalReplace: false,
            prereleaseName: false,
            regExp: false
        }
    };
};