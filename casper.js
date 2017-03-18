var phantomcss = require('phantomcss')

// function testDir() {
//   var pathParts = fs.absolute(casper.test.currentTestFile).split('/')
//   pathParts.pop()
//   return pathParts.join('/')
// }

var phantomcss = require('phantomcss');

casper.test.begin('test', function(test) {
  console.log(fs.workingDirectory)
  phantomcss.init({
    rebase: casper.cli.get('rebase'),
		casper: casper,
		libraryRoot: fs.absolute( fs.workingDirectory + '/node_modules/phantomcss' ),
		screenshotRoot: fs.absolute( fs.workingDirectory + '/screenshots' ),
		failedComparisonsRoot: fs.absolute( fs.workingDirectory + '/failures' ),
		addLabelToFailedImage: false,
  })
  casper.start('file://' + fs.workingDirectory + '/casper/casper.html')
  casper.viewport(360, 2000)
  casper.then(function() { phantomcss.screenshot('body', 'body') })
  casper.then(function checkScreenshots() { phantomcss.compareAll() })
  casper.run(function() { casper.test.done() })
})
