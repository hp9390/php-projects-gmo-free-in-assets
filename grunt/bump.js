module.exports = function (grunt, options) {
    return {
        options: {
            files: ['package.json', 'composer.json'],
            updateConfigs: [],
            commit: true,
            commitMessage: 'Release v%VERSION%',
            commitFiles: ['package.json'],
            createTag: true,
            tagName: 'v%VERSION%',
            tagMessage: 'Version %VERSION%',
            push: true,
            pushTo: 'ammazon',
            gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
            globalReplace: false,
            prereleaseName: false,
            regExp: false
        }
    };
};