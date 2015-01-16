var SearchView = Backbone.View.extend({
    el: "#search_container",
    initialize: function() {
        console.log("view initialized");
    },

    render: function() {
        this.loadTemplate(this.postLoadTemplate.bind(this));
    },

    events: {
        "click #search_button": "onSearch"
    },

    loadTemplate: function(cbOnLoadTemplate) {
        var options = {
            url: "template.tpl",
            type: "GET",
            success: function(data) {
                cbOnLoadTemplate($(data).html());
            },
            error: function(e) { console.error(e) }
        }
        $.ajax(options);
    },

    postLoadTemplate: function(template) {
        $(this.el).empty();
        $(this.el).html(template);
        console.log(this.model.toJSON());
    },

    onSearch: function(e) {
    this.trigger(appEvents.search_books, { data: "vishal" });
    }
});

