import express from 'express';
import path from 'path';

export default function startServer() {
	const port = 8011

	const server = express();

  server.get('/', (req, res) => {
    res.redirect('/index.html')
  });
  server.use('/', express.static(path.join(__dirname, '/dist/')));

  server.listen(port, () => {
    console.log("Http server is listening on port " + port);
  });
}