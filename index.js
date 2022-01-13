const express = require("express");
const app = express();
const bodyParser = require("body-parser");




// View engine
app.set('view engine', 'ejs'); 
// Static
app.use(express.static('public')); 
// bBody parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//database





app.get("/", (req, res) => {
    res.render("index")
})



app.listen(3000, () => {
    console.log("O servidor esta rodando")
})