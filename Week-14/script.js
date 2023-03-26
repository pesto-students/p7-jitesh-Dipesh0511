const { response } = require("express");
const express = require("express");
const https = require("https")
const bodyparser = require("body-parser")
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.post("/", (req, res) => {
    console.log(req.body.cityname)
    const query = req.body.cityname;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=d8bb9fa079ed9cbd44150bd21bf521fa&units=metric`
    https.get(url, (response) => {
        response.on("data", (data) => {
            const weatherdata = JSON.parse(data);
            console.log(weatherdata)
            const temp = weatherdata.main.temp;
            console.log(temp)
            res.write(`<h1>The Temperature of ${query} is ${temp}</h1>`)
            res.write(`<p>Visibility ${weatherdata.visibility}</p>`)
        })
    })
    console.log("This is our Server")
})


app.listen(5500, () => {
    console.log("Our server is Running")
})