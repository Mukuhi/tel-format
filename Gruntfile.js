module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['**/*.js'],
      options: {
        reporter: require('jshint-stylish'),
        curly: true,
        eqeqeq: true,
        eqnull: false,
        browser: true,
        indent: 2,
        quotmark: 'single',
        unused: false,
        ignores: ['node_modules/**/*.js', 'js/tel-format.min.js'],
        globals: {
          jQuery: true
        },
      },
    },
    jsonlint: {
      sample: {
        src: [ '**/*.json' ]
      }
    },
    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      dist: {
        files:{
          'js/tel-format.min.js': ['js/tel-format.js']
        },
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      json: {
        files: ['**/*.json'],
        tasks: ['newer:jsonlint'],
        options: {
          spawn: false
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.registerTask('default',['watch']);
};
