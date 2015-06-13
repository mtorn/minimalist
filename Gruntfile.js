module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'css/minimalist.css': 'src/minimalist.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },

            css: {
                files: ['src/minimalist.scss'],
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['watch','sass']);
};