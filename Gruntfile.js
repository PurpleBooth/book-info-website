module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            express: {
                files: ['**/*.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            }
        },
        express: {
            dev: {
                options: {
                    script: 'bin/www'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('server', ['express:dev', 'watch'])
    grunt.registerTask('default', ['server']);

}