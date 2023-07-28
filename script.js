//function for clock

window.onload = function () {
  clock();

  //on load focus on searchbar

  document.getElementById("search").focus();

  // Get the data from local storage when the DOM loads
  const cd1 = JSON.parse(localStorage.getItem('coloum-1'));
  const cd2 = JSON.parse(localStorage.getItem('coloum-2'));
  const cd3 = JSON.parse(localStorage.getItem('coloum-3'));
  const cd4 = JSON.parse(localStorage.getItem('coloum-4'));



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

  // Update the DOM using the retrieved data from local storage

  for (let i = 1; i <= 8; i++) {
    let link = cd1[`link_${i}`].link;
    let domainName = getDomainName(link);
    document.getElementById('c1' + i).href = link;
    document.getElementById('name1' + i).innerHTML = cd1[`link_${i}`].name;
    document.getElementById('icon1' + i).src = "https://icon.horse/icon/" + domainName;
  }

  for (let i = 1; i <= 8; i++) {
    let link = cd2[`link_${i}`].link;
    let domainName = getDomainName(link);
    document.getElementById('c2' + i).href = link;
    document.getElementById('name2' + i).innerHTML = cd2[`link_${i}`].name;
    document.getElementById('icon2' + i).src = "https://icon.horse/icon/" + domainName;
  }

  for (let i = 1; i <= 8; i++) {
    let link = cd3[`link_${i}`].link;
    let domainName = getDomainName(link);
    document.getElementById('c3' + i).href = link;
    document.getElementById('name3' + i).innerHTML = cd3[`link_${i}`].name;
    document.getElementById('icon3' + i).src = "https://icon.horse/icon/" + domainName;
  }

  for (let i = 1; i <= 8; i++) {
    let link = cd4[`link_${i}`].link;
    let domainName = getDomainName(link);
    document.getElementById('c4' + i).href = link;
    document.getElementById('name4' + i).innerHTML = cd4[`link_${i}`].name;
    document.getElementById('icon4' + i).src = "https://icon.horse/icon/" + domainName;
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

// Function for extrating the doamin name form the URl

function getDomainName(url) {
  let domainName;

  // Remove the protocol (http, https, etc.) and www from the URL
  let domainRegex = /^(?:https?:\/\/)?(?:www\.)?([^/?]+)/i;
  let matches = url.match(domainRegex);

  if (matches && matches.length >= 2) {
    domainName = matches[1];
  }

  return domainName;
}

const form = document.getElementById('linkForm');

// for opening link form

const formSec = document.querySelector("#formSec");
let clmnum = 0;

function openForm(num) {
  formSec.classList.add("show");
  clmnum = num;

  // Call getDataIntoForm after openForm has been executed
  setTimeout(() => {
    getDataIntoForm(num);
  }, 0);
}

function getDataIntoForm(coloum) {

  const link1Value = document.getElementById("link-1");
  const name1Value = document.getElementById("linkName-1");
  const link2Value = document.getElementById("link-2");
  const name2Value = document.getElementById("linkName-2");
  const link3Value = document.getElementById("link-3");
  const name3Value = document.getElementById("linkName-3");
  const link4Value = document.getElementById("link-4");
  const name4Value = document.getElementById("linkName-4");
  const link5Value = document.getElementById("link-5");
  const name5Value = document.getElementById("linkName-5");
  const link6Value = document.getElementById("link-6");
  const name6Value = document.getElementById("linkName-6");
  const link7Value = document.getElementById("link-7");
  const name7Value = document.getElementById("linkName-7");
  const link8Value = document.getElementById("link-8");
  const name8Value = document.getElementById("linkName-8");

  if (coloum == 1) {

    const fd1 = JSON.parse(localStorage.getItem('coloum-1'));

    for (let i = 1; i <= 8; i++) {

      let link = fd1[`link_${i}`].link;
      let name = fd1[`link_${i}`].name;

      document.getElementById('linkName-' + i).value = name;
      document.getElementById('link-' + i).value = link;

    }
  } else if (coloum == 2) {

    const fd2 = JSON.parse(localStorage.getItem('coloum-2'));

    for (let i = 1; i <= 8; i++) {

      let link = fd2[`link_${i}`].link;
      let name = fd2[`link_${i}`].name;

      document.getElementById('linkName-' + i).value = name;
      document.getElementById('link-' + i).value = link;
    }
  } else if (coloum == 3) {
    const fd3 = JSON.parse(localStorage.getItem('coloum-3'));

    for (let i = 1; i <= 8; i++) {

      let link = fd3[`link_${i}`].link;
      let name = fd3[`link_${i}`].name;

      document.getElementById('linkName-' + i).value = name;
      document.getElementById('link-' + i).value = link;
    }
  } else if (coloum == 4) {
    const fd4 = JSON.parse(localStorage.getItem('coloum-4'));

    for (let i = 1; i <= 8; i++) {

      let link = fd4[`link_${i}`].link;
      let name = fd4[`link_${i}`].name;

      document.getElementById('linkName-' + i).value = name;
      document.getElementById('link-' + i).value = link;
    }
  }

}



  // ---------- handleing form ------------------//
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


    if (clmnum == 1) {
      const coloum1 = {
        link_1: {
          link: link1,
          name: name1
        },
        link_2: {
          link: link2,
          name: name2
        },
        link_3: {
          link: link3,
          name: name3
        },
        link_4: {
          link: link4,
          name: name4
        },
        link_5: {
          link: link5,
          name: name5
        },
        link_6: {
          link: link6,
          name: name6
        },
        link_7: {
          link: link7,
          name: name7
        },
        link_8: {
          link: link8,
          name: name8
        },
      }
      console.log(coloum1);

      // Put the object into storage
      localStorage.setItem('coloum-1', JSON.stringify(coloum1));

      const cd1 = JSON.parse(localStorage.getItem('coloum-1'));

      console.log(cd1);

      for (let i = 1; i <= 8; i++) {

        let link = cd1[`link_${i}`].link;

        let domainName = getDomainName(link);
        console.log(domainName);

        document.getElementById('c1' + i).href = link;
        document.getElementById('name1' + i).innerHTML = cd1[`link_${i}`].name;
        document.getElementById('icon1' + i).src = "https://icon.horse/icon/" + domainName;
        // console.log(cd1[`link_${i}`].link);

      }

    } else if (clmnum == 2) {
      const coloum2 = {
        link_1: {
          link: link1,
          name: name1
        },
        link_2: {
          link: link2,
          name: name2
        },
        link_3: {
          link: link3,
          name: name3
        },
        link_4: {
          link: link4,
          name: name4
        },
        link_5: {
          link: link5,
          name: name5
        },
        link_6: {
          link: link6,
          name: name6
        },
        link_7: {
          link: link7,
          name: name7
        },
        link_8: {
          link: link8,
          name: name8
        },
      }
      console.log(coloum2);
      localStorage.setItem('coloum-2', JSON.stringify(coloum2));

      const cd2 = JSON.parse(localStorage.getItem('coloum-2'));

      for (let i = 1; i <= 8; i++) {

        let link = cd2[`link_${i}`].link;

        let domainName = getDomainName(link);
        console.log(domainName);

        document.getElementById('c2' + i).href = link;
        document.getElementById('name2' + i).innerHTML = cd2[`link_${i}`].name;
        document.getElementById('icon2' + i).src = "https://icon.horse/icon/" + domainName;

      }
    } else if (clmnum == 3) {
      const coloum3 = {
        link_1: {
          link: link1,
          name: name1
        },
        link_2: {
          link: link2,
          name: name2
        },
        link_3: {
          link: link3,
          name: name3
        },
        link_4: {
          link: link4,
          name: name4
        },
        link_5: {
          link: link5,
          name: name5
        },
        link_6: {
          link: link6,
          name: name6
        },
        link_7: {
          link: link7,
          name: name7
        },
        link_8: {
          link: link8,
          name: name8
        },
      }
      console.log(coloum3);
      localStorage.setItem('coloum-3', JSON.stringify(coloum3));

      const cd3 = JSON.parse(localStorage.getItem('coloum-3'));

      for (let i = 1; i <= 8; i++) {

        let link = cd3[`link_${i}`].link;

        let domainName = getDomainName(link);
        console.log(domainName);

        document.getElementById('c3' + i).href = link;
        document.getElementById('name3' + i).innerHTML = cd3[`link_${i}`].name;
        document.getElementById('icon3' + i).src = "https://icon.horse/icon/" + domainName;

      }

    } else if (clmnum == 4) {
      const coloum4 = {
        link_1: {
          link: link1,
          name: name1
        },
        link_2: {
          link: link2,
          name: name2
        },
        link_3: {
          link: link3,
          name: name3
        },
        link_4: {
          link: link4,
          name: name4
        },
        link_5: {
          link: link5,
          name: name5
        },
        link_6: {
          link: link6,
          name: name6
        },
        link_7: {
          link: link7,
          name: name7
        },
        link_8: {
          link: link8,
          name: name8
        },
      }
      console.log(coloum4);
      localStorage.setItem('coloum-4', JSON.stringify(coloum4));

      const cd4 = JSON.parse(localStorage.getItem('coloum-2'));

      for (let i = 1; i <= 8; i++) {

        let link = cd4[`link_${i}`].link;

        let domainName = getDomainName(link);
        console.log(domainName);

        document.getElementById('c4' + i).href = link;
        document.getElementById('name4' + i).innerHTML = cd4[`link_${i}`].name;
        document.getElementById('icon4' + i).src = "https://icon.horse/icon/" + domainName;

      }
    }

    //hide hr form after sumiting
    formSec.classList.remove("show");

    // Retrieve the object from storage



    //reset the value to null
    form.reset();
    return
  }

