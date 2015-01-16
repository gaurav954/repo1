var Clothes = function() {
    this.tagName = "ul";
    this.style = "list-style-type:none";
    this.item = ["Men", "Women"];        
    this.cssClass = "dropdown";
    this.liClass = "li element2";
    this.id = "clothesId";
}

var Men = function() {
    this.tagName = "ul";
    this.style = "list-style-type: bullet";
    this.item = ["Tshirt", "Trousers"];
    this.cssClass = "leftPane";
    this.liClass = "li1 element3";
    this.id = "menId";
}

var Women = function() {
    this.tagName = "ul";
    this.style = "list-style-type: bullet";
    this.item = ["Tops", "Kurtis"];
    this.cssClass = "leftPane";
    this.liClass = "li1 element3";
    this.id = "womenId";
}

var Electronics = function() {
    this.tagName = "ul";
    this.style = "list-style-type:none";
    this.item = ["Mobiles", "Laptops"];       
    this.cssClass = "dropdown";
    this.liClass = "li element2";
    this.id = "elecId";
}
var Mobiles = function() {
    this.tagName = "ul";
    this.style = "list-style-type: bullet";
    this.item = ["Apple", "Samsung"];
    this.cssClass = "leftPane";
    this.liClass = "li1 element3";
    this.id = "mobileId";
}

var Laptops = function() {
    this.tagName = "ul";
    this.style = "list-style-type: bullet";
    this.item = ["Dell", "Lenovo"];
    this.cssClass = "leftPane";
    this.liClass = "li1 element3";
    this.id = "laptopId";
}

var Accessory = function() {
    this.tagName = "ul";
    this.style = "list-style-type:none";
    this.item = ["Travel", "Car Care"];        
    this.cssClass = "dropdown";
    this.liClass = "li element2";
    this.id = "accId";
}

var Travel = function() {
    this.tagName = "ul";
    this.style = "list-style-type: bullet";
    this.item = ["American Tourister", "Samsonite"];
    this.cssClass = "leftPane";
    this.liClass = "li1 element3";
    this.id = "travelId";
}

var Carcare = function() {
    this.tagName = "ul";
    this.style = "list-style-type: bullet";
    this.item = ["Perfumes", "Seat Covers"];
    this.cssClass = "leftPane";
    this.liClass = "li1 element3";
    this.id = "carId";
}

