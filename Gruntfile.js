module.exports = function (grunt) {

    var path = require('path');
    //require('jit-grunt')(grunt)({
    //    pluginsRoot: 'grunt/'
    //});
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt'),

        // auto grunt.initConfig
        init: true,

        // data passed into config.  Can use with <%= test %>
        data: {},

        // can optionally pass options to load-grunt-tasks.
        // If you set to false, it will disable auto loading tasks.
        loadGruntTasks: {

            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: 'dependencies'
        },

        //can post process config object before it gets passed to grunt
        postProcess: function (config) {
        },

        //allows to manipulate the config object before it gets merged with the data object
        preMerge: function (config, data) {
        },

        jitGrunt: {
            // here you can pass options to jit-grunt (or just jitGrunt: true)
            staticMappings: {
                // here you can specify static mappings, for example:
                //coffee: 'grunt/coffee.js' //this does NOT work!!!
            }
        }
    });

};