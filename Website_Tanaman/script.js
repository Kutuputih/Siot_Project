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

updateDeviceStatus(); // Call the function to execute it
console.log(device_status.textContent);
