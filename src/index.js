import "./styles.css";
import widgetDOM from "./widgetDOM";
import apiSearch from "./APISearch";
import gifSearch from "./gifSearch";

//Function for converting the display to European metrics
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
//Function to display weather information and edit DOM elements accordingly
function displayWeatherInfo(data, node,gsf){
  data.then(function(response){
    node.childNodes[0].childNodes[0].textContent = `${response.location.name}, ${response.location.country}`;
    node.childNodes[0].childNodes[1].textContent = `${response.current.temp_f}\u00B0F`;
    node.childNodes[1].childNodes[0].textContent = `Heat Index: ${response.current.heatindex_f}\u00B0F`;
    node.childNodes[1].childNodes[1].textContent = `Wind Speed: ${response.current.wind_mph} mph`;
    node.childNodes[1].childNodes[2].textContent = `Feels Like: ${response.current.feelslike_f}\u00B0F`;
    node.childNodes[0].childNodes[2].textContent = `${response.current.condition.text}`;
    node.style.backgroundImage = `url(${response.current.condition.icon})`;
    gsf(response.current.condition.text,node.childNodes[2].childNodes[0]);
  });
}

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
  //Initial load

  //Set the default location to London
  const weatherInfo = apiS('london');
  //Load information to the DOM
  displayWeatherInfo(weatherInfo,weather,gSearch);


  //Button funtion added to convert button
  convBtn.addEventListener('click',()=>{
    convertDisplay(weatherInfo,weather);
  });

  appContainer.appendChild(search);
  appContainer.appendChild(weather);


  return appContainer;
}

document.body.appendChild(weatherApp());

