const { createProxyMiddleware }  = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            //target: 'http://175.126.37.21:33000/api',
            target: 'http://192.168.0.7:13000/api',
            changeOrigin:true
        })
    )
}