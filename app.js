const express = require('express');
const Bundler = require('parcel-bundler');
const Path = require('path');

const app = express();

const entryFiles = Path.join(__dirname, './index.html');

(async function() {
  // Initializes a bundler using the entrypoint location and options provided
  const bundler = new Bundler(entryFiles, options);

  // Run the bundler, this returns the main bundle
  // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
  const bundle = await bundler.bundle();
})();

app.get('/', function(req, res) {
  res.send({ hello: 'World' });
});

const server = app.listen(3001, function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});
