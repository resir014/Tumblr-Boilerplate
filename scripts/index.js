(function() {
  var fs = require('fs');
  var arg = process.argv.slice(2);
  var compile = require('tumblr-theme-parser').compile;

  var themeHtml, data;

  themeHtml = fs.readFileSync(__dirname + '/../theme.html', 'utf8').toString();

  switch (arg[0]) {
    case 'page':
      data = fs.readFileSync(__dirname + '/../data/page.json', 'utf8').toString();
      break;
    case 'permalink':
      data = fs.readFileSync(__dirname + '/../data/permalink.json', 'utf8').toString();
      break;
    default:
      console.log('Invalid argument specified.');
      process.exit(-1);
  }

  var compiledHtml = compile(themeHtml, JSON.parse(data));

  fs.writeFile(__dirname + '/../compiled-theme.html', compiledHtml, function(err) {
    if (err) {
      return console.log(err);
    }
  });
})();
