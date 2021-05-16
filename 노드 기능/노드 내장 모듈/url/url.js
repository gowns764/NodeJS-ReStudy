const url = require('url');

const { URL } = url;
const myURL = new URL('http://www.naver.com');

console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('--------------------------------');
const parsedUrl = url.parse('http://www.naver.com')
console.log('irl.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));