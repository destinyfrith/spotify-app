const express = require('express');

const app = express();

// With Express apps, every route definition is structured like this:
// app.METHOD(PATH, HANDLER)

app.METHOD(PATH, HANDLER)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// tell the Express app to listen for a connection on port 8888
const port = 8888;
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});