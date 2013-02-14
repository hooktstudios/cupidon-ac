module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        qunit: {
            files: ['test.html']
        }
    });

    // Task to run tests
    grunt.registerTask('test', 'qunit');
};