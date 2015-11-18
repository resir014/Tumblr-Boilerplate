module.exports = function(grunt) {
  var globalConfig = {
    src: 'src',
    dest: 'dist'
  };

  // load all packages matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    globalConfig: globalConfig,

    jsonlint: {
      test: {
        src: ['data/*.json']
      }
    },

    execute: {
      build_page: {
        options: {
          args: ['page']
        },
        src: ['./scripts/index.js']
      },
      build_permalink: {
        options: {
          args: ['permalink']
        },
        src: ['./scripts/index.js']
      }
    },

    clean: {
      build: ['public']
    },

    copy: {
      build: {
        expand: true,
        cwd: 'theme/',
        src: '*.css',
        dest: 'public/',
      },
    },

    watch: {
      serve: {
        files: ['theme/*'],
        tasks: ['build:page'],
        options: {
          spawn: false,
        },
      },
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
          grunt.task.run(['clean', 'copy', 'execute:build_page']);
          break;
        case 'permalink':
          grunt.task.run(['clean', 'copy', 'execute:build_permalink']);
          break;
        default:
          grunt.fail.warn('Invalid argument specified for `build`.', 3);
          break;
      }
    }
  });

  // Runs a validation of the JSON files
  grunt.registerTask('test', 'Runs a validation of the JSON files.', 'jsonlint:test');
};
