function displayTime() {
  let today = new Date();
  let timePara = document.getElementById("time");
  let timeStr =
    today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds();

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

window.onload = (event) => {
  let username = prompt("Enter your name: ", "Guest");
  let greetDiv = document.querySelector(".greet");
  if (username == null) {
    username = "Guest";
  }
  greetDiv.innerHTML = "Hey , " + username + "!";
};
