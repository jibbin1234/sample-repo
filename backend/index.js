const express = require('express')
const app = express()
const port = 5000       
const mongoDB = require("./db")
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.use(express.json())
app.use('/api',require("./routes/CreateUser"));
app.use('/api',require("./routes/DisplayData"));
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})