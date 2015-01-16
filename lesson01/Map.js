

var map = null;
var gZoom = null;
geocoder = new google.maps.Geocoder();

$(document).ready(onDocReady);
function onDocReady() {
    initGoogleMap();
    addEventHandlers();
}

function initGoogleMap() {
    google.maps.event.addDomListener(window, 'load', onGoogleMapInit);
}
function onGoogleMapInit() {
    getCountry("USA", onCountryResponse, 5);
    addStatesForCountry("USA");
}


function getCountry(country, cbOnResponse, zoom) {
    gZoom = zoom;
    geocoder.geocode({ 'address': country }, cbOnResponse);
}

function onCountryResponse(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        var myCenter = new google.maps.LatLng(results[0].geometry.location.k, results[0].geometry.location.B);
        var mapProp = {
            center: myCenter,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            zoom:gZoom
        };

        map = new google.maps.Map(document.getElementById("mymap"), mapProp);
    } 
    else {
        alert("Geocode was not successful for the following reason: " + status);
        return;
    }
}



function addEventHandlers() {
    $("#country").on("change", onCountryChange);
}

function onCountryChange(e) {
    var selCountry = $("#country").val();
    
    getCountry(selCountry, onCountryResponse, 5);
    addStatesForCountry(selCountry);
}

function addStatesForCountry(country) {
    $("#state").empty();
    $("#city").empty();
    var states = null;
    switch (country) {
        case "USA": states = getAllStatesUsa(); break;
        case "INDIA": states = getAllStatesIndia(); break;
    }
    for (var i = 0; i < states.length; i++) {
        addToList(states[i].name, i);
    }
}
function addToList(name, id) {
    
    var sel = $("#state");
    var tmpl = $('<option class="stateOption"></option>');
    var opt = $(tmpl);
    opt.attr("id", id);
    opt.attr("value", name);

    $(opt).text(name);
    $(opt).appendTo(sel);
    $("#state").on("change", onStateChange);
}

function onStateChange(e) {
    var selstate = $("#state").val();
    getCountry(selstate, onCountryResponse, getZoomForState());
    addCityForState(selstate);
}

function addCityForState(state) {
    $("#city").empty();
    var city = null;
    switch (state) {
        case "MAHARASHTRA": cities = getAllCityMaharashtra(); break;
        case "ANDHRA PRADESH": cities = getAllCityAndhra(); break;
        case "KARNATAKA": cities = getAllCityKarnataka(); break;
        case "RAJASTHAN": cities = getAllCityRajasthan(); break;
        case "ARIZONA": cities = getAllCityArizona(); break;
        case "CALIFORNIA": cities = getAllCityCalifornia(); break;
        case "NEW YORK": cities = getAllCityNewYork(); break;
        case "TEXAS": cities = getAllCityTexas(); break;
    }
            for (var i = 0; i < cities.length; i++) {
        addToListCity(cities[i].name, i);
    }
}

function addToListCity(name, id) {

    var selCity = $("#city");
    var tmplCity = $('<option class="cityOption"></option>');
    var optCity = $(tmplCity);
    optCity.attr("id", id);
    optCity.attr("value", name);
    $(optCity).text(name);
    $(optCity).appendTo(selCity);
    $("#city").on("change", onCityChange);
}

function onCityChange(e){
 var selCity = $("#city").val();
 getCountry(selCity, onCountryResponse, getZoomForCity());
}