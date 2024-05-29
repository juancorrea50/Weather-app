import "./styles.css";
import widgetDOM from "./widgetDOM";
import apiSearch from "./APISearch";
import gifSearch from "./gifSearch";
import displayInfo from "./displayInfo";


function weatherApp() {
  //Init DOM setup
  const appContainer = document.createElement('div');
  appContainer.classList.add('app-container');
  //Node setup
  const search = widgetDOM().citySearchContainer;
  const weather = widgetDOM().weatherDisplay;
  const gSearch = gifSearch();
  const convBtn = weather.childNodes[0].childNodes[3];
  const apiS = apiSearch();
  const convDisplay = displayInfo().convertDisplay;
  const displayWeather = displayInfo().displayWeatherInfo;
  //Initial load

  //Set the default location to London
  const weatherInfo = apiS('london');
  //Load information to the DOM
  displayWeather(weatherInfo,weather,gSearch);

  //Make search function here

  //Button funtion added to convert button
  convBtn.addEventListener('click',()=>{
    convDisplay(weatherInfo,weather);
  });

  appContainer.appendChild(search);
  appContainer.appendChild(weather);


  return appContainer;
}

document.body.appendChild(weatherApp());

