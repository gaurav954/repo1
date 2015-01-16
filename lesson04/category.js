

var Category = function(name, id, type) {
    this.activeSubCategory = null;
    this.init = function(name, id, type) {
        this.name = name;
        this.id = id;
        this.type = type;
    }
    this.init(name, id, type);
    this.createSubCategories = function() {
        switch (this.type) {
            case app_types.clothes: this.createClothesSubcategories();
                break;
            case app_types.electronics: this.createElectronicsSubcategories();
                break;
            case app_types.accessory: this.createAccessorySubcategories();
                break;
        }
    }

    this.createClothesSubcategories = function() {
        var men = new SubCategory(101, 'Men', app_types.clMen);
        var women = new SubCategory(102, 'Women', app_types.clWomen);
        men.createProductLine();
        women.createProductLine();
        this.subCategories = [men, women];
    }

    this.createElectronicsSubcategories = function() {
        var mobile = new SubCategory(201, 'Mobile', app_types.elMobile);
        var laptop = new SubCategory(202, 'Laptop', app_types.elLaptop);
        mobile.createProductLine();
        laptop.createProductLine();
        this.subCategories = [mobile, laptop];
    }

    this.createAccessorySubcategories = function() {
        var travel = new SubCategory(301, 'Travel', app_types.acTravel);
        var carcare = new SubCategory(302, 'Car Care', app_types.acCarcare);
        travel.createProductLine();
        carcare.createProductLine();
        this.subCategories = [travel, carcare];
    }

    
}