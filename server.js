const path = require('path')
  , express = require('express')
  , compression = require('compression')
  , app = express()
  , host = process.env.REACT_APP_CLIENT_HOST || '0.0.0.0'
  , port = process.env.REACT_APP_CLIENT_PORT || 3001; // eslint-disable-line no-magic-numbers

app.set('x-powered-by', false);
app.use(compression());

app.use(express.static(path.resolve(__dirname, 'build')));

app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, host, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('running express server');
});
