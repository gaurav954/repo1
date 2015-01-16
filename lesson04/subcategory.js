
var SubCategory = function(id, name, type) {
    this.productLines = null;
    this.activeProductLine = null;

    this.init = function(id, name, type) {
        this.name = name;
        this.id = id;
        this.type = type;
    }
    this.init(id, name, type);
    this.createProductLine = function() {
        switch (this.type) {
            case app_types.clMen: this.createMenProductLine();
                break;

            case app_types.clWomen: this.createWomenProductLine();
                break;

            case app_types.elMobile: this.createMobileProductLine();
                break;

            case app_types.elLaptop: this.createLaptopProductLine();
                break;

            case app_types.acTravel: this.createTravelProductLine();
                break;

            case app_types.acCarcare: this.createCarcareProductLine();
                break;

        }


    }

    this.createMenProductLine = function() {
        var tshirt = new ProductLine(1001, "Tshirt", app_types.MenTshirt);
        var jeans = new ProductLine(1002, "Jeans", app_types.MenJeans);

        tshirt.createProducts();
        jeans.createProducts();
        this.productLines = [tshirt, jeans];
    }

    this.createWomenProductLine = function() {
        var kurti = new ProductLine(1101, "Kurti", app_types.WomenKurti);
        var tops = new ProductLine(1102, "Tops", app_types.WomenTop);

        kurti.createProducts();
        tops.createProducts();
        this.productLines = [kurti, tops];
    }

    this.createMobileProductLine = function() {
        var apple = new ProductLine(1201, "Apple", app_types.MobileApple);
        var samsung = new ProductLine(1202, "Samsung", app_types.MobileSamsung);

        apple.createProducts();
        samsung.createProducts();
        this.productLines = [apple, samsung];
    }

    this.createLaptopProductLine = function() {
        var dell = new ProductLine(1301, "Dell", app_types.LaptopDell);
        var lenovo = new ProductLine(1302, "Lenovo", app_types.LaptopLenovo);

        dell.createProducts();
        lenovo.createProducts();
        this.productLines = [dell, lenovo];
    }

    this.createTravelProductLine = function() {
        var aTourister = new ProductLine(1401, "American Tourister", app_types.TravelAtourister);
        var samsonite = new ProductLine(1402, "Samsonite", app_types.TravelSamsonite);

        aTourister.createProducts();
        samsonite.createProducts();
        this.productLines = [aTourister, samsonite];
    }

    this.createCarcareProductLine = function() {
        var perfume = new ProductLine(1501, "Perfume", app_types.CarCarePerfume);
        var seatCover = new ProductLine(1502, "Seat Covers", app_types.CarCareSeatCover);

        perfume.createProducts();
        seatCover.createProducts();
        this.productLines = [perfume, seatCover];
    }
}