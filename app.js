const apiKey = ' a2ff8b9e40e7a9c5df899d402d07692e'
const city = 'Nairobi'
const url = `https://api.openweathermap.org/data/2.5/weather?q={nairobi}&appid=${apiKey}`

const API = async()=>{
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}

API()