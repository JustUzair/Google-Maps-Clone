mapboxgl.accessToken = 'YOUR-MAPBOX-ACCOUNT-KEY';
navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enabledHighAccuracy:true});

function successLocation(position){
    console.log(position);
    setupMap([position.coords.longitude,position.coords.latitude]);
}
function errorLocation(){
    setupMap([72.82688,21.2041728]);
}
function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:center,
        zoom:12.5
        });
    const nav = new mapboxgl.NavigationControl();
    console.log(nav)
    map.addControl(nav, 'bottom-left');
    var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  });
  
  
  map.addControl(directions, 'top-left');
}

