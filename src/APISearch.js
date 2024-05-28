const apiSearch = ()=>{
    function WeatherAPI(inpVal) {
        //Weather API fetch
        async function searchAPI(urlInp) {
          const response = await fetch(urlInp,{mode: 'cors'});
          const weatherData = await response.json();
          
          console.log(weatherData);
          
          /*response.json().then(function(response){
            console.log(response);
          });*/
          
        }
        function retrieveWeatherData(inp) {
          let url =
            "https://api.weatherapi.com/v1/current.json?key=cc22eb12673f40d29d423134242205&q=";
          if (inp) {
            url += inp;
          } else {
            url += "london";
          }
          try {
            searchAPI(url);
          } catch (error) {
            console.error(
              `Search Error: ${error} \n There was an api error. Displaying London's weather information`
            );
            retrieveWeatherData("london");
          }
        }
        return retrieveWeatherData(inpVal);
      }
      return WeatherAPI;
}
export default apiSearch;