# Tumblr Boilerplate

[![Build Status](http://img.shields.io/travis/resir014/Tumblr-Boilerplate.svg)](https://travis-ci.org/resir014/Tumblr-Boilerplate)
[![Dependencies](https://img.shields.io/gemnasium/resir014/Tumblr-Boilerplate.svg)](https://gemnasium.com/resir014/Tumblr-Boilerplate)

Tumblr Boilerplate is a base starter kit for developing Tumblr themes.

## Installation

### Requirements

* [Node.js](https://nodejs.org/) (>= 0.10)
* Bower - `npm install -g grunt-cli`
* Tumblr Theme Parser - `npm install -g tumblr-theme-parser`

### Installation guide

```sh
$ git clone https://github.com/resir014/Tumblr-Boilerplate.git
$ cd Tumblr-Boilerplate
$ npm install
```

## Features

### Core features

Tumblr Boilerplate includes almost all style classes included within the [themes documentation](http://www.tumblr.com/docs/en/custom_themes), complete with grab-and-go advanced features features that can be easily applied, like Google Analytics tracking, Disqus comments, everything that's pretty universal in Tumblr's theme standards.

### Local previews

Tumblr Boilerplate also comes with a built-in theme parser, complete with a JSON-based dummy content that will be used to compile the theme files into a rough representation of what the theme would look like if it were loaded as a Tumblr theme.

This tool utilises the `tumblr-theme-parser` package, and is invoked through the `grunt` command.

```sh
# Generates a sample homepage.
$ grunt build:page

# Generates a sample permalink page.
$ grunt build:permalink
```

### JSON validation

Tumblr Boilerplate comes with `grunt-jsonlint`, a plugin that helps you validate your JSON data, if you want to tweak your dummy content a bit.

```sh
# Runs a validation of the JSON files.
$ grunt test
```

## Components

* [Normalize.css](http://necolas.github.io/normalize.css/) (version 3.0.2)
* [jQuery](https://jquery.com/) (version 1.11.3)
* [Grunt](http://gruntjs.com/)
* [tumblr-theme-parser](https://github.com/carrot/tumblr-theme-parser)

## License

Released under the [MIT license](https://github.com/resir014/Tumblr-Boilerplate/blob/master/LICENSE).
