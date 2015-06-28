# Tumblr Boilerplate

Tumblr Boilerplate is a base starter kit for developing Tumblr themes.

## Installation

### Requirements

* Node.js (>= 0.10)

### Installation guide

First, you will need to clone this repository into your computer.

```sh
$ git clone https://github.com/resir014/Tumblr-Boilerplate.git
```

Then run the install command.

```sh
$ npm install
```

This will install the required Node packages and command-line tools for development.

## Features

### Core features

Tumblr Boilerplate includes almost all style classes included within the [themes documentation](http://www.tumblr.com/docs/en/custom_themes), complete with grab-and-go advanced features features that can be easily applied, like Google Analytics tracking, Disqus comments, everything that's pretty universal in Tumblr's theme standards.

### Local previews

Tumblr Boilerplate also comes with a built-in theme parser, complete with a JSON-based dummy content that will be used to compile the theme files into a rough representation of what the theme would look like if it were loaded as a Tumblr theme.

This tool utilises the `tumblr-theme-parser` package, and is invoked through the `grunt` command.

```sh
# Generates a sample homepage.
$ grunt compile-frontpage

# Generates a sample permalink page.
$ grunt compile-single-post
```

## Components

* [Normalize.css](http://necolas.github.io/normalize.css/) (version 3.0.2)
* [jQuery](https://jquery.com/) (version 1.11.2)
* [Grunt](http://gruntjs.com/) (version 0.4.5)
* [tumblr-theme-parser](https://github.com/carrot/tumblr-theme-parser) (version 1.0.0)

## License

Any copyright is dedicated to the Public Domain.

[http://creativecommons.org/publicdomain/zero/1.0/](http://creativecommons.org/publicdomain/zero/1.0/)
