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

// for opening link form

const formSec = document.querySelector("#formSec");

function openForm(){
  formSec.classList.add("show");
}

function handleForm(e){
  e.preventDefault();
  const link1 = document.getElementById("link-1").value;
  const link2 = document.getElementById("link-2").value;
  const link3 = document.getElementById("link-3").value;
  const link4 = document.getElementById("link-4").value;
  const link5 = document.getElementById("link-5").value;
  const link6 = document.getElementById("link-6").value;
  const link7 = document.getElementById("link-7").value;
  const link8 = document.getElementById("link-8").value;

  console.log(link1)

 const coloum1 = {
    link_1: link1,
    link_2: link2,
    link_3: link3,
    link_4: link4,
    link_5: link5,
    link_6: link6,
    link_7: link7,
    link_8: link8,
  }
 const coloum12 = {
    link_1: link1,
    link_2: link2,
    link_3: link3,
    link_4: link4,
    link_5: link5,
    link_6: link6,
    link_7: link7,
    link_8: link8,
  }
 const coloum3 = {
    link_1: link1,
    link_2: link2,
    link_3: link3,
    link_4: link4,
    link_5: link5,
    link_6: link6,
    link_7: link7,
    link_8: link8,
  }
 const coloum4 = {
    link_1: link1,
    link_2: link2,
    link_3: link3,
    link_4: link4,
    link_5: link5,
    link_6: link6,
    link_7: link7,
    link_8: link8,
  }

 

  
} 




  