const express = require("express");
const path = require("path");
const app = express();

require("./db/conn");
app.use(express.json());

app.use(require('./router/auth'));

const port = 5000;

app.listen(port, () => {
    console.log(`server is running at port number ${port}`);
});


