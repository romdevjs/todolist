const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const server = () => {
  app.listen(port, () => {
    try {
      console.log(`Server has started on port ${port}`)
    } catch (e) {
      console.log(e);
    }
  })
}

server();