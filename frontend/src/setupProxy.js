const { createProxyMiddleware } = require('http-proxy-middleware')

module.export = function(app) {
  app.use(createProxyMiddleware('/api', { target: 'http://localhost:7000' }))
}

