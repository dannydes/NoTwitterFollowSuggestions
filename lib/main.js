let data = require('sdk/self').data;
let pageMod = require('sdk/page-mod');

pageMod.PageMod({
	include: '*.twitter.com',
	contentScriptFile: data.url('suggestions_rem.js')
});