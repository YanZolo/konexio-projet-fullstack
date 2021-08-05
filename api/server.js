const dataCountries = require("./countriesData");
const express= require("express");
const app = express();
const port = 8000;

let countriesArray = [];


app.get("/all", (req, res) => {

    for(let i = 0; i < dataCountries.length; i++) {
        countriesArray.push(dataCountries[i].name);
    }
    res.send(countriesArray);
})


app.listen(port, () => {
    console.log("server is ready");
})