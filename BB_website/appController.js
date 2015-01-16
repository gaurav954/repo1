var AppController = function() {
    this.initialize();
}

AppController.prototype.initialize = function() {
    console.log('Controller initialized');
    this.cartView = new ViewCart();
    this.cartView.on("onCartShow", this.cartShow.bind(this));
}

AppController.prototype.closeView = function(view) {
    if (view) {
        view.close();
    }
}
AppController.prototype.loadView = function() {
    this.categoriesModel = new CategoriesModel();
    this.categoriesModel.getData(this.onCbCateogiresRes.bind(this));
}

AppController.prototype.onCbCateogiresRes = function(result) {
    if (result.success) {
        this.closeView(this.categoriesView);
        this.categoriesView = new CatergoriesViewWrapper({ model: this.categoriesModel });
        this.categoriesView.on("subcatclick", this.onSubCategoryChange.bind(this));
        this.categoriesView.render();
    }
}

AppController.prototype.onSubCategoryChange = function(subCats) {
    console.log(subCats);
    this.pLineModel = new PLineModels();
    this.pLineModel.getData(subCats.SUB_CATEGORY, this.onPlineRes.bind(this));
}

AppController.prototype.onPlineRes = function(result) {
    if (result.success) {
        console.log(this.pLineModel);
        this.closeView(this.pLineView);
        this.pLineView = new PLineViewWrapper({ model: this.pLineModel });
        this.pLineView.on('pLClick', this.onpLineSelect.bind(this));
        this.pLineView.render();
    }
}

AppController.prototype.onpLineSelect = function(pLineModel) {
    console.log(pLineModel);
    this.productModel = new ProductModels();
    this.productModel.getData(pLineModel.get('PRODUCT_LINE'), this.onProductsResponse.bind(this));
}

AppController.prototype.onProductsResponse = function(result) {
    if (result.success) {
        console.log(this.productModel);
        this.closeView(this.productsView);
        this.productsView = new ProductsViewWrapper({ model: this.productModel });
        this.productsView.on('onAddCart', this.onAddCart.bind(this));
        this.productsView.render();
    }
}

AppController.prototype.onAddCart = function(product) {
    this.cartView.trigger("addItem", product);    
}

AppController.prototype.cartShow = function(cartItems) {
    console.log(cartItems);
    this.closeView(this.cartViewWrapper);
    this.cartViewWrapper = new CartViewWrapper({ model: cartItems }); 
    this.cartViewWrapper.on("removeItem",this.onRemoveItem.bind(this)); 
}

AppController.prototype.onRemoveItem = function(item) {
    this.cartView.trigger("removeItem", item);
}