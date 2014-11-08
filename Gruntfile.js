'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      all: ['chapter4/*.js','chapter5/*.js','chapter6/*.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: ['chapter4/*.js','chapter5/*.js','chapter6/*.js'],
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['tests/*.js']
    }
  });

  grunt.registerTask('test', ['jshint', 'simplemocha']);

  grunt.registerTask('default', ['test']);
};
