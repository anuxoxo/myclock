function checkTime(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

function displayTime() {
  let today = new Date();
  let timePara = document.getElementById("time");
  let hr = checkTime(today.getHours());
  let min = checkTime(today.getMinutes());
  let sec = checkTime(today.getSeconds());
  let timeStr = hr + " : " + min + " : " + sec;

  timePara.innerHTML = timeStr;
}
setInterval(displayTime, 100);

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function displayDate() {
  let today = new Date();
  let datePara = document.getElementById("date");
  let dateStr =
    today.getDate() +
    " " +
    months[today.getMonth()] +
    " " +
    today.getFullYear();
  datePara.innerHTML = dateStr;
}
displayDate();

let askName = () => {
  let username = prompt("Enter your name: ", "Guest");
  let greetDiv = document.querySelector(".greet");
  if (username == null) {
    username = "Guest";
  }
  greetDiv.innerHTML = "Hey , " + username + "!";
};

setTimeout(askName, 3000);
