let weather = {
    "apiKey" : "be809991a40a1db2ee1e4112988c81a1",
    fetchWeather: function() {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={be809991a40a1db2ee1e4112988c81a1}"
        ).then((response) => response.json())
        .then((data) => console.log(data));
    }
};