module.exports = function(grunt) {
  'use strict';

  // load all packages matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jsonlint: {
      test: {
        src: ['data-page.json', 'data-permalink.json']
      }
    },

    shell: {
      generate: {
        command: function(json, src, dest) {
          return 'tumblr-theme-parser -d ' + json + ' < ' + src + ' > ' + dest;
        }
      }
    }
  });

  // By default, running `grunt` renders the frontpage.
  grunt.registerTask('default', ['build:page']);

  // Renders theme.html into a sample content of your choice.
  //
  // arg1: can be either `page` or `permalink`
  grunt.registerTask('build', 'Renders `theme.html` into a sample content.', function(arg1) {
    if (arguments.length === 0) {
      grunt.fail.warn('No arguments set.', 3);
    } else {
      switch (arg1) {
        case 'page':
          grunt.task.run('shell:generate:data-page.json:theme.html:compiled-theme.html');
          break;
        case 'permalink':
          grunt.task.run('shell:generate:data-permalink.json:theme.html:compiled-theme.html');
          break;
        default:
          grunt.fail.warn('Invalid argument specified for `build`.', 3);
          break;
      }
    }
  });

  // Runs a validation of the JSON files
  grunt.registerTask('test', 'Runs a validation of the JSON files.', 'jsonlint:test');
}
