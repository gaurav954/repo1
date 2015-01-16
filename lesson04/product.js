

var Product = function(id, type, src, price, cssClass, stock) {
    this.id = id;
    this.type = type;
    this.src = src;
    this.price = price;
    this.cssClass = cssClass;
    this.stock = stock;
    this.displayValues = ['Brand:', 'Price:', 'Stock:'];
}

var Tshirt = function(id, type, src, price, cssClass) {   
    this.base = Product;
    this.base(id, type, src, price, cssClass,3);
}

var Jeans = function(id, type, src, price,cssClass) {
    this.base = Product;
    this.base(id, type, src, price, cssClass,4);
}

var Kurti = function(id, type, src, price,cssClass) {
    this.base = Product;
    this.base(id, type, src, price, cssClass,10);
}

var Top = function(id, type, src, price,cssClass) {
    this.base = Product;
    this.base(id, type, src, price, cssClass,45);
    
}
    
var Dell = function(id, type, src, price,cssClass) {
    this.base = Product;
    this.base(id, type, src, price, cssClass,54);
}
    
var Lenovo = function(id, type, src, price,cssClass) {
    this.base = Product;
    this.base(id, type, src, price, cssClass,26);
}

var Samsung = function(id, type, src, price,cssClass) {
    this.base = Product;
    this.base(id, type, src, price, cssClass,101);
}

var Apple = function(id, type, src, price,cssClass) {
    this.base = Product;
    this.base(id, type, src, price, cssClass,200);
}

var Samsonite = function(id, type, src, price,cssClass) {
    this.base = Product;
    this.base(id, type, src, price, cssClass,55);
}

var Atourister = function(id, type, src, price,cssClass) {
    this.base = Product;
    this.base(id, type, src, price, cssClass,45);
}

var Perfume = function(id, type, src, price,cssClass) {
    this.base = Product;
    this.base(id, type, src, price, cssClass,80); 
}

var SeatCover = function(id, type, src, price,cssClass) {
    this.base = Product;
    this.base(id, type, src, price, cssClass,10);
}