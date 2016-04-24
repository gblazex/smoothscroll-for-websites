module.exports = {
	dist: {
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
			],
			files: [
				{expand: true, flatten: true, src: ['<%= package.paths.build %>/<%= package.name %>.js'], dest: '<%= package.paths.build %>/<%= package.name %>.js'}
			]
		}
	}
};