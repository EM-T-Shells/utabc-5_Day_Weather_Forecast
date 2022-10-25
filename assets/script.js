var weatherAPIkey="1d7c424a7e3f71fedc830945372a8502";
var zipAPIkey="NT4EW6AL8NMC0JK3FLRJ";


function getInput(){
  const newCity = document.getElementById(cityInput);
  const cityName = document.getElementById(cityName);
  cityName.innerHTML = newCity.value;
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=1d7c424a7e3f71fedc830945372a8502")
  .then(response => response.json())
  .then(data => {
    for (i=0;i<5;i++) {
      document.getElementById("day" + (i+1)+"Min").innerHTML="Min: "+ Number(data.list[i].main.temp_min -296.75).toFixed(1)+"°"
    }
    for (i=0;i<5;i++) {
      document.getElementById("day" + (i+1)+"Max").innerHTML="Max: "+ Number(data.list[i].main.temp_max -296.75).toFixed(1)+"°"
    }
    for (i=0;i<5;i++) {
      document.getElementById("img" +(i+1)).style
    }
})
