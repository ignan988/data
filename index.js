const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("almacen.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 10000;
const cors = require('cors');

server.use(cors({ origin: '*' }));


server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
