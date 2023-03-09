const express = require("express")
const routes = require("./routes/main")

const P = 1335;
const app = express()

app.use('/',routes)



app.listen(process.env.PORT | P,()=>{
    console.log("server is started at: "+ P);
})