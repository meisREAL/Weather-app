let weather = {
    "apiKey" : "be809991a40a1db2ee1e4112988c81a1",

    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        ) .then((response) => response.json())
          .then((data) => console.log(data));
    },

    displayWeather: function(data) {

    }
};