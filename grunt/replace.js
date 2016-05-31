module.exports = {
	dist: {
		files: 	[{expand: true, flatten: true, src: ['<%= package.paths.src %>/<%= package.name %>.js'], dest: '<%= package.paths.build %>'}],
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