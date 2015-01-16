var ProductLine = function(id, name, type) {
    this.products = null;
    this.activeProduct = null;

    this.init = function(id, name, type) {
        this.name = name;
        this.id = id;
        this.type = type;
    }
    this.init(id, name, type);

    this.createProducts = function() {
        switch (this.type) {
            case app_types.MenTshirt:
                this.createTshirtProducts();
                break;

            case app_types.MenJeans:
                this.createJeansProducts();
                break;

            case app_types.WomenKurti:
                this.createKurtiProducts();
                break;

            case app_types.WomenTop:
                this.createTopsProducts();
                break;

            case app_types.MobileApple:
                this.createAppleProducts();
                break;

            case app_types.MobileSamsung:
                this.createSamsungProducts();
                break;

            case app_types.LaptopDell:
                this.createDellProducts();
                break;

            case app_types.LaptopLenovo:
                this.createLenovoProducts();
                break;

            case app_types.TravelAtourister:
                this.createAtouristerProducts();
                break;

            case app_types.TravelSamsonite:
                this.createSamsoniteProducts();
                break;

            case app_types.CarCarePerfume:
                this.createPerfumeProducts();
                break;

            case app_types.CarCareSeatCover:
                this.createSeatCoverProducts();
                break;
        }

    }

    this.createSeatCoverProducts = function() {
        var seatCover1 = new SeatCover("seatCover1", app_types.CarCareSeatCover, "seatcover/seatcover (1).jpg", 2550, "kurti");
        var seatCover2 = new SeatCover("seatCover2", app_types.CarCareSeatCover, "seatcover/seatcover (2).jpg", 3000, "kurti");
        var seatCover3 = new SeatCover("seatCover3", app_types.CarCareSeatCover, "seatcover/seatcover (3).jpg", 2560, "kurti");
        this.products = [seatCover1, seatCover2, seatCover3];
    }

    this.createPerfumeProducts = function() {
        var perfume1 = new Perfume("PerfumeGEL", app_types.CarCarePerfume, "perfume/perfume (1).jpg", 150, "kurti");
        var perfume2 = new Perfume("Canon", app_types.CarCarePerfume, "perfume/perfume (2).jpg", 300, "kurti");
        var perfume3 = new Perfume("AmbiPur", app_types.CarCarePerfume, "perfume/perfume (3).jpg", 250, "kurti");
        this.products = [perfume1, perfume2, perfume3];
    }

    this.createSamsoniteProducts = function() {
        var samsonite1 = new Samsonite("samsonite1", app_types.TravelSamsonite, "bag/samsonite (1).jpeg", 4500, "kurti");
        var samsonite2 = new Samsonite("samsonite2", app_types.TravelSamsonite, "bag/samsonite (2).jpeg", 3200, "kurti");
        var samsonite3 = new Samsonite("samsonite3", app_types.TravelSamsonite, "bag/samsonite (3).jpeg", 2500, "kurti");
        this.products = [samsonite1, samsonite2, samsonite3];
    }

    this.createAtouristerProducts = function() {
        var aTourister1 = new Atourister("aTourister1", app_types.TravelAtourister, "bag/amTour (1).jpeg", 1200, "kurti");
        var aTourister2 = new Atourister("aTourister2", app_types.TravelAtourister, "bag/amTour (2).jpeg", 4000, "kurti");
        var aTourister3 = new Atourister("aTourister3", app_types.TravelAtourister, "bag/amTour (3).jpeg", 6000, "kurti");
        this.products = [aTourister1, aTourister2, aTourister3];
    }

    this.createLenovoProducts = function() {
        var lenovo1 = new Lenovo("lenovo1", app_types.LaptopLenovo, "laptop/lenovo (1).jpeg", 43000, "kurti");
        var lenovo2 = new Lenovo("lenovo2", app_types.LaptopLenovo, "laptop/lenovo (2).jpeg", 69000, "kurti");
        var lenovo3 = new Lenovo("lenovo3", app_types.LaptopLenovo, "laptop/lenovo (3).jpeg", 72000, "kurti");
        this.products = [lenovo1, lenovo2, lenovo3];
    }

    this.createDellProducts = function() {
        var dell1 = new Dell("dell1", app_types.LaptopDell, "laptop/dell (1).jpeg", 48500, "kurti");
        var dell2 = new Dell("dell2", app_types.LaptopDell, "laptop/dell (2).jpeg", 38000, "kurti");
        var dell3 = new Dell("dell3", app_types.LaptopDell, "laptop/dell (3).jpeg", 42000, "kurti");
        this.products = [dell1, dell2, dell3];
    }

    this.createSamsungProducts = function() {
    var samsung1 = new Samsung("samsung1", app_types.MobileSamsung, "phone/samsung-galaxy-grand-2 (1).jpeg", 41000, "phone");
        var samsung2 = new Samsung("samsung2", app_types.MobileSamsung, "phone/samsung-galaxy-grand-2 (2).jpeg", 38000, "phone");
        var samsung3 = new Samsung("samsung3", app_types.MobileSamsung, "phone/samsung-galaxy-note-3-neo.jpeg", 42000, "phone");
        this.products = [samsung1, samsung2, samsung3];
    }

    this.createAppleProducts = function() {
        var apple1 = new Apple("4SBlack", app_types.MobileApple, "phone/4black.jpeg", 40000, "phone");
        var apple2 = new Apple("5SBlack", app_types.MobileApple, "phone/5sblack.jpeg", 38000, "phone");
        var apple3 = new Apple("5SWhite", app_types.MobileApple, "phone/5swhite.jpeg", 42000, "phone");
        this.products = [apple1, apple2, apple3];
    }

    this.createTshirtProducts = function() {
        var tshirt1 = new Tshirt("tshirt1", app_types.MenTshirt, "tshirt/tshirt1.jpeg", 1400, "tshirt");
        var tshirt2 = new Tshirt("tshirt2", app_types.MenTshirt, "tshirt/tshirt2.jpeg", 800, "tshirt");
        var tshirt3 = new Tshirt("tshirt3", app_types.MenTshirt, "tshirt/tshirt3.jpeg", 1800, "tshirt");
        this.products = [tshirt1, tshirt2, tshirt3];
    }

    this.createJeansProducts = function() {
        var jeans1 = new Jeans("jeans1", app_types.MenJeans, "jeans/jeans (1).jpeg", 2500, "jeans");
        var jeans2 = new Jeans("jeans2", app_types.MenJeans, "jeans/jeans (2).jpeg", 2700, "jeans");
        var jeans3 = new Jeans("jeans3", app_types.MenJeans, "jeans/jeans (3).jpeg", 3000, "jeans");
        this.products = [jeans1, jeans2, jeans3];
    }

    this.createKurtiProducts = function() {
        var kurti1 = new Kurti("kurti1", app_types.WomenKurti, "women/kurti (1).jpg", 700, "kurti");
        var kurti2 = new Kurti("kurti2", app_types.WomenKurti, "women/kurti (2).jpg", 500, "kurti");
        var kurti3 = new Kurti("kurti3", app_types.WomenKurti, "women/kurti (3).jpg", 699, "kurti");
        this.products = [kurti1, kurti2, kurti3];
    }

    this.createTopsProducts = function() {
        var top1 = new Top("top1", app_types.WomenTop, "women/top (1).jpg", 500, "top");
        var top2 = new Top("top2", app_types.WomenTop, "women/top (2).jpg", 400, "top");
        var top3 = new Top("top3", app_types.WomenTop, "women/top (3).jpg", 250, "top");
        this.products = [top1, top2, top3];
    }
}