import "./styles.css";
import widgetDOM from "./widgetDOM";
import apiSearch from "./APISearch";

function convertDisplay(weatherInf,nodeCont){
  const conBtn = nodeCont.childNodes[0].childNodes[3];
  if(conBtn.textContent == '\u00B0C/KPH'){
    weatherInf.then(function(response){
      nodeCont.childNodes[0].childNodes[0].textContent = `${response.location.name}, ${response.location.country}`;
      nodeCont.childNodes[0].childNodes[1].textContent = `${response.current.temp_c}\u00B0C`;
      nodeCont.childNodes[1].childNodes[0].textContent = `Heat Index: ${response.current.heatindex_c}\u00B0C`;
      nodeCont.childNodes[1].childNodes[1].textContent = `Wind Speed: ${response.current.wind_kph} kph`;
      nodeCont.childNodes[1].childNodes[2].textContent = `Feels Like: ${response.current.feelslike_c}\u00B0C`;
      nodeCont.childNodes[0].childNodes[3].textContent = '\u00B0F/MPH'
    })
  } else if(conBtn.textContent == '\u00B0F/MPH'){
    weatherInf.then(function(response){
      nodeCont.childNodes[0].childNodes[0].textContent = `${response.location.name}, ${response.location.country}`;
      nodeCont.childNodes[0].childNodes[1].textContent = `${response.current.temp_f}\u00B0F`;
      nodeCont.childNodes[1].childNodes[0].textContent = `Heat Index: ${response.current.heatindex_f}\u00B0F`;
      nodeCont.childNodes[1].childNodes[1].textContent = `Wind Speed: ${response.current.wind_mph} mph`;
      nodeCont.childNodes[1].childNodes[2].textContent = `Feels Like: ${response.current.feelslike_f}\u00B0F`;
      nodeCont.childNodes[0].childNodes[3].textContent = '\u00B0C/KPH'
    })
  }

}

function weatherApp() {
  //Init DOM setup
  const appContainer = document.createElement('div');
  appContainer.classList.add('app-container');
  //Node setup
  const search = widgetDOM().citySearchContainer;
  const weather = widgetDOM().weatherDisplay;
  const convBtn = weather.childNodes[0].childNodes[3];
  const apiS = apiSearch();
  //Initial load
  //Set the default location to London
  const weatherInfo = apiS('london');
  //Load information to the DOM
  weatherInfo.then(function(response){
    weather.childNodes[0].childNodes[0].textContent = `${response.location.name}, ${response.location.country}`;
    weather.childNodes[0].childNodes[1].textContent = `${response.current.temp_f}\u00B0F`;
    weather.childNodes[1].childNodes[0].textContent = `Heat Index: ${response.current.heatindex_f}\u00B0F`;
    weather.childNodes[1].childNodes[1].textContent = `Wind Speed: ${response.current.wind_mph} mph`;
    weather.childNodes[1].childNodes[2].textContent = `Feels Like: ${response.current.feelslike_f}\u00B0F`;
    weather.childNodes[0].childNodes[2].textContent = `${response.current.condition.text}`;
    weather.style.backgroundImage = `url(${response.current.condition.icon})`
  });

  convBtn.addEventListener('click',()=>{
    convertDisplay(weatherInfo,weather);
  });

  appContainer.appendChild(search);
  appContainer.appendChild(weather);


  return appContainer;
}

document.body.appendChild(weatherApp());

