module.exports = (grunt) ->

  grunt.initConfig

    pkg: grunt.file.readJSON 'package.json'

    sass:
      dist:
        options:
          style: 'expanded'
        files: [{
          expand: true
          cwd: 'assets/styles/scss/'
          src: ['*.scss']
          dest: 'assets/styles/'
          ext: '.css'
        }]

    watch:
      styles:
        files: ['assets/styles/scss/*.scss']
        tasks: ['sass']

  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  # grunt.loadNpmTasks 'grunt-contrib-coffee'
  # grunt.loadNpmTasks 'grunt-contrib-jasmine'

  grunt.registerTask 'default', ['sass', 'watch']
