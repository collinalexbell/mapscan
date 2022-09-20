let map;
const center = { lat: 40.7127, lng: -74.0134 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
      //40.7127° N, 74.0134° W
    center,
    zoom: 16,
  });
}

function moveNorth() {
    center.lat = center.lat + 0.001
    center.lng = center.lng + 0.0005
    map.setCenter(new google.maps.LatLng(center.lat, center.lng));
}
setInterval(moveNorth, 500);

window.initMap = initMap;
