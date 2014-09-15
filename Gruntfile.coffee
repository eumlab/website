module.exports = (grunt) ->

  grunt.initConfig

    pkg: grunt.file.readJSON 'package.json'

    sass:
      dialog:
        options:
          style: 'expanded'
        files:
          'assets/styles/uke101.css': 'assets/styles/scss/uke101.scss'
          'assets/styles/style.css': 'assets/styles/scss/style.scss'

    watch:
      styles:
        files: ['assets/styles/scss/*.scss']
        tasks: ['sass']

  grunt.loadNpmTasks 'grunt-contrib-sass'
  # grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  # grunt.loadNpmTasks 'grunt-contrib-jasmine'

  grunt.registerTask 'default', ['sass', 'watch']
