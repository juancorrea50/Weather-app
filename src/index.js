import "./styles.css";
import widgetDOM from "./widgetDOM";
import apiSearch from "./APISearch";

function weatherApp() {
  //Init DOM setup
  const appContainer = document.createElement('div');
  appContainer.classList.add('app-container');
  //Node setup
  const search = widgetDOM().citySearchContainer;
  const weather = widgetDOM().weatherDisplay;
  const apiS = apiSearch();
  //Initial load
  //Set the default location to London
  const weatherInfo = apiS('london');
  //Load information to the DOM
  weatherInfo.then(function(response){
    weather.childNodes[0].childNodes[0].textContent = `Location: ${response.location.name}, ${response.location.country}`;
    weather.childNodes[0].childNodes[1].textContent = `Temp: ${response.current.temp_f}\u00B0F`;
    weather.childNodes[1].childNodes[0].textContent = `Heat Index: ${response.current.heatindex_f}\u00B0F`;
    weather.childNodes[1].childNodes[1].textContent = `Wind Speed: ${response.current.wind_mph} mph`;
    weather.childNodes[1].childNodes[2].textContent = `Feels Like: ${response.current.feelslike_f}\u00B0F`;
    
  })

  

  appContainer.appendChild(search);
  appContainer.appendChild(weather);


  return appContainer;
}

document.body.appendChild(weatherApp());

