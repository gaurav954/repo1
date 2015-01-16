var CategoryView = Backbone.View.extend({
    tagName: "li",
    subCatTemplate: '<li class="li subcategory"  id="${ID}" type="${TYPE}">${SUB_CATEGORY}</li>',
    className: "category",
    render: function() {
        this.$el.empty();
        this.$el.text(this.model.get('CATEGORY'));
        this.$el.hover(this.onHover.bind(this), this.onHoverOut.bind(this));
    },

    onHoverOut: function() {
        this.$el.find('.dropdown').remove();
        this.$el.removeClass("textClick");
    },

    onHover: function() {
        this.$el.addClass("textClick");
        var ul = $('<ul class="dropdown" style="list-style-type:none"></ul>');
        var subcategories = this.model.get('subCategories');
        subcategories.forEach((function(scat) {
            var tmpl = $.tmpl(this.subCatTemplate, scat);
            tmpl.appendTo(ul);
        }).bind(this));
        ul.appendTo(this.$el);
        this.$el.find(".subcategory").on("click", this.onSubCatClick.bind(this));       
    },

    onSubCatClick: function(e) {
        var subCategories = this.model.get('subCategories');
        var scats = _.find(subCategories, function(scat) { return scat.ID === e.currentTarget.id; });
        this.collectionListView.trigger('onScatClick', scats);
    }
});

var CategoryViewWrapper = Backbone.View.extend({
    categoryListView: null,
    initialize: function() {
        this.categoryListView = new Backbone.CollectionView({
            el: ".cat",
            selectable: true,
            modelView: CategoryView,
            collection: this.model
        });

        this.categoryListView.on('onScatClick', this.onSubCatSelect.bind(this));
    },
    render: function() {
        this.categoryListView.render();
    },

    onSubCatSelect: function(sCat) {
        this.trigger("onScatClick", sCat);
        console.log(sCat);
    }
});