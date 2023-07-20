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

function googleSearch() {
  const text = document.getElementById("search").value;

  let cleanQuery = text.replace(" ", "+", text);

  let url = 'http://www.google.com/search?q=' + cleanQuery;

  window.location.href = url;
}

const searchtext = document.getElementById("search")
searchtext.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    googleSearch();
  }
})

const form = document.getElementById('linkForm');

// for opening link form

const formSec = document.querySelector("#formSec");
let clmnum = 0;

function openForm(num) {
  formSec.classList.add("show");
  clmnum = num;
}

function handleForm(e) {
  e.preventDefault();
  const link1 = document.getElementById("link-1").value;
  const name1 = document.getElementById("linkName-1").value;
  const link2 = document.getElementById("link-2").value;
  const name2 = document.getElementById("linkName-2").value;
  const link3 = document.getElementById("link-3").value;
  const name3 = document.getElementById("linkName-3").value;
  const link4 = document.getElementById("link-4").value;
  const name4 = document.getElementById("linkName-4").value;
  const link5 = document.getElementById("link-5").value;
  const name5 = document.getElementById("linkName-5").value;
  const link6 = document.getElementById("link-6").value;
  const name6 = document.getElementById("linkName-6").value;
  const link7 = document.getElementById("link-7").value;
  const name7 = document.getElementById("linkName-7").value;
  const link8 = document.getElementById("link-8").value;
  const name8 = document.getElementById("linkName-8").value;

  // console.log(e);
  // console.log(clmnum);

  if (clmnum == 1) {
    const coloum1 = {
      link_1: {
        link:link1,
        name:name1
      },
      link_2: {
        link:link2,
        name:name2
      },
      link_3: {
        link:link3,
        name:name3
      },
      link_4: {
        link:link4,
        name:name4
      },
      link_5: {
        link:link5,
        name:name5
      },
      link_6: {
        link:link6,
        name:name6
      },
      link_7: {
        link:link7,
        name:name7
      },
      link_8: {
        link:link8,
        name:name8
      },
    }
    console.log(coloum1);
  
    // Put the object into storage
    localStorage.setItem('coloum-1', JSON.stringify(coloum1));

    const cd1 = JSON.parse(localStorage.getItem('coloum-1'));

    console.log(cd1);

    for(let i = 1;i<=8;i++){
      document.getElementById('c1' + i).href = cd1[`link_${i}`].link;
      document.getElementById('name1' + i).innerHTML = cd1[`link_${i}`].name;
      // console.log(cd1[`link_${i}`].link); 
    }
      
  } else if (clmnum == 2) {
    const coloum2 = {
      link_1: {
        link:link1,
        name:name1
      },
      link_2: {
        link:link2,
        name:name2
      },
      link_3: {
        link:link3,
        name:name3
      },
      link_4: {
        link:link4,
        name:name4
      },
      link_5: {
        link:link5,
        name:name5
      },
      link_6: {
        link:link6,
        name:name6
      },
      link_7: {
        link:link7,
        name:name7
      },
      link_8: {
        link:link8,
        name:name8
      },
    }
    console.log(coloum2);
    localStorage.setItem('coloum-2', JSON.stringify(coloum2));

    const cd2 = JSON.parse(localStorage.getItem('coloum-2'));

    for(let i = 1;i<=8;i++){
      document.getElementById('c2' + i).href = cd2[`link_${i}`].link;
      document.getElementById('name2' + i).innerHTML = cd2[`link_${i}`].name;
    }

  } else if (clmnum == 3) {
    const coloum3 = {
      link_1: {
        link:link1,
        name:name1
      },
      link_2: {
        link:link2,
        name:name2
      },
      link_3: {
        link:link3,
        name:name3
      },
      link_4: {
        link:link4,
        name:name4
      },
      link_5: {
        link:link5,
        name:name5
      },
      link_6: {
        link:link6,
        name:name6
      },
      link_7: {
        link:link7,
        name:name7
      },
      link_8: {
        link:link8,
        name:name8
      },
    }
    console.log(coloum3);
    localStorage.setItem('coloum-3', JSON.stringify(coloum3));

    const cd3 = JSON.parse(localStorage.getItem('coloum-3'));

    for(let i = 1;i<=8;i++){
      document.getElementById('c3' + i).href = cd3[`link_${i}`].link;
      document.getElementById('name3' + i).innerHTML = cd3[`link_${i}`].name;
    }

  } else if (clmnum == 4) {
    const coloum4 = {
      link_1: {
        link:link1,
        name:name1
      },
      link_2: {
        link:link2,
        name:name2
      },
      link_3: {
        link:link3,
        name:name3
      },
      link_4: {
        link:link4,
        name:name4
      },
      link_5: {
        link:link5,
        name:name5
      },
      link_6: {
        link:link6,
        name:name6
      },
      link_7: {
        link:link7,
        name:name7
      },
      link_8: {
        link:link8,
        name:name8
      },
    }
    console.log(coloum4);
    localStorage.setItem('coloum-4', JSON.stringify(coloum4));

    const cd4 = JSON.parse(localStorage.getItem('coloum-2'));

    for(let i = 1;i<=8;i++){
      document.getElementById('c4' + i).href = cd4[`link_${i}`].link;
      document.getElementById('name4' + i).innerHTML = cd4[`link_${i}`].name;
    }
  }

  //hide hr form after sumiting
  formSec.classList.remove("show");

  // Retrieve the object from storage
 
  

  //reset the value to null
  form.reset();
  return
}


 
 