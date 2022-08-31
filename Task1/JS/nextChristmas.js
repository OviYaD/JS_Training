document.getElementById("getDays").addEventListener("click", function (e) {
  e.preventDefault();
  const now = new Date();
  let christYear = now.getFullYear();
  if (now.getMonth() === 11 && now.getDate() > 25) {
    christYear = christYear + 1;
  }
  let christmas = new Date(christYear, 11, 25);
  let millisecperday = 1000 * 60 * 60 * 24;
  let remainingDays = Math.ceil(
    (christmas.getTime() - now.getTime()) / millisecperday
  );
  document.getElementById("daysLeft").innerHTML =
    "For Next Christmas <b>" +
    remainingDays +
    " days </b> Left. <br> Marry Christmas !!";
});
// document.getElementById("getDays").removeEventListener();
