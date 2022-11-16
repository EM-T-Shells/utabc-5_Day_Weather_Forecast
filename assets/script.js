//fetch the data from the api and send it to the browser
function getData()
{
   var searchCity = document.getElementById('jsInput');
   var cityName = document.getElementById("jsCityName");
   cityName.innerHTML = searchCity.value; //data return is connected to this variable

   fetch("https://api.openweathermap.org/data/2.5/forecast?q="+searchCity.value+"&units=imperial&appid=1d7c424a7e3f71fedc830945372a8502")
   .then (response => response.json())
   .then (data =>
   {
      for(i=0; i<5; i++)
      {
         document.getElementById("jsTemp" + (i+1)).innerText = "T: " + (data.list[i].main.temp + " °f");
         document.getElementById("jsHumidity" + (i+1)).innerText = "Humidity: " + (data.list[i].main.humidity + " %");
         document.getElementById("jsWindSpeed" + (i+1)).innerText = "Wind Speed: " + (data.list[i].wind.speed + " mph");
         document.getElementById("jsDescr" + (i+1)).innerText = data.list[i].weather[0].description;
         document.getElementById("jsIcon" + (i+1)).src = "http://openweathermap.org/img/wn/"+
         data.list[i].weather[0].icon + ".png";
      }
   })
   //.catch(err => alert("Is this a new island you found?"))
};

//day getter
var date = new Date();
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function checkDay(day)
{
    return day + date.getDay() > 6 ? day + date.getDay()- 7 : day + date.getDay();
}

for (let i=0; i<5; i++)
{
   document.getElementById("jsDay" + (i+1)).innerText = weekdays[checkDay(i)];
}


////////////////////////////////////////////////////////////////
//local storage
var searchCity = document.getElementById('jsInput');
var cityName = document.getElementById("jsCityName");
cityName.innerHTML = searchCity.value;

var searchHistoryEl = document.getElementById('search-history');
var searchClear = document.getElementById('search-clear');
var jsBtn = document.getElementById("jsBtn");
var searchHistory = JSON.parse(localStorage.getItem("city")) || [];


jsBtn.addEventListener("click", (e) => {
   e.preventDefault();
   var city = jsInput.value.trim();
   searchHistory.push(jsInput.value.trim());
   localStorage.setItem("city",JSON.stringify(searchHistory));

   getSearchHistory();
      if (city)
      {
         citySearch(city)
         jsInput.value = "";
      }
});

function getSearchHistory(){
   if (searchHistory !=""){
   searchHistory = JSON.parse(localStorage.getItem("city"));
   for (i = 0; i < searchHistory.length; i++){
       var appendHistory = document.createElement("li")
       appendHistory.innerHTML = searchHistory[i];
       searchHistoryEl.appendChild(appendHistory);
     }
  }
}

////////////////////////////////////////////////////////////////
//initial display
function startScreen()
{
   document.getElementById("jsInput").defaultValue = "Austin";
   getData();
};
startScreen();



//season changer

// goes in html element- window onload="whatSeason()
// for the DOM - setAttribute(class, className.value)

//season logix
/*function getSeason()
   {
      var getMonth = dayjs().month();
      var month = getMonth.value;
      var season = '';
      switch (month) {
      case '12':
      case '1':
      case '2':
         season = 'winter';
      break;
      case '3':
      case '4':
      case '5':
         season = 'spring';
      break;
      case '6':
      case '7':
      case '8':
         season = 'summer';
      break;
      case '9':
      case '10':
      case '11':
         season = 'fall';
      break;
      }
      return season
   }
   console.log(getSeason())

//window.onload = ; */


/*
//local storage
const sliceForRefactored = [];

for (let i = 1; i < 4; i++) {
  sliceForRefactored.push(Users[i]);
}
*/