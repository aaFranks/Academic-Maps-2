let map;
let marker;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -6.88778, lng: -38.55700 },
    zoom: 14,
    zoomControl: false,
    fullscreenControl: false,
    minZoom: 13,
    maxZoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  map.addListener('click', (evt) => {
    console.log(`lat: ${evt.latLng.lat()}, lng:${evt.latLng.lng()}`);

    marker.setPosition(evt.latLng);
    map.setCenter(evt.latLng);
  });

  marker = new google.maps.Marker({
    position: { lat: -6.88778, lng: -38.55700 },
    map,
    title: "Hello World!",
    clickable: false,
    draggable: true,
    animation: google.maps.Animation.BOUNCE
  });

  marker.addListener('dblclick', () => {
    alert(marker.getPosition());
  });

}

initMap();