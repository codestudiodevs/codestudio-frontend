const middleware = {}

middleware['userType'] = require('..\\middleware\\userType.js')
middleware['userType'] = middleware['userType'].default || middleware['userType']

middleware['verify'] = require('..\\middleware\\verify.js')
middleware['verify'] = middleware['verify'].default || middleware['verify']

export default middleware
