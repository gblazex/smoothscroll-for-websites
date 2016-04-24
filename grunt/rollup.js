module.exports = function(grunt) {
	rollup: {
		package: {
			'src' : '<%= pkg.paths.src %>/js/SmoothScroll.js',
			'dest': '<%= pkg.paths.build %>/<%= pkg.name %>.js'
		}
	}
}