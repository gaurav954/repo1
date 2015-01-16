var CategoryView = Backbone.View.extend({
    tagName: "li",
    subCategoryTemplate: '<li class="li subcategory"  id="${ID}" type="${TYPE}">${SUB_CATEGORY}</li>',
    className: "category",

    initialize: function() {
        this.$el.text(this.model.get('CATEGORY'));
        this.$el.hover(this.onHoverOver.bind(this), this.onHoverOut.bind(this));
    },

    onHoverOver: function() {
        var ul = $('<ul class="dropdown" style="list-style-type:none"></ul>');
        var subCategories = this.model.get("subCategories");
        subCategories.forEach((function(cat) {
            var tpl = $.tmpl(this.subCategoryTemplate, cat);
            tpl.appendTo(ul);
        }).bind(this));
        ul.appendTo(this.$el);
        this.$el.find(".subcategory").on("click", this.onSubClick.bind(this));
    },
 //((function(cat){}).bind(this));   SELF CALLING FUNCTION

    onHoverOut: function() {
        this.$el.find('.dropdown').remove();
    },

    onSubClick: function(e) {
        var scats = this.model.get('subCategories');
        var subCats = _.find(scats, function(subcat) { return subcat.ID=== e.currentTarget.id });
        //        var outdata = {
        //            category : this.model,
        //            subCategory : subCats
        //        };
        this.collectionListView.trigger("subcatclick", subCats);
    },

    close: function() {
        this.remove();
        this.unbind();
    }
});

var CatergoriesViewWrapper = Backbone.View.extend({
    categoryListView: null,
    initialize: function() {
        this.categoryListView = new Backbone.CollectionView({
            el: '.cat',
            selectable: true,
            modelView: CategoryView,
            collection: this.model
        });
        this.categoryListView.on("subcatclick", this.onCategoryChange.bind(this));
    },
    render: function() {
        this.categoryListView.render();
    },

    onCategoryChange: function(selSubCategory) {
        this.trigger("subcatclick", selSubCategory);
    },

    close: function() {
        var utils = new Utils();
        utils.closeWrapperViews(this.categoryListView);
        this.remove();
        this.unbind();
    }
});