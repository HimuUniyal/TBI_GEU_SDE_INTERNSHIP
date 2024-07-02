const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
/* to run this restfulAPI ,in the terminal, start your server by running:
node index.js
Click on the Send Request button above each request in test.http(file below in this folder) to test the endpoints. 
The REST Client extension will display the response from the server.(Make sure that RESTclient extension is installed in vscode*/