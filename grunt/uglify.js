module.exports = {
	options: {
		compress: {
			warnings: false
		},
		mangle: true,
		preserveComments: /^!|@preserve|@license|@cc_on/i
	},
	core: {
		src:  '<%= package.paths.build %>/<%= package.name %>.js',
		dest: '<%= package.name %>.js' // should work for Bower / RailsAssets etc
	}
};