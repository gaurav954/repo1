var productView = Backbone.View.extend({
    tagName: 'li',
    utils: new Utils(),

    initialize: function() {
        console.log("Product details view initialized");
        this.render();
    },

    events: {
        'click': 'onProductClick'
    },

    render: function() {
        this.utils.loadTemplate("templates/productView.tpl", this.onProductLoaded.bind(this));
    },

    onProductLoaded: function(data) {
        var template = $.tmpl(data, this.model.toJSON());
        $(this.el).empty();
        $(this.el).html(template);
        $(this.el).find('img').attr('src', "images/" + this.model.get('SOURCE'));
    },

    onProductClick: function() {
        this.collectionListView.trigger('onProductSelect', this.model);
    },

    close: function() {
        this.remove();
        this.unbind();
    }
});

var ProductPopupView = Backbone.View.extend({
    el: '#overall',
    utils: new Utils(),
    initialize: function() {
        console.log("Product details view initialized");
        this.render();
    },
    render: function() {
        this.utils.loadTemplate("templates/productDetails.tpl", this.onProductDetails.bind(this));
    },

    events: {
        "click #cancelSelect": 'cancelClick',
        "click #addCart": 'addCart'
    },

    cancelClick: function() {
        $(this.el).find("#overlay").hide();
        $(this.el).find("#popup").hide();
        this.close();
    },

    addCart: function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.trigger("onAddCart", this.model);
        $(this.el).find("#overlay").hide();
        $(this.el).find("#popup").hide();
        this.close();
    },

    onProductDetails: function(templateData) {
        var template = $.tmpl(templateData, this.model.toJSON());
        $(this.el).html(template);
        $(this.el).find('img').attr('src', "images/" + this.model.get('SOURCE'));
    },

    close: function() {
      //  this.remove();
        this.unbind();
    }
});

var ProductsViewWrapper = Backbone.View.extend({
    productListView: null,
    productDetailsView: null,

    initialize: function() {
        console.log("Products view initialized");
        this.productListView = new Backbone.CollectionView({
            el: '#id22',
            className: 'product-coll',
            selectable: true,
            modelView: productView,
            collection: this.model
        });
        this.productListView.on('onProductSelect', this.getProduct.bind(this));
    },

    render: function() {
        this.productListView.render();
    },

    getProduct: function(product) {
        if (this.productDetailsView) {
            this.productDetailsView.close();
        }
        this.productDetailsView = new ProductPopupView({ model: product });
        this.productDetailsView.on("onAddCart", this.addToCart.bind(this));
    },

    addToCart: function(product) {
        this.trigger("onAddCart", product);
    },

    close: function() {
       var utils = new Utils();
        utils.closeWrapperViews(this.productListView);
        this.remove();
     //   this.unbind();
    }
});