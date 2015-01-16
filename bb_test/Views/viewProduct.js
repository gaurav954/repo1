var productView = Backbone.View.extend({
    tagName: "li",
    imageTemplate: "<img class='kurti src='' />",
    initialize: function() {
        var tmpl = $.tmpl(this.imageTemplate, this.model.toJSON());
        this.$el.empty();
        this.$el.html(tmpl);
        this.$el.find("img").attr("src", "images/" + this.model.get("SOURCE"));
        this.$el.find(".kurti").on('click', this.productSel.bind(this));
    },

    productSel: function() {
        this.collectionListView.trigger("onProductClick", this.model);
    },

    close: function(){
        this.remove();
        this.unbind();
    }
});

var ProductPopupView = Backbone.View.extend({
    el: "#overall",
    utils: new Utils(),
    initialize: function() {
        this.utils.loadTemplate("templates/productDetails.tpl", this.productPreview.bind(this));
    },

    events: {
        "click #cancelSelect": 'cancelClick',
        "click #addCart": 'addCart'
    },

    productPreview: function(data) {
        var template = $.tmpl(data, this.model.toJSON());
        this.$el.empty();
        this.$el.html(template);
        this.$el.find("img").attr("src", "images/" + this.model.get("SOURCE"));
    },

    addCart: function(e) {
        this.trigger("onAddCart", this.model);
        $(this.el).find("#overlay").hide();
        $(this.el).find("#popup").hide();
        this.close();
    },

    cancelClick: function() {       
        $(this.el).find("#overlay").hide();
        $(this.el).find("#popup").hide();
        this.close();
    },

    close: function() {
        this.unbind();
    }
});

var ProductsViewWrapper = Backbone.View.extend({
    productsListView: null,
    productDetails: null,

    initialize: function() {
        this.productsListView = new Backbone.CollectionView({
            el: "#id22",
            selectable: true,
            modelView: productView,
            collection: this.model
        });
        this.productsListView.on("onProductClick", this.productSelect.bind(this));
    },

    render: function() {
        this.productsListView.render();
    },

    productSelect: function(product) {
        if (this.productDetails) {
            this.productDetails.close();
        }
        this.productDetails = new ProductPopupView({ model: product });
        this.productDetails.on("onAddCart", this.onAddCart.bind(this));
    },

    onAddCart: function(item) {
        this.trigger("onAddCart", item);
    },

    close: function() {
        var utils = new Utils();
        utils.closeWrapperViews(this.productListView);
        this.remove();
    }
});