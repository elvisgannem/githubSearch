const express = require("express");
const app = express();
const routes = require('./Http/Routes/routes');
app.use('/', routes);
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`App listening on port ${port}!`));
