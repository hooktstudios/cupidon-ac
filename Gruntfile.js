module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        qunit: {
          files: ['test.html']
        }
    });

    // Task to run tests
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.registerTask('test', 'qunit');
};