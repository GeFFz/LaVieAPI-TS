import express from 'express';

const app = express();
const routes = require("./routes");

app.use(routes);

app.listen(4000, () => {
    console.log('"Servidor rodando na porta 4000');
  }
);