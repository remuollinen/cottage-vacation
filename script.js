// Hamburger menu

const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Map

// Map and map tiles
const map = L.map("map").setView([61.716716, 29.727522], 10);
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tileAttribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tiles = L.tileLayer(tileUrl, { attribution: tileAttribution });
tiles.addTo(map);

// Marker of location
const marker = L.marker([61.716716, 29.727522]);
marker.addTo(map);
