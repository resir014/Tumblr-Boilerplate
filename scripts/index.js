(function() {
  var fs = require('fs');
  var arg = process.argv.slice(2);
  var compile = require('tumblr-theme-parser').compile;

  var themeHtml, data;

  switch (arg[0]) {
    case 'page':
      themeHtml = fs.readFileSync('./theme.html', 'utf8').toString();
      data = fs.readFileSync('./data-page.json', 'utf8').toString();
      break;
    case 'permalink':
      themeHtml = fs.readFileSync('./theme.html', 'utf8').toString();
      data = fs.readFileSync('./data-permalink.json', 'utf8').toString();
      break;
    default:
      console.log('Invalid argument specified.');
      process.exit(-1);
  }

  var compiledHtml = compile(themeHtml, JSON.parse(data));

  fs.writeFile('./compiled-theme.html', compiledHtml, function(err) {
    if (err) {
      return console.log(err);
    }
  });
})();
