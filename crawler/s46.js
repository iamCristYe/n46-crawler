const crawler = require('./src/s46-crawler');
//自command line帶入參數
var argv = require('minimist')(process.argv.slice(2));

if (argv.a) {
  crawler.download(argv.a, argv.only);
} else {
  crawler.listMember();
}
