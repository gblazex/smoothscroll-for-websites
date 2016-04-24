module.exports = {
	dist: {
		files: 	[{expand: true, flatten: true, src: ['<%= rollup.package.dest %>'], dest: 'build'}],
		options: {
			patterns: [
				{
					match: 'VERSION',
					replacement: '<%= package.version %>'
				},
				{
					match: 'AUTHOR',
					replacement: '<%= package.author %>'
				}
			]
		}
	}
};