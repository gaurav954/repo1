function appReady() {
    var appController = new AppController();
    appController.loadCustomersView();
}

$(document).ready(appReady);