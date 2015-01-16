var State = function(id, name, zoom) {
    this.id = id;
    this.name = name;
  }
var none = new State("none", "Select");

var mh = new State("mh", "MAHARASHTRA");
var ap = new State("ap", "ANDHRA PRADESH");
var ka = new State("ka", "KARNATAKA");
var ra = new State("ra", "RAJASTHAN");

var allStatesIndia = [none, mh, ap, ka, ra];
function getAllStatesIndia() {
return allStatesIndia;
}


var ar = new State("ar", "ARIZONA");
var ca = new State("ca", "CALIFORNIA");
var ny = new State("ny", "NEW YORK");
var tx = new State("tx", "TEXAS");

var allStatesUsa= [none, ar,ca,ny,tx];
function getAllStatesUsa() {
    return allStatesUsa;
}




var City = function(id, name) {
    this.id = id;
    this.name = name;
}   
var none = new City("none", "Select");

var bkn = new City("bkn","BIKANER");
var jai = new City("jai","JAIPUR");
var allCityRajasthan = [none, bkn , jai];
function getAllCityRajasthan() {
return allCityRajasthan;
}

var hyd = new City("hyd","HYDERABAD");
var nel = new City("nel","NELLORE"); 
var allCityAndhra = [none, hyd , nel];
function getAllCityAndhra() {
return allCityAndhra;
}

var pun = new City("pun","PUNE");
var mum= new City("mum","MUMBAI");
var allCityMaharashtra = [none, pun , mum];
function getAllCityMaharashtra() {
return allCityMaharashtra;
}

var ban = new City("ban","BANGALURU");
var mys = new City("mys","MYSORE");
var allCityKarnataka = [none, ban , mys];
function getAllCityKarnataka() {
return allCityKarnataka;
}


var dal = new City("dal","DALLAS");
var aus = new City("aus","AUSTIN"); //texas
var allCityTexas = [none, dal , aus];
function getAllCityTexas() {
return allCityTexas;
}

var pho = new City("pho","PHOENIX");
var tuc = new City("tuc","TUCSON"); //arizona
var allCityArizona = [none, pho  , tuc];
function getAllCityArizona() {
return allCityArizona;
}
 
var alb = new City("alb","ALBANY");
var mht = new City("mht","MANHATTAN"); //new york
var allCityNewYork = [none, alb  , mht];
function getAllCityNewYork() {
return allCityNewYork;
}

var calCities = ["SAN FRANCISCO", "LOS ANGELES", "Mountain View"];
var calCityIds = ["sfr", "los", "mv"];

var allCityCalifornia = [];

for (var i = 0; i < calCities.length; i++) {
    var aCity = new City(calCityIds[i], calCities[i]);
    allCityCalifornia.push(aCity);
}

function getAllCityCalifornia() {
    return allCityCalifornia;
}

function getZoomForState() {
    return 7;
}

function getZoomForCity() {
    return 11;
}