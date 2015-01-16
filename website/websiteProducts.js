
var categories = {
    TSHIRT : 1,
    JEANS : 2,
    KURTI: 3,
    TOPS : 4,
    PHONE_SAMSUNG : 5,
    PHONE_APPLE : 6,
    LENOVO : 7,
    DELL : 8,
    A_TOURISTER : 9,
    SAMSONITE : 10,
    PERFUME : 11,
    SEAT_COVER : 12
}

var Product = function(image, id, cssClass, productDetail, price, category) {
    this.image = image;
    this.id = id;
    this.cssClass = cssClass;
    this.productDetail = productDetail;
    this.price = price;
    this.category = category;
}


var apple1 = new Product("phone/4black.jpeg", "4black", "phone element4","4s 16gb BLACK","Rs.28,800", categories.PHONE_APPLE);
var apple2 = new Product("phone/5sblack.jpeg", "5sblack", "phone element4","5S 32GB BLACK","Rs.45,000", categories.PHONE_APPLE);
var apple3 = new Product("phone/5swhite.jpeg", "5swhite", "phone element4","5S 32GB WHITE","Rs.45,000", categories.PHONE_APPLE);

var allApple = [apple1, apple2, apple3];

function getAllApple() {
    return allApple;
}

var samsung1 = new Product("phone/samsung-galaxy-grand-2 (1).jpeg", "grande2-1", "phone element4", "tab BLACK", "Rs.28,800", categories.PHONE_SAMSUNG);
var samsung2 = new Product("phone/samsung-galaxy-grand-2 (2).jpeg", "grande2-2", "phone element4", "Core BLACK", "Rs.28,800", categories.PHONE_SAMSUNG);
var samsung3 = new Product("phone/samsung-galaxy-note-3-neo.jpeg", "note3", "phone element4", "Grande BLACK", "Rs.28,800", categories.PHONE_SAMSUNG);

var allSamsung = [samsung1,samsung2,samsung3];

function getAllSamsung() {
    return allSamsung;
}

var tshirt1 = new Product("tshirt/tshirt1.jpeg", "tshirt1", "tshirt element4", "UCB Blue Fullsleeves", "Rs.650", categories.TSHIRT);
var tshirt2 = new Product("tshirt/tshirt2.jpeg", "tshirt2", "tshirt element4", "UCB Black Fullsleeves", "Rs.850", categories.TSHIRT);
var tshirt3 = new Product("tshirt/tshirt3.jpeg", "tshirt3", "tshirt element4", "UCB Green Fullsleeves", "Rs.1000", categories.TSHIRT);


var allTshirt = [tshirt1, tshirt2, tshirt3];

function getAllTshirt() {
    return allTshirt;
}

var jeans1 = new Product("jeans/jeans (1).jpeg", "jeans1", "jeans element4", "Levi's Blue Denim", "Rs.2650", categories.JEANS);
var jeans2 = new Product("jeans/jeans (2).jpeg", "jeans2", "jeans element4", "Pepe DarkBlue Denim", "Rs.2050", categories.JEANS);
var jeans3 = new Product("jeans/jeans (3).jpeg", "jeans3", "jeans element4", "Gas Black Denim", "Rs.7650", categories.JEANS);

var allJeans = [jeans1, jeans2, jeans3];

function getAllJeans() {
    return allJeans;
}

var kurti1 = new Product("women/kurti (1).jpg", "kurti1", "kurti element4","Kurti","Rs.1600", categories.KURTI);
var kurti2 = new Product("women/kurti (2).jpg", "kurti2", "kurti element4", "Kurti", "Rs.600", categories.KURTI);
var kurti3 = new Product("women/kurti (3).jpg", "kurti3", "kurti element4", "Kurti", "Rs.1100", categories.KURTI);

var allKurti = [kurti1, kurti2, kurti3];

function getAllKurti() {
    return allKurti;
}

var top1 = new Product("women/top (1).jpg", "top1", "top element4","Tommy","Rs.5000",categories.TOPS);
var top2 = new Product("women/top (2).jpg", "top2", "top element4", "UCB", "Rs.1800", categories.TOPS);
var top3 = new Product("women/top (3).jpg", "top3", "top element4", "BIBA", "Rs.1200", categories.TOPS);

var allTop = [top1, top2, top3];

function getAllTop() {
    return allTop;
}

var dell1 = new Product("laptop/dell (1).jpeg", "dell1", "kurti element4","Inspiron 502","Rs.38,500", categories.DELL);
var dell2 = new Product("laptop/dell (2).jpeg", "dell2", "kurti element4", "Studio 02", "Rs.49,500", categories.DELL);
var dell3 = new Product("laptop/dell (3).jpeg", "dell3", "kurti element4", "Xps Gaming", "Rs.78,500", categories.DELL);

