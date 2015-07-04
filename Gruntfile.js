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

  // By default, running `grunt` renders the frontpage.
  grunt.registerTask('default', ['page']);

  // Renders `theme.html` into a sample frontpage.
  grunt.registerTask('page', [
    'shell:generate:data-page.json:theme.html:compiled-theme.html'
  ]);

  // Renders `theme.html` into a sample permalink.
  grunt.registerTask('permalink', [
    'shell:generate:data-permalink.json:theme.html:compiled-theme.html'
  ]);
}
