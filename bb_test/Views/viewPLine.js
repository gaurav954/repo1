var PLineList = Backbone.View.extend({
    tagName: "li",
    className: "productLine",

    initialize: function() {        
        this.$el.empty();
        this.$el.text(this.model.get("PRODUCT_LINE"));
        this.$el.on('click', this.plSelect.bind(this));
        this.$el.hover(this.onHover.bind(this), this.onHoverOut.bind(this));
    },

    onHover: function() {
        this.$el.addClass("textClick");
    },

    onHoverOut: function() {
        this.$el.removeClass("textClick");
    },

    plSelect: function() {      
        this.collectionListView.trigger("onPlClick", this.model);        
    }
});

var PLineViewWrapper = Backbone.View.extend({
    PLineListView: null,
    initialize: function() {
        this.PLineListView = new Backbone.CollectionView({
            el: "#div21",
            selectable: true,
            modelView: PLineList,
            collection: this.model
        });
        this.PLineListView.on("onPlClick", this.PLineResponse.bind(this));
    },

    render: function() {
        this.PLineListView.render();
    },

    PLineResponse: function(proLine) {
        this.trigger("onPlClick",proLine);
        console.log(proLine);
    }
});