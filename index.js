const config = require('./src/config/common');

const app = require('./app');

app.listen(config.port, config.ip, () => {
  console.log('%s (%s) listening at http://%s:%s', config.serviceName, config.env, config.ip, config.port);
});

module.exports = {
  app
};
