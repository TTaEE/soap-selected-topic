var http = require('http');
var soap = require('soap');
var xpath = require('xpath')
  , dom = require('xmldom').DOMParser;
var fs = require('fs');

var xml = require('fs').readFileSync('movieG5.xml', 'utf8')
	xml = xml.replace(/(\r\n|\n|\r|\t)/gm, "");
    var doc = new dom().parseFromString(xml)
    var nodes = xpath.select("/movielist", doc);
    console.log(nodes)
    for (var i = 0; i < nodes[0].getElementsByTagName("movie").length; i++) {
    	var a = doc.createElement("length")
    	var c = doc.createTextNode("123")
    	var b = doc.createElement("resolution")
    	var d = doc.createTextNode("1024x768")
    	nodes[0].getElementsByTagName("movie")[i].appendChild(a);
    	nodes[0].getElementsByTagName("movie")[i].getElementsByTagName("length")[0].appendChild(c);
    	nodes[0].getElementsByTagName("movie")[i].appendChild(b);
    	nodes[0].getElementsByTagName("movie")[i].getElementsByTagName("resolution")[0].appendChild(d);
    }

 fs.writeFile('movieG5.xml', doc, 'utf8', function(err){});
