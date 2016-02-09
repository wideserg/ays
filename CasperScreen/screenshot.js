var casper = require("casper").create({
		viewportSize : {
			width : 1600,
			height : 900
		}
	});

var filename = casper.cli.get(0);

if (!filename || !/\.(png|jpg|pdf)$/i.test(filename)) {
	casper
	.echo("Usage: $ casperjs screenshot.js <filename.[jpg|png|pdf]>")
	.exit(1);
}

var fs = require('fs');
var cwd = fs.absolute(".");
var filePath = cwd + "\\" + filename;

casper.start("https://flipboard.com/topic/sharepoint", function () {
		
	this.capture(filePath, {
		top : 0,
		left : 0,
		width : 1600,
		height : 900
	});
	this.echo("Saved screenshot of " + (this.getCurrentUrl()) + " to " + filePath);
});

casper.run();
