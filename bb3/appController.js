var AppController = function() {
    this.initialize();
}

AppController.prototype.initialize = function() {
    console.log("Controller Initializes");
}

AppController.prototype.loadCustomersView = function() {
    this.customersModel = new CustomersModel();
    this.customersModel.getData(this.onCustomersModelResponse.bind(this));
}

AppController.prototype.onCustomersModelResponse = function(result) {
    if (result.success) {
        this.customersView = new CustomerListViewWrapper({ model: this.customersModel });
        this.customersView.on("customerSel", this.onCustomerSelection.bind(this));
        this.customersView.render();
    }
}

AppController.prototype.onCustomerSelection = function(selModel) {
    alert(selModel.get('name'));
}
