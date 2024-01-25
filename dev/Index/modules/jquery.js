const { JSDOM } = require('jsdom');
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
const window = document.defaultView;
const $ = require('jquery')(window);
//初始化jquery相关数据  
module.exports = $;

/**
 * 其他模块引入jquery
 * const $ = require('./jq/jquery')
 */