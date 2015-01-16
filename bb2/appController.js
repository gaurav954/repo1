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
        this.customersView = new CustomersView({ model : this.customersModel});
        this.customersView.render();
        this.customersView.on("clickedOnList",this.onLiClick.bind(this));
    }
}

AppController.prototype.onLiClick = function(customer) {
    this.customerDetailsModel = new CustomerDetailsModel();
    this.customerDetailsModel.set({ "id": customer.id });
    this.customerDetailsModel.set({ "name": customer.name });
    this.customerDetailsModel.getData(this.onCustomerDetailRes.bind(this));
}

AppController.prototype.onCustomerDetailRes = function(res) {
    if (res.success) {

        var type = this.customerDetailsModel.attributes.type;
        console.log(type);
        if (type == "Saving") {
            this.customerDetailsView = new SavingCustomerDetailsView({ model: this.customerDetailsModel });
            this.customerDetailsView.render();
        }else
        if (type == "current") {
            this.customerDetailsView = new CurrentCustomerDetailsView({ model: this.customerDetailsModel });
            this.customerDetailsView.render();
        }else
        if (type == "nri") {
            this.customerDetailsView = new NriCustomerDetailsView({ model: this.customerDetailsModel });
            this.customerDetailsView.render();
        }else
        if (type == "childAccount") {
            this.customerDetailsView = new ChildCustomerDetailsView({ model: this.customerDetailsModel });
            this.customerDetailsView.render();
        }
    }
}