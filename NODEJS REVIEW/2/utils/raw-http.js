const https = require("https");

const url =
    "https://api.openweathermap.org/geo/1.0/direct?q=tehran&etric&appid=fcd73a3597bfd2d1e0a7bf76a147a393";

const request = https.request(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
        console.log(chunk);
        data += chunk.toString();
    });

    response.on("end", () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on("error", (error) => {
    console.log(error);
});

requesw;