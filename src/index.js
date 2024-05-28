import "./styles.css";
import widgetDOM from "./widgetDOM";

function weatherApp() {
  const appContainer = document.createElement('div');
  appContainer.classList.add('app-container');
  const search = widgetDOM().citySearchContainer;
  const weather = widgetDOM().weatherDisplay;
  
  appContainer.appendChild(search);
  appContainer.appendChild(weather);


  return appContainer;
}

document.body.appendChild(weatherApp());
//WeatherAPI('london');
