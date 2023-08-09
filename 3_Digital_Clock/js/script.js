function updateClock() {
    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");

    const now = new Date();
    const hoursNow = now.getHours().toString().padStart(2, "0");
    const minutesNow = now.getMinutes().toString().padStart(2, "0");
    const secondsNow = now.getSeconds().toString().padStart(2, "0");

    hours.textContent = hoursNow;
    minutes.textContent = minutesNow;
    seconds.textContent = secondsNow;

};

setInterval(updateClock, 1000);