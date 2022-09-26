const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/SGIFPCapture', {
            target: `https://localhost:8443/`,
            changeOrigin:true
        })
    );
}