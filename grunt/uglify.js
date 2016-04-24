module.exports = {
	options: {
		compress: {
			warnings: false
		},
		mangle: true,
		preserveComments: /^!|@preserve|@license|@cc_on/i
	},
	core: {
		src:  '<%= rollup.package.dest %>',
		dest: '<%= package.paths.build %>/min/<%= package.name %>.min.js'
	}
};