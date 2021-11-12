const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['logined'] = require('..\\middleware\\logined.js')
middleware['logined'] = middleware['logined'].default || middleware['logined']

export default middleware
