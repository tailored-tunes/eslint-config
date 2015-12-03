'use strict';

var path = require('path');

module.exports = function (grunt) {

	var options = {
			configDir: path.resolve('./config'),
			jsFiles: [
				'Gruntfile.js',
				'rules/**/*.js',
				'config/**/*.js',
				'index.js'
			]
		},
		configs = require('load-grunt-configs')(grunt, options);

	require('load-grunt-tasks')(grunt);

	grunt.verbose.writeflags(options);
	grunt.initConfig(configs);

	grunt.registerTask('default', [
		'eslint:base'
	]);
};