var Website = function() {
    var Product = [];

    this.createClothes = function(cloth) {
        var list = document.createElement(cloth.tagName);
        $(list).attr("style", cloth.style);
        for (i = 0; i < cloth.item.length; i++) {
            var liItem = cloth.item[i];
            var liText = $("<li/>").text(liItem);
            $(liText).attr("id", cloth.item[i]);
            $(liText).appendTo(list);
            $(liText).addClass(cloth.liClass);
        }
        $(list).attr("id", cloth.id);
        $(list).addClass(cloth.cssClass);
        $(list).appendTo("#cloth");
    }

    this.createMen = function(men) {
        var list = document.createElement(men.tagName);
        $(list).attr("style", men.style);
        for (i = 0; i < men.item.length; i++) {
            var liItem = men.item[i];
            var liText = $("<li/>").text(liItem);
            $(liText).attr("id", men.item[i]);
            $(liText).appendTo(list);
            $(liText).addClass(men.liClass);
        }
        $(list).attr("id", men.id);
        $(list).addClass(men.cssClass);
        $(list).appendTo($(".div21"));
    }

    this.createWomen = function(women) {
        var list = document.createElement(women.tagName);
        $(list).attr("style", women.style);
        for (i = 0; i < women.item.length; i++) {
            var liItem = women.item[i];
            var liText = $("<li/>").text(liItem);
            $(liText).attr("id", women.item[i]);
            $(liText).appendTo(list);
            $(liText).addClass(women.liClass);
        }
        $(list).attr("id", women.id);
        $(list).addClass(women.cssClass);
        $(list).appendTo($(".div21"));
    }

    this.createElectronics = function(elect) {
        var list = document.createElement(elect.tagName);
        $(list).attr("style", elect.style);
        for (i = 0; i < elect.item.length; i++) {
            var liItem = elect.item[i];
            var liText = $("<li/>").text(liItem);
            $(liText).attr("id", elect.item[i]);
            $(liText).appendTo(list);
            $(liText).addClass(elect.liClass);
        }
        $(list).attr("id", elect.id);
        $(list).addClass(elect.cssClass);
        $(list).appendTo("#elect");
    }

    this.createMobile = function(mobile) {
        var list = document.createElement(mobile.tagName);
        $(list).attr("style", mobile.style);
        for (i = 0; i < mobile.item.length; i++) {
            var liItem = mobile.item[i];
            var liText = $("<li/>").text(liItem);
            $(liText).attr("id", mobile.item[i]);
            $(liText).appendTo(list);
            $(liText).addClass(mobile.liClass);
        }
        $(list).attr("id", mobile.id);
        $(list).addClass(mobile.cssClass);
        $(list).appendTo($(".div21"));
    }

    this.createLaptop = function(laptop) {
        var list = document.createElement(laptop.tagName);
        $(list).attr("style", laptop.style);
        for (i = 0; i < laptop.item.length; i++) {
            var liItem = laptop.item[i];
            var liText = $("<li/>").text(liItem);
            $(liText).attr("id", laptop.item[i]);
            $(liText).appendTo(list);
            $(liText).addClass(laptop.liClass);
        }
        $(list).attr("id", laptop.id);
        $(list).addClass(laptop.cssClass);
        $(list).appendTo($(".div21"));
    }

    this.createAccessory = function(access) {
        var list = document.createElement(access.tagName);
        $(list).attr("style", access.style);
        for (i = 0; i < access.item.length; i++) {
            var liItem = access.item[i];
            var liText = $("<li/>").text(liItem);
            $(liText).attr("id", access.item[i]);
            $(liText).appendTo(list);
            $(liText).addClass(access.liClass);
        }
        $(list).attr("id", access.id);
        $(list).addClass(access.cssClass);
        $(list).appendTo("#acc");
    }

    this.createCarcare = function(carCare) {
        var list = document.createElement(carCare.tagName);
        $(list).attr("style", carCare.style);
        for (i = 0; i < carCare.item.length; i++) {
            var liItem = carCare.item[i];
            var liText = $("<li/>").text(liItem);
            $(liText).attr("id", carCare.item[i]);
            $(liText).appendTo(list);
            $(liText).addClass(carCare.liClass);
        }
        $(list).attr("id", carCare.id);
        $(list).addClass(carCare.cssClass);
        $(list).appendTo($(".div21"));
    }

    this.createTravel = function(travel) {
        var list = document.createElement(travel.tagName);
        $(list).attr("style", travel.style);
        for (i = 0; i < travel.item.length; i++) {
            var liItem = travel.item[i];
            var liText = $("<li/>").text(liItem);
            $(liText).attr("id", travel.item[i]);
            $(liText).appendTo(list);
            $(liText).addClass(travel.liClass);
        }
        $(list).attr("id", travel.id);
        $(list).addClass(travel.cssClass);
        $(list).appendTo($(".div21"));
    }


    this.handleHoverClick = function(e) {
        $(".div21").empty();
        if (e.currentTarget.id === "Men") {
            var men = new Men();
            var menElement = this.createMen(men);
        }

        if (e.currentTarget.id === "Women") {
            var women = new Women();
            var womenElement = this.createWomen(women);
        }

        if (e.currentTarget.id === "Mobiles") {
            var mobile = new Mobiles();
            var mobileElement = this.createMobile(mobile);
        }

        if (e.currentTarget.id === "Laptops") {
            var laptop = new Laptops();
            var laptopElement = this.createLaptop(laptop);
        }

        if (e.currentTarget.id === "Travel") {
            var travel = new Travel();
            var travelElement = this.createTravel(travel);
        }

        if (e.currentTarget.id === "Car Care") {
            var carCare = new Carcare();
            var carCareElement = this.createCarcare(carCare);
        }

        $(".element3").on("click", this.handleListClick.bind(this));
    }

    this.createImage = function(img) {
        for (i = 0; i < img.length; i++) {
            var image = document.createElement("img");
            $(image).attr("src", img[i].image);
            $(image).attr("id", img[i].id);
            $(image).addClass(img[i].category);
            $(image).addClass(img[i].cssClass);
            $(image).appendTo($(".div22"));
        }
    }

    this.handleProductDetails = function(e) {        
        var clickCategory = e.currentTarget.category;
        product = this.getProductByIdAndType(e.currentTarget.id, category);
    }

    this.handleListClick = function(e) {
        $(".div22").empty();


        if (e.currentTarget.id === "Tshirt") {

            var tshirt = getAllTshirt();
            this.createImage(tshirt);
            $("#carousel-example-generic").removeClass("offerOff");
        }

        if (e.currentTarget.id !== "Tshirt") {
            $("#carousel-example-generic").addClass("offerOff");
            if (e.currentTarget.id === "Trousers") {
                var jeans = getAllJeans(jeans);
                this.createImage(jeans);
            }

            if (e.currentTarget.id === "Tops") {
                var tshirt = getAllTop();
                this.createImage(tshirt);
            }

            if (e.currentTarget.id === "Kurtis") {
                var kurti = getAllKurti();
                this.createImage(kurti);
            }

            if (e.currentTarget.id === "Apple") {
                var Apple = getAllApple();
                this.createImage(Apple);
            }

            if (e.currentTarget.id === "Samsung") {
                var Samsung = getAllSamsung();
                this.createImage(Samsung);
            }

            if (e.currentTarget.id === "Dell") {
                var Dell = getAllDell();
                this.createImage(Dell);
            }

            if (e.currentTarget.id === "Lenovo") {
                var Lenovo = getAllLenovo();
                this.createImage(Lenovo);
            }

            if (e.currentTarget.id === "American Tourister") {
                var aTour = getAllaTourister();
                this.createImage(aTour);
            }

            if (e.currentTarget.id === "Samsonite") {
                var Samsonite = getAllSamsonite();
                this.createImage(Samsonite);
            }

            if (e.currentTarget.id === "Perfumes") {
                var perfume = getAllPerfume();
                this.createImage(perfume);
            }

            if (e.currentTarget.id === "Seat Covers") {
                var scover = getAllSeatcover();
                this.createImage(scover);
            }
        }

        $(".element4").on("click", this.handleProductDetails.bind(this));
    }

    this.handleNavClick = function(e) {
        if (e.currentTarget.id === "cloth") {
            var cloth = new Clothes();
            var clothElement = this.createClothes(cloth);
        }

        if (e.currentTarget.id === "elect") {
            var elect = new Electronics();
            var electElement = this.createElectronics(elect);
        }

        if (e.currentTarget.id === "acc") {
            var access = new Accessory();
            var accessElement = this.createAccessory(access);
        }

        $(".element2").on("click", this.handleHoverClick.bind(this));
    }

    this.init = function() {

        $(".element1").hover(this.handleNavClick.bind(this), function() { $(".dropdown").remove() });

    }
}
var load = function() {
    var website = new Website();
    website.init();
}

$(document).ready(load);    
