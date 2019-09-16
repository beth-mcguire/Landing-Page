// DOM Elements

const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

//Show Time

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    seconds = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12 Hour Format
  hour = hour % 12 || 12;

  //Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    seconds
  )}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(num) {
  return (parseInt(num, 10) < 10 ? "0" : "") + num;
}

// Set Background Depending on Day and Greeting
function setBg() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    // Evening
    document.body.style.backgroundImage = "url('../img/night.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

// Run
showTime();
setBg();
