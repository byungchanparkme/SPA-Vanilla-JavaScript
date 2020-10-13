const express = require("express")
const path = require("path")

const app = express()

// every route or every path goes to index.html
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("front", "index.html"))
})

app.listen(process.env.PORT || 5060, () => console.log("Server is running..."))
