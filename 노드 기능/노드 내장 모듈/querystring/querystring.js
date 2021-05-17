const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.naver.com');
const query = querystring.parse(parsedUrl.query);
console.log('querustring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));