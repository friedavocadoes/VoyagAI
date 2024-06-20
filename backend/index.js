const express = require("express");
const app = express();
const port = 3200;
const cors = require('cors')
app.use(express.json());
app.use(cors())


app.get("/", (req, res) => {
  res.send("Hello World!");
})



app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});