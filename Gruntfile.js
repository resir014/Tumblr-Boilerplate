module.exports = function(grunt) {
  'use strict';

  // load all packages matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    shell: {
      generate: {
        command: function(json, src, dest) {
          return 'tumblr-theme-parser -d ' + json + ' < ' + src + ' > ' + dest;
        }
      }
    }
  });

  grunt.registerTask('default', ['compile-frontpage']);
  grunt.registerTask('compile-frontpage', [
    'shell:generate:data-frontpage.json:theme.html:compiled-theme.html'
  ]);
  grunt.registerTask('compile-single-post', [
    'shell:generate:data-single-post.json:theme.html:compiled-theme.html'
  ]);
}
