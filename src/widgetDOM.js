const widgetDOM = () =>{
    //DOM for weather info display
    const weatherDisplay = document.createElement('div');
    const topContainer = document.createElement('div');
    const bottomContainer = document.createElement('div');
    const location = document.createElement('h2');
    const tempF = document.createElement('h2');
    const weatherStatus = document.createElement('h2');
    const convBtn = document.createElement('button');
    const heatIndex = document.createElement('h3');
    const windSpeed = document.createElement('h3');
    const feelsLike = document.createElement('h3');

    const imgContainer = document.createElement('div');
    const img = document.createElement('img');

    imgContainer.classList.add('image-container');

    //DOM for search
    const citySearchContainer = document.createElement('div');
    const citySearchForm = document.createElement('form');
    const citySearchInp = document.createElement('input');
    const citySearchBtn = document.createElement('button');

    //Style tags for search
    citySearchContainer.classList.add('search-container');
    citySearchForm.classList.add('search-form');
    citySearchInp.classList.add('input');
    citySearchInp.placeholder = 'Enter a city name';
    citySearchBtn.textContent = 'Search';
    weatherDisplay.classList.add('weather-display');

    //Style tags for Display
    topContainer.classList.add('display-top');
    bottomContainer.classList.add('display-bottom');
    convBtn.classList.add('convert-button');

    //Append Children to form and container
    citySearchForm.appendChild(citySearchInp);
    citySearchForm.appendChild(citySearchBtn);
    citySearchContainer.appendChild(citySearchForm);

    //Append Children for display
    //Separated by top and bottom containers containing primary/secondary information
    imgContainer.appendChild(img);
    topContainer.appendChild(location);
    topContainer.appendChild(tempF);
    topContainer.appendChild(weatherStatus);
    topContainer.appendChild(convBtn);
    bottomContainer.appendChild(heatIndex);
    bottomContainer.appendChild(windSpeed);
    bottomContainer.appendChild(feelsLike);
    weatherDisplay.appendChild(topContainer);
    weatherDisplay.appendChild(bottomContainer);
    weatherDisplay.appendChild(imgContainer);

    for(const node of weatherDisplay.childNodes[0].children){
        node.textContent = 'loading...';
    }
    for(const node of weatherDisplay.childNodes[1].children){
        node.textContent = 'loading...';
    }
    convBtn.textContent = '\u00B0C/KPH';

    return {weatherDisplay, citySearchContainer};
    
}
export default widgetDOM;