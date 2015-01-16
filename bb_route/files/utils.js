function Utils() {
}

Utils.prototype.loadTemplate = function(tplFileName, cnOnTemplateLoad) {
    var options = {
        url: tplFileName,
        type: "GET",
        success: function(data) {
            cnOnTemplateLoad(data);
        },
        error: function(e) { console.error(e) }
    }
    $.ajax(options);
}

Utils.prototype.closeWrapperViews = function(wrapperView) {
    if (!wrapperView) return;
    if (!wrapperView.collectionListView) return;
    if (wrapperView.collectionListView.length === 0) return;
    wrapperView.collectionListView.forEach(function(view) {
        view.close();
    });
}