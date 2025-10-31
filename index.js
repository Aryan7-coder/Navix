document.addEventListener("DOMContentLoaded" , (e) =>{
getlocation();
});

function getlocation(){
    navigator.geolocation.getCurrentPosition(successPosition, errorPosition, {
        enableHighAccuracy:true
    })

    function successPosition(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Latitude: " + latitude + ", Longitude: " + longitude);
let map = L.map('map').setView([latitude, longitude], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

        return {latitude,longitude}
    }
}

function errorPosition(){
    console.log("location not found")
}