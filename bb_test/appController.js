var AppController = function() {
    this.initialize();
}

AppController.prototype.initialize = function() {
    this.cart = new Cart();
    this.cart.on("onCartShow", this.showCart.bind(this));
}

AppController.prototype.loadView = function() {
    this.categoriesModel = new CategoriesModel();
    this.categoriesModel.getData(this.onCbCategoryRes.bind(this));
}

AppController.prototype.onCbCategoryRes = function(result) {
    if (result.success) {
        this.categoryViewWrapper = new CategoryViewWrapper({ model: this.categoriesModel });
        this.categoryViewWrapper.on("onScatClick", this.createPLine.bind(this));
        this.categoryViewWrapper.render();
    }
}

AppController.prototype.createPLine = function(sCat) {    
    this.pLineModel = new PLineModel();
    this.pLineModel.getData(sCat.SUB_CATEGORY, this.cbOnPlineRes.bind(this));
}

AppController.prototype.cbOnPlineRes = function(result) {
    if (result.success) {
        console.log(this.pLineModel);
        this.pLineViewWrapper = new PLineViewWrapper({ model: this.pLineModel });
        this.pLineViewWrapper.on("onPlClick", this.cbOnPLineSelect.bind(this));
        this.pLineViewWrapper.render();
    }
}

AppController.prototype.cbOnPLineSelect = function(PLine) {
    this.productsModel = new ProductsModel();
    this.productsModel.getData(PLine.get("PRODUCT_LINE"), this.cbOnProductRes.bind(this));
}

AppController.prototype.cbOnProductRes = function(result) {
    if (result.success) {
        console.log(this.productsModel);
        this.productsViewWrapper = new ProductsViewWrapper({ model: this.productsModel });
        this.productsViewWrapper.on("onAddCart", this.onItemAdd.bind(this));
        this.productsViewWrapper.render();
    }
}

AppController.prototype.onItemAdd = function(item) {
    this.cart.trigger("onAddCart", item);
}

AppController.prototype.showCart = function(models) {
    this.cartViewWrapper = new CartViewWrapper({ model: models });
    this.cartViewWrapper.on("removeItem", this.onRemoveItem.bind(this));
    this.cartViewWrapper.on("login",this.showlogin.bind(this));
}

AppController.prototype.showlogin = function(items) {
    this.showLoginPage = new ShowLoginPage({ model: items });
    this.showLoginPage.on("loginData", this.sendItems.bind(this));
},

AppController.prototype.sendItems = function(data) {
    console.log(data);
},

AppController.prototype.onRemoveItem = function(item) {
    this.cart.trigger("removeItem", item);
}