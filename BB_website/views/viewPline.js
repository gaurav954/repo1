var PlView = Backbone.View.extend({
    tagName: "li",
    className: "productLine",
    events: {
        "click": "onClick"
    },
    initialize: function() {
        this.$el.text(this.model.get('PRODUCT_LINE'));               
    },

    onClick: function() {
        this.collectionListView.trigger('pLClick', this.model);
    },

    close: function() {
        this.remove();
        this.unbind();
    }
});

var PLineViewWrapper = Backbone.View.extend({
    pLineListView: null,

    initialize: function() {
        console.log("PLineViewWrapper initialized");
        this.pLineListView = new Backbone.CollectionView({
            el: '#div21',
            selectable: true,
            modelView: PlView,
            collection: this.model
        });
        this.pLineListView.on('pLClick', this.plselected.bind(this));
    },

    render: function() {
        this.pLineListView.render();
    },

    plselected: function(plselect) {
        this.trigger('pLClick', plselect);
    },

    close: function() {
        var utils = new Utils();
        utils.closeWrapperViews(this.pLineListView);       
        this.remove();
        this.unbind();
    }
});