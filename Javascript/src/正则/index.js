let array = [
  'https://www.example.com/path',
  'http://www.example.com/path/path',
  'https://www.example.com',
  'http://sub.example.com',
  'http://example.com',
  'https://www.example.com/*',
  'http://sub.example.com/*',
  'http://example.com/*',
  'https://*.example.com',
  'https://*.example.com?id=123&name=333',
  'https://*.example.com/*',
]

const reg2 = /https?:\/\/[(www\.)|(\*\.)]?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

// const reg = /http(:|s:)\/\/([a-zA-Z]|\.\/).*?/
// const reg = /http(:|s:)*/
const reg = new RegExp(/http(s?):(\/\/)([a-zA-Z]|\.|\*)+([\/a-zA-Z]*)?(\/[a-zA-Z0-9\&%_\.\/-~-]*)?/)

array.forEach(item => {
  console.log(item, reg.test(item))
})

