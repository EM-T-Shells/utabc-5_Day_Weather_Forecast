//var apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + input.value + "&units=imperial&appid=1d7c424a7e3f71fedc830945372a8502";
var input = document.getElementById('jsInput');
var cityName = document.getElementById("jsCityName");
var searchBtn = document.getElementById("jsSearchBtn")


//fetch the data from the api and send it to the browser
let weather = () =>
 {
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + input.value + "&units=imperial&appid=1d7c424a7e3f71fedc830945372a8502")
    .then(response => response.json())
    .then(data =>
    {
      for (i = 0; i < 5; i++)
      {
        document.getElementById("jsTemp" + (i + 1)).innerText = "T: " + (data.list[ i ].main.temp + " °f");
        document.getElementById("jsHumidity" + (i + 1)).innerText = "Humidity: " + (data.list[ i ].main.humidity + " %");
        document.getElementById("jsWindSpeed" + (i + 1)).innerText = "Wind Speed: " + (data.list[ i ].wind.speed + " mph");
        document.getElementById("jsDescr" + (i + 1)).innerText = data.list[ i ].weather[ 0 ].description;
        document.getElementById("jsIcon" + (i + 1)).src = "http://openweathermap.org/img/wn/" +
          data.list[ i ].weather[ 0 ].icon + ".png";
      }
    })
  .catch(err => alert("Is this a new island you found?"))
};

//date method
var date = new Date();
var weekdays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ];
function checkDay(day)
{
  return day + date.getDay() > 6 ? day + date.getDay() - 7 : day + date.getDay();
}
for (let i = 0; i < 5; i++)
{
  document.getElementById("jsDay" + (i + 1)).innerText = weekdays[checkDay(i)];
}

//eventlistener
searchBtn.addEventListener("click", e =>
  {
    e.preventDefault;
    cityName.innerHTML = input.value;
    checkDay();
    weather();
    cityHistory();
  });


var historyList = document.getElementById("historyList");
historyList = localStorage.getItem("cities");
var historyListEl = document.createElement("li");
historyListEl.setAttribute = ("id", "retrieveCity");
var city = input.value;
var stringifyCities =JSON.stringify(city);

function cityHistory()
{
  if(!city){
    localStorage.setItem("cities", stringifyCities);
    stringifyCities.unshift(city);
  };

  if(city)
  {

    historyListEl.innerHTML = JSON.parse(historyList);
    historyList.appendChild(historyListEl);
  }
};