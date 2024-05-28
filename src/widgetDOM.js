const widgetDOM = () =>{
    //DOM for weather info display
    const weatherDisplay = document.createElement('div');
    const topContainer = document.createElement('div');
    const bottomContainer = document.createElement('div');
    const location = document.createElement('h1');
    const temp = document.createElement('h2');
    const heatIndex = document.createElement('h4');
    const windSpeed = document.createElement('h4');
    const feelsLike = document.createElement('h4');

    //DOM for search
    const citySearchContainer = document.createElement('div');
    const citySearchForm = document.createElement('form');
    const citySearchInp = document.createElement('input');
    const citySearchBtn = document.createElement('button');

    citySearchContainer.classList.add('search-container');
    citySearchForm.classList.add('search-form');
    citySearchInp.classList.add('input');
    citySearchInp.placeholder = 'Enter a city name';
    citySearchBtn.textContent = 'Search';
    weatherDisplay.classList.add('weather-display');

    //Append Children to form and container
    citySearchForm.appendChild(citySearchInp);
    citySearchForm.appendChild(citySearchBtn);
    citySearchContainer.appendChild(citySearchForm);

    //Append Children for display
    //Separated by top and bottom containers containing primary/secondary information
    topContainer.appendChild(location);
    topContainer.appendChild(temp);
    bottomContainer.appendChild(heatIndex);
    bottomContainer.appendChild(windSpeed);
    bottomContainer.appendChild(feelsLike);
    weatherDisplay.appendChild(topContainer);
    weatherDisplay.appendChild(bottomContainer);

    return {weatherDisplay, citySearchContainer};
    
}
export default widgetDOM;