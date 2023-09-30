const url = "https://api.openweathermap.org/data/2.5/weather?&appid=a2ff8b9e40e7a9c5df899d402d07692e&units=metric&q="

 
const searchBtn = document.querySelector('.search button');
const searchInput = document.querySelector('.search input');
const weatherIcon = document.querySelector('.weather-icon');
const pageOpen = document.querySelector('.weather');
const erroBox = document.querySelector('.error');

async function API(){
    const response = await fetch(url+ searchInput.value);
    if(response.status == 404){
        erroBox.style.display = "block"
        pageOpen.style.display= "none";
    }
    else{
        let data = await response.json();
        console.log(data);
    
        document.querySelector('.city').innerHTML= data.name;
        document.querySelector('.temp').innerHTML= Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').innerHTML= data.main.humidity + ' %';
        document.querySelector('.wind').innerHTML= Math.round(data.wind.speed) + ' km/h';
    
        if(data.weather[0].main == 'clouds'){
            weatherIcon.src="/WEATHER-APP/images/clouds.png"
        }
        else if(data.weather[0].main == 'clear'){
            weatherIcon.src="/WEATHER-APP/images/clear.png"
        }
        else if(data.weather[0].main == 'drizzle'){
            weatherIcon.src="/WEATHER-APP/images/drizzle.png"
        }
        else if(data.weather[0].main == 'rain'){
            weatherIcon.src="/WEATHER-APP/images/rain.png"
        }
        else if(data.weather[0].main == 'snow'){
            weatherIcon.src="/WEATHER-APP/images/snow.png"
        }
        else if(data.weather[0].main == 'mist'){
            weatherIcon.src="/WEATHER-APP/images/mist.png"
        }
    
        pageOpen.style.display = "block";
        erroBox.style.display = "none ";
    }

    
}


searchBtn.addEventListener('click', ()=>{
    API(searchInput.value);
   
})
