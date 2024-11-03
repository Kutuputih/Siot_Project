document.getElementById("burger").addEventListener("click", function () {
  const nav = document.getElementById("nav");
  nav.classList.toggle("show");
});

var device_status = document.querySelector(".main_device_status");

function updateDeviceStatus() {
  if (device_status.textContent === "Connected") {
    document.querySelector("#color").classList.add("green-dot");
    document.querySelector("#color").classList.remove("red-dot");
  } else {
    document.querySelector("#color").classList.add("red-dot");
    document.querySelector("#color").classList.remove("green-dot");
  }
}

var watering_status = document.querySelector(".watering-status");

function updateWateringStatus() {
  if (watering_status.textContent === "Watering") {
    document.querySelector(".water-container").classList.remove("hide");
  } else {
    document.querySelector(".water-container").classList.add("hide");
  }
}

updateWateringStatus();
updateDeviceStatus();
console.log(device_status.textContent);
console.log(watering_status.textContent);
