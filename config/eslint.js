'use strict';

module.exports = function (grunt, options) {

	return {
		base: {
			options: {
				configFile: 'rules/base.js',
				format: 'stylish',
			},
			files: [
				{
					src: options.jsFiles,
				},
			],
		},
		ci: {
			options: {
				configFile: 'rules/base.js',
				format: 'checkstyle',
				outputFile: '<%= reportsDir %>/jshint-checkstyle.xml',
			},
			files: [
				{
					src: options.jsFiles,
				},
			],
		},
	};
};
