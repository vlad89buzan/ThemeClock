const clock = () => {
  const hoursEl = document.querySelector(".hour");
  const minutesEl = document.querySelector(".minute");
  const secondsEl = document.querySelector(".second");
  const timeEl = document.querySelector(".time");
  const dateEl = document.querySelector(".date");
  const toggle = document.querySelector(".toggle");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
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

  toggle.addEventListener("click", () => {
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
      html.classList.toggle("dark");
      toggle.textContent = "Dark mode";
    } else {
      html.classList.toggle("dark");
      toggle.textContent = "Light mode";
    }
  });

  function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hoursEl.style.transform = `
    translate(-50%, -100%) rotate(${scale(hours, 0, 11, 0, 360)}deg)
                    `;
    minutesEl.style.transform = `
    translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)
                    `;
    secondsEl.style.transform = `
    translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)
                    `;

    timeEl.innerHTML = `
                    ${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}
                    `;
    dateEl.innerHTML = `
        ${days[day]}, ${months[month]} <span class="circle">${date}</span>
                    `;
  }
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
  setTime();

  setInterval(setTime, 1000);
};

export default clock;