var allDell = [dell1, dell2, dell3];

function getAllDell() {
    return allDell;
}

var lenovo1 = new Product("laptop/lenovo (1).jpeg", "lenovo1", "kurti element4","Lenovo2013","Rs.60,000", categories.LENOVO);
var lenovo2 = new Product("laptop/lenovo (2).jpeg", "lenovo2", "kurti element4","Lenovo2014","Rs.55,999", categories.LENOVO);
var lenovo3 = new Product("laptop/lenovo (3).jpeg", "lenovo3", "kurti element4","Lenovo_stream","Rs.1,00,000", categories.LENOVO);

var allLenovo = [lenovo1, lenovo2, lenovo3];

function getAllLenovo() {
    return allLenovo;
}

var aTourister1 = new Product("bag/amTour (1).jpeg", "aTourister1", "kurti element4", "Blue", "Rs.4800", categories.A_TOURISTER);
var aTourister2 = new Product("bag/amTour (2).jpeg", "aTourister2", "kurti element4", "Black", "Rs.7000", categories.A_TOURISTER);
var aTourister3 = new Product("bag/amTour (3).jpeg", "aTourister3", "kurti element4","Purple","Rs.6000", categories.A_TOURISTER);

var allaTourister = [aTourister1, aTourister2, aTourister3];

function getAllaTourister() {
    return allaTourister;
}

var samsonite1 = new Product("bag/samsonite (1).jpeg", "samsonite1", "kurti element4","Silver","Rs.3500", categories.SAMSONITE);
var samsonite2 = new Product("bag/samsonite (2).jpeg", "samsonite2", "kurti element4","Orange","Rs.6000", categories.SAMSONITE);
var samsonite3 = new Product("bag/samsonite (3).jpeg", "samsonite3", "kurti element4","Purple","Rs.7500", categories.SAMSONITE);

var allsamsonite = [samsonite1, samsonite2, samsonite3];

function getAllSamsonite() {
    return allsamsonite;
}

var perfume1 = new Product("perfume/perfume (1).jpg", "perfume1", "kurti element4", "GEL", "Rs.350", categories.PERFUME);
var perfume2 = new Product("perfume/perfume (2).jpg", "perfume2", "kurti element4","Tank","Rs.450", categories.PERFUME);
var perfume3 = new Product("perfume/perfume (3).jpg", "perfume3", "kurti element4","Ambi Pur","Rs.150", categories.PERFUME);

var allperfume = [perfume1, perfume2, perfume3];

function getAllPerfume() {
    return allperfume;
}

var seatcover1 = new Product("seatcover/seatcover (1).jpg", "seatcover1", "kurti element4","Beige-Black Leather","Rs.6500", categories.SEAT_COVER);
var seatcover2 = new Product("seatcover/seatcover (2).jpg", "seatcover2", "kurti element4","Black_Red","Rs.3500", categories.SEAT_COVER);
var seatcover3 = new Product("seatcover/seatcover (3).jpg", "seatcover3", "kurti element4","Black-Beige","Rs.4500", categories.SEAT_COVER);

var allseatcover = [seatcover1, seatcover2, seatcover3];

function getAllSeatcover() {
    return allseatcover;
}

function getProductByIdAndType(id, category) {
    var products = null;
    switch (category) {
        case categories.TSHIRT:
            products = getAllTshirt();
            break;
            
        case categories.JEANS:
            products = getAllJeans;
            break;

        case categories.KURTI:
            products = getAllKurti;
            break;

        case categories.TOPS:
            products = getAllTop;
            break;

        case categories.PHONE_APPLE:
            products = getAllApple;
            break;

        case categories.PHONE_SAMSUNG:
            products = getAllSamsung;
            break;

        case categories.DELL:
            products = getAllDell;
            break;

        case categories.LENOVO:
            products = getAllLenovo;
            break;

        case categories.A_TOURISTER:
            products = getAllaTourister;
            break;

        case categories.SAMSONITE:
            products = getAllSamsonite;
            break;

        case categories.PERFUME:
            products = getAllPerfume;
            break;

        case categories.SEAT_COVER:
            products = getAllSeatcover;
            break;
    }
    var product = getProductByIdFromProducts(products, id);
    return product;
}

function getProductByIdFromProducts( products, id){
    for(var i = 0 ; i < products.length ; i++){
        if(products[i].id == id){
            return products[i];
        }
    }
    
}