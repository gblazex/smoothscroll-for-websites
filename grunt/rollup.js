module.exports = function(grunt) {
    rollup: {
      package: {
        'src' : '<%= paths.src %>/js/SmoothScroll.js',
        'dest': '<%= paths.build %>/<%= pkg.name %>.js'
      },
    },
}