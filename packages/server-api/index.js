const express = require("express")
const port = process.env.port || 5000
const app = express()

app.get("/", (req, res) => {
   res.send("Backend response")
})

app.listen(port, (err) => {
   if (err) {
      console.log(`Error ${err.message}`)
   } else {
      console.log(`Lissting to port : ${port}`)
   }
})