
var App = function() {
    this.cartTotal = null;
    this.count = null;
    this.cartItem = [];
    this.categories = null;
    this.activeCategory = null;
    this.init = function() {
        var clothes = new Category('Clothes', 1, app_types.clothes);
        var electronics = new Category('Electronics', 2, app_types.electronics);
        var accessory = new Category('Accessory', 3, app_types.accessory);

        clothes.createSubCategories();
        electronics.createSubCategories();
        accessory.createSubCategories();

        this.categories = [clothes, electronics, accessory];
    }

    this.getCategoryById = function(id) {
        for (i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === parseInt(id)) {
                return this.categories[i];
            }
        }
    }
}