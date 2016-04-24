module.exports = function(grunt) {
	uglify: {
		options: {
			compress: {
				warnings: false
			},
			mangle: true,
			preserveComments: /^!|@preserve|@license|@cc_on/i
		},
		core: {
			src:  '<%= rollup.package.dest %>',
			dest: '<%= pkg.paths.build %>/<%= pkg.name %>.min.js'
		}
	}
};