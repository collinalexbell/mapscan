let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
      //40.7127° N, 74.0134° W
    center: { lat: 40.7127, lng: 74.0134 },
    zoom: 8,
  });
}

window.initMap = initMap;