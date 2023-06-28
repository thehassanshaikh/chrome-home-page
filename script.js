//function for clock

window.onload = function () {
  clock();

  //on load focus on searchbar

  document.getElementById("search").focus();


  function clock() {
    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var mid = 'pm';
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hour > 12) {
      hour = hour - 12;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (hour == 0) {
      hour = 12;
    }
    if (TwentyFourHour < 12) {
      mid = 'am';
    }
    document.getElementById('currentTime').innerHTML = hour + ':' + min + ':' + sec + ' ' + mid;
    setTimeout(clock, 1000);

    // to display date
    const todaysDate = now.toLocaleDateString();

    document.getElementById('todayDate').innerHTML = todaysDate;

    //to dispay Day
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satarday"];
    let dayy = now.getDay();
    document.getElementById('todayDay').innerHTML = weekdays[dayy]


  }



}


// clock function end

//function for google seach 

function googleSearch(){
  const text= document.getElementById("search").value;

  let cleanQuery = text.replace(" ","+",text);
  
  let url='http://www.google.com/search?q='+cleanQuery;

  window.location.href=url;
}

const searchtext = document.getElementById("search")
searchtext.addEventListener("keydown",function(e){
  if(e.code === "Enter"){
    googleSearch();
  }
})

fetch('https://newsapi.org/v2/everything?q=Apple&from=2023-06-27&sortBy=popularity&apiKey=9014cfee69a3458495140e8aea005ff6',{headers: new Headers({"X-Requested-With":"hello"})})
.then(res => res.json())
.then(data => console.log(data))