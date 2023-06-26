//function for clock

window.onload = function () {
  clock();
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
const favIconUrl= "https://www.google.com/s2/favicons?domain=" //${domain}&sz=${size}



