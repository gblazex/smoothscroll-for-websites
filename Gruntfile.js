/*!
 * Gruntfile For SmoothScroll
 * http://www.smoothscroll.net/
 * Copyright 2016 Balazs Galambosi.
*/

// Grunt
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

	    // Metadata.
	    pkg: grunt.file.readJSON('package.json'),
	    rollup: {
		    your_target: {
		      	'dest': 'build/smoothscroll.js',
      			'src' : 'src/SmoothScroll.js'
		    },
		},

	});

	//Dependencies
	grunt.loadNpmTasks('grunt-rollup');

	// Fixes "default" not found task error -- run "grunt" and this will work
	grunt.registerTask('default', ['rollup']);

};