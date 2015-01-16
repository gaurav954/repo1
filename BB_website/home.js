function loadWebsite() {
    var appController = new AppController();
    appController.loadView();
} 

$(document).ready(loadWebsite);