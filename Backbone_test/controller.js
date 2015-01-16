/*
var SearchController = new Backbone.Controller.extend({
    initialize: function() {
        console.log("controller initialized");
    },
    loadView: function() {
        var searchModel = new SearchModel();
        this.searchView = new SearchView(searchModel);
        this.searchView.render();
    }
});

*/

var SearchController = function() {
    this.initialize();
}

SearchController.prototype.initialize = function() {
    console.log("controller initialized");
}

SearchController.prototype.loadView = function() {
    var searchModel = new SearchModel();
    this.searchView = new SearchView({ model: searchModel });
    this.searchView.render();
    this.searchView.on(appEvents.search_books, this.onSearch.bind(this));
}

SearchController.prototype.onSearch = function(data) {
    alert(data.data);
}