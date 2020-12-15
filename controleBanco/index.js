const app = require('./server/config/express');
const config = require('./server/config/env');

app.listen(config.portApi, () => {
  console.log(
    `API INICIADA E EXECUTANDO NA PORTA ${config.portApi} (${config.env})`
  );
});

module.exports = app;