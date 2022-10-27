const input = document.querySelector("#input");
const city = document.querySelector("#city");

const cityName = document.querySelector("#cityName");
const temp = document.querySelector("#temp");
const main = document.querySelector("#main");
const image = document.querySelector("#image");

input.onsubmit = (e) => {
  e.preventDefault();
  getWeather(city.value);
  city.value = "";
};

function getWeather(city){
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=1d7c424a7e3f71fedc830945372a8502`;
  fetch(apiURL)
  .then(response => response.json())
  .then((data)=> {
    cityName.innerHTML = data.name;
    main.innerHTML = data.weather[0].main;
    let degrees = data.main.temp;
    let deg = Math.trunc(degrees);
    temp.innerHTML = deg + "°";
    image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  })
}

getWeather("austin")