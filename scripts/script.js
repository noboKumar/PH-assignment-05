// theme button
document.getElementById("theme-btn").addEventListener("click", function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
});

// dicover new button
document.getElementById("discover-btn").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

// current date
function currentDate() {
  const date = new Date();
  const day = date.getDate();
  const week = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const monthName = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "july",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const weekName = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  document.getElementById("week").innerText = `${weekName[week]}`;
  document.getElementById(
    "date-month-year"
  ).innerText = `${monthName[month]} ${day} ${year}`;
}
currentDate();

// complete button
function completeButton() {
  const completeBtn = document.getElementsByClassName("complete-btn");
  let taskAssign =
    Number(document.getElementById("task-assigned").innerText) - 1;
  let totalTask = Number(document.getElementById("total-task").innerText) + 1;
  const activityContainer = document.getElementById("activity-container");
  const currentTime = new Date().toLocaleTimeString();
  const cards = document.getElementsByClassName("cards");

  for (const button of completeBtn) {
    button.addEventListener("click", function (event) {
      alert("Board Updated Successfully");
      document.getElementById("task-assigned").innerText = `0${taskAssign--}`;
      document.getElementById("total-task").innerText = `${totalTask++}`;
      button.disabled = true;

      if (taskAssign === -1) {
        alert("congrats!!! You Have Completed all the current Task");
      }
      const taskHead = event.target.parentNode.parentNode.querySelector(".task-head").innerText;

      const p = document.createElement("p");
      p.innerHTML = `
      <p class="text-lg text-slate-600 bg-slate-100 rounded-xl p-5 my-5">
        You have Complete The Task ${taskHead} at ${currentTime}
      </p>`;
      activityContainer.appendChild(p);

    });
  }
}
completeButton();
