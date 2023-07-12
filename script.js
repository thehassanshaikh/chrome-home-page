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

// for link form

// function handleSubmit(event){
//   event.prevantDefault();
//   // e.prevantDefault();
//   // let link1 = document.getElementById("link-1").value;
//   // let link2 = document.getElementById("link-2").value;
//   // let link3 = document.getElementById("link-3").value;
//   // let link4 = document.getElementById("link-4").value;
//   // let link5 = document.getElementById("link-5").value;
//   // let link6 = document.getElementById("link-6").value;
//   // let link7 = document.getElementById("link-7").value;
//   // let link8 = document.getElementById("link-8").value;
  
//   // console.log(link1 ,link2, link4)

//   const form  = document.getElementById("linkForm");
//   const formData = new FormData(form);

//   const data = {};
//   for (const [key, value] of formData.entries()) {
//     data[key] = value;
//   }

//   console.log('Form data stored:', data);

  
// }

function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("linkForm");
  const formData = new FormData(form);

  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  const link1 = data["link-1"];
  console.log(link1);
  console.log('Form data stored:', data);
}

document.addEventListener('DOMContentLoaded', function() {
  const vform = document.getElementById('linkForm');
  vform.addEventListener('submit', handleSubmit);
});

