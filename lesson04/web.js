
var app = null;
var app_events = {
    search_books : "search-books"
}
var app_types = {
    clothes : 1,
    electronics : 2,
    accessory : 3,
    
    clMen : 101,
    clWomen : 102,
    
    elMobile : 201,
    elLaptop : 202,
    
    acTravel : 301,
    acCarcare: 302,
    
    MenTshirt : 1001,
    MenJeans : 1002,
    
    WomenKurti : 1101,
    WomenTop : 1102,
    
    MobileApple : 1201,
    MobileSamsung : 1202,
    
    LaptopDell : 1301,
    LaptopLenovo : 1302,
    
    TravelAtourister : 1401,
    TravelSamsonite : 1402,
    
    CarCarePerfume : 1501,
    CarCareSeatCover : 1502
}

$(document).ready(function() {

    app = new App();
    app.init();


    var ul = document.createElement("ul");
    $(ul).addClass("nav nav-pills");
    for (i = 0; i < app.categories.length; i++) {
        var category = null;
        category = app.categories[i];

        var li = $("<li>");
        $(li).text(category.name);
        $(li).addClass("category");
        $(li).attr("id", category.id);
        $(li).attr("type", category.type);
        $(li).appendTo($(ul));
        $(ul).appendTo(".navibar");
    }

    removeDropdown = function() {
        $('.dropdown').remove();
    }

    handleHover = function(e) {
        list = document.createElement("ul");
        removeDropdown();
        $(list).toggleClass("dropdown");
        $(list).attr("style", "list-style-type:none");
        var category = app.getCategoryById(e.currentTarget.id);
        for (i = 0; i < category.subCategories.length; i++) {
            var subCategory = category.subCategories[i];
            var li = $("<li>");
            $(li).text(subCategory.name);
            $(li).addClass("li subCategory");
            $(li).attr("id", subCategory.id);
            $(li).attr("type", subCategory.type);
            $(li).appendTo($(list));
            $(list).appendTo($(e.currentTarget));
        }
        app.activeCategory = category;
        $(".subCategory").on("click", handleSubCategoryClick);
    }

    getsubCategoryById = function(id) {
        for (i = 0; i < app.activeCategory.subCategories.length; i++) {
            if (app.activeCategory.subCategories[i].id === parseInt(id)) {
                return app.activeCategory.subCategories[i];
            }
        }
    }

    getP_LineById = function(id) {
        for (i = 0; i < app.activeCategory.activeSubCategory.productLines.length; i++) {
            if (app.activeCategory.activeSubCategory.productLines[i].id === parseInt(id)) {
                return app.activeCategory.activeSubCategory.productLines[i];
            }
        }
    }

    handleSubCategoryClick = function(e) {
        $(".div21").empty();
        var subCategory = getsubCategoryById(e.currentTarget.id);
        for (i = 0; i < subCategory.productLines.length; i++) {
            var productLine = subCategory.productLines[i];
            var list = document.createElement("ul");
            $(list).attr("style", "list-style-type:none");
            var li = $("<li>");
            $(li).text(productLine.name);
            $(li).attr("id", productLine.id);
            $(li).attr("type", productLine.type);
            $(li).addClass("productLine");
            $(li).appendTo($(list));
            $(list).appendTo(".div21");
        }
        app.activeCategory.activeSubCategory = subCategory;
        $(".productLine").on("click", function(e) {
            handleP_LineClick(e.currentTarget.id);
        });
    }

    getProductById = function(id) {
        var productLine = app.activeCategory.activeSubCategory.activeProductLine;
        for (i = 0; i < productLine.products.length; i++) {
            if (productLine.products[i].id === id) {
                return productLine.products[i];
            }
        }
    }

    productDetails = function(e) {
        $("#popup").empty();
        $("#overlay").show();
        $("#popup").show();

        var product = getProductById(e.currentTarget.id);

        var picDiv = $("<div>");
        $(picDiv).addClass("picDiv");
        var image = document.createElement("img");
        $(image).attr("src", product.src);
        $(image).addClass(product.cssClass);
        $(image).appendTo($(picDiv));

        var pName = $("<div>");
        $(pName).text(product.id);
        $(pName).addClass("pName");
        $(pName).appendTo($(picDiv));
        $(picDiv).appendTo("#popup");


        var divDetails = $("<div>");
        $(divDetails).addClass("divDetails");
        var divLeft = $("<div>");
        $(divLeft).addClass("divLeft");

        for (i = 0; i < product.displayValues.length; i++) {
            var div = document.createElement("div");
            var col = $("<span>");
            $(col).text(product.displayValues[i]);
            $(col).addClass("col");
            $(col).appendTo($(div));
            $(div).appendTo($(divLeft));
        }
        $(divLeft).appendTo($(divDetails));

        var divRight = $("<div>");
        $(divRight).addClass("divRight");

        var div1 = $("<div>");
        $(div1).text(product.id);
        $(div1).addClass("col");
        $(div1).appendTo($(divRight));

        var div2 = $("<div>");
        $(div2).text(product.price);
        $(div2).addClass("col");
        $(div2).appendTo($(divRight));

        var div3 = $("<div>");
        $(div3).text(product.stock);
        $(div3).addClass("col");
        $(div3).appendTo($(divRight));

        $(divRight).appendTo($(divDetails));
        $(divDetails).appendTo("#popup");

        buttonCancel = document.createElement("button");
        $(buttonCancel).addClass("btn btn-danger displayButton");
        $(buttonCancel).text("Cancel");
        $(buttonCancel).appendTo("#popup");

        buttonAddToCart = document.createElement("button");
        $(buttonAddToCart).addClass("btn btn-success displayButton");
        $(buttonAddToCart).text("Add To Cart");
        $(buttonAddToCart).appendTo("#popup");
        $(buttonAddToCart).attr("id", "addCart");

        $(buttonCancel).on("click", function() {
            $("#overlay").hide();
            $("#popup").hide();
        });

        app.activeCategory.activeSubCategory.activeProductLine.activeProduct = product;

        $(buttonAddToCart).on("click", function() {
            app.count = app.count + 1;
            $("#count").text(app.count);
            app.cartItem.push(product);
            app.cartTotal = app.cartTotal + product.price;
            $("#overlay").hide();
            $("#popup").hide();
        });
    }

    handleP_LineClick = function(id) {
        $(".div22").empty();
        var productLine = getP_LineById(id);
        var list = document.createElement("ul");
        $(list).attr("style", "list-style-type:none");
        for (i = 0; i < productLine.products.length; i++) {
            var product = productLine.products[i];
            var li = $("<li>");
            var img = document.createElement("img");
            $(img).attr("src", product.src);
            $(img).addClass(product.cssClass);
            $(img).appendTo($(li));
            $(li).attr("id", product.id);
            $(li).attr("type", product.type);
            $(li).attr("price", product.price);
            $(li).appendTo($(list));
            $(li).addClass("product");
            $(list).appendTo(".div22");
        }
        app.activeCategory.activeSubCategory.activeProductLine = productLine;
        $(".product").on("click", productDetails);
    }

    $(".category").hover(handleHover, removeDropdown);

    cartClick = function() {
        $("#popup2").empty();
        $("#overlay2").show();
        $("#popup2").show();

        var container2 = $("<div/>");
        $(container2).addClass("container2");

        var blockL = $("<div/>");
        $(blockL).addClass("blockL");

        var blockR = $("<div/>");
        $(blockR).addClass("blockR");
        var checkOut = $("<div/>");
        $(checkOut).addClass("checkOut");

        var divR1 = $("<div/>");
        $(divR1).addClass("divR1");
        var cartCount1 = "Total items: ";
        var cartCount = cartCount1.concat(app.count);
        $(divR1).text(cartCount);
        $(divR1).appendTo(checkOut);

        var divR2 = $("<div/>");
        $(divR2).addClass("divR1");
        var cartPrice1 = "Amount Payable: Rs.";
        var cartPrice = cartPrice1.concat(app.cartTotal);
        $(divR2).text(cartPrice);
        $(divR2).appendTo(checkOut);

        var cartOut = $("<button/>");
        $(cartOut).attr("type", "button");
        $(cartOut).addClass("btn btn-warning btn-lg cartOut");
        $(cartOut).text("Place Order");
        $(cartOut).appendTo(checkOut);


        $(checkOut).appendTo(blockR);
        $(blockR).appendTo(container2);

        for (var i = 0; i < app.cartItem.length; i++) {
            var item = app.cartItem[i];
            var detail2 = app.cartItem[i].id;
            var price2 = app.cartItem[i].price;

            var div = $("<div/>");
            $(div).addClass("div");

            var pic = document.createElement("img");
            $(pic).attr("src", item.src);
            $(pic).addClass("pic");
            $(pic).appendTo(div);

            var span = $("<div/>");
            $(span).addClass("span");
            var detail1 = "Product: ";
            var detail = detail1.concat(detail2);
            var line1 = $("<span/>");
            $(line1).text(detail);
            $(line1).addClass("cartText");
            $(line1).appendTo(span);
            $(span).appendTo(div);

            var span2 = $("<div/>");
            $(span2).addClass("span2");
            var price1 = "Price: Rs.";
            var price = price1.concat(price2);
            var line2 = $("<span/>");
            $(line2).addClass("cartText");
            $(line2).text(price);
            $(line2).appendTo(span2);
            $(span2).appendTo(div);

            var span3 = $("<div/>");
            $(span3).addClass("span3");
            var remove = $("<a/>");
            $(remove).text("Remove");
            $(remove).addClass("cartText");
            $(remove).attr("id", detail2);
            $(remove).appendTo(span3);
            $(span3).appendTo(div);

            $(div).appendTo(blockL);
            $(blockL).appendTo(container2);

            $(container2).appendTo("#popup2");
        }

        $(".cartText").on("click", itemRemove);

        $("#overlay2").on("click", function() {
            $("#overlay2").hide();
            $("#popup2").hide();
        });
    }
    $("#cart").on("click", cartClick);

    itemRemove = function(e) {
        var rem = _.find(app.cartItem, function(itemR) { return itemR.id === e.currentTarget.id; });
        var filtered = _.filter(app.cartItem, function(item) { return item.id !== rem.id; });
        app.cartItem = filtered;
        app.count = app.count - 1;
        app.cartTotal = app.cartTotal - rem.price;
        $("#count").text(app.count);
        $("#cart").click();
    }

});



