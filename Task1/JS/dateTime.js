const d = new Date();
document.getElementById("getTime").addEventListener("click", function (e) {
  e.preventDefault();
  if (document.getElementById("choice").checked) {
    choice = 1;
  } else {
    choice = 0;
  }
  (function (choice) {
    let day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    if (choice == 1) {
      let dateString =
        day[d.getDay()] +
        " | " +
        d.getHours() +
        " : " +
        d.getMinutes() +
        " : " +
        d.getSeconds();
      document.getElementById("time").innerHTML = dateString;
    } else {
      let hour = d.getHours();
      if (hour === 0) {
        hour = 12 + " AM";
      } else if (hour > 12) {
        hour = hour - 12 + " PM";
      } else {
        hour = hour + " AM";
      }
      let dateString =
        day[d.getDay()] +
        " | " +
        hour +
        " : " +
        d.getMinutes() +
        " : " +
        d.getSeconds();
      document.getElementById("time").innerHTML = dateString;
    }
  })(choice);
});
