var App = function() {
    var count = null;
    var cartItem = [];
    var cartTotal = null;
    this.createCategory = function() {
        var ul = document.createElement("ul");
        $(ul).addClass("nav nav-pills");
        for (i = 0; i < categories.length; i++) {
            var cat = null;
            cat = categories[i];

            var li = $("<li>");
            $(li).text(cat.CATEGORY);
            $(li).addClass("category");
            $(li).attr("id", cat.ID);
            $(li).attr("type", cat.TYPE);
            $(li).appendTo($(ul));
            $(ul).appendTo(".navibar");
        }
        $(".category").hover(this.handleHover, removeDropdown);
    }

    removeDropdown = function() {
        $('.dropdown').remove();
    }

    this.handleHover = function(e) {
        list = document.createElement("ul");
        removeDropdown();
        $(list).toggleClass("dropdown");
        $(list).attr("style", "list-style-type:none");
        var subcat = _.filter(sub_categories, function(scat) { return scat.PARENT_CATEGORY === e.currentTarget.innerText });
        for (i = 0; i < subcat.length; i++) {
            var subCategory = subcat[i];
            var li = $("<li>");
            $(li).text(subCategory.SUB_CATEGORY);
            $(li).addClass("li subCategory");
            $(li).attr("id", subCategory.ID);
            $(li).attr("type", subCategory.TYPE);
            $(li).appendTo($(list));
            $(list).appendTo($(e.currentTarget));
        }
        $(".subCategory").on("click", handleSubCategoryClick);
    }

    handleSubCategoryClick = function(e) {
        $(".div21").empty();
        var pline = _.filter(proLine, function(pl) { return pl.PARENT_SCATEGORY === e.currentTarget.innerText });
        for (i = 0; i < pline.length; i++) {
            var productLine = pline[i];
            var list = document.createElement("ul");
            $(list).attr("style", "list-style-type:none");
            var li = $("<li>");
            $(li).text(productLine.PRODUCT_LINE);
            $(li).attr("id", productLine.ID);
            $(li).attr("type", productLine.TYPE);
            $(li).addClass("productLine");
            $(li).appendTo($(list));
            $(list).appendTo(".div21");
        }

        $(".productLine").on("click", handleP_LineClick);
    }

    handleP_LineClick = function(e) {
        $(".div22").empty();
        var pro = _.filter(products, function(p) { return p.PARENT_PLINE === e.currentTarget.innerText });
        var list = document.createElement("ul");
        $(list).attr("style", "list-style-type:none");
        for (i = 0; i < pro.length; i++) {
            var product = pro[i];
            var li = $("<li>");
            var img = document.createElement("img");
            $(img).attr('src', 'http://localhost:8080/' + product.SOURCE);
            $(img).attr("alt", product.PRODUCT);
            $(img).addClass("kurti");
            $(img).appendTo($(li));
            $(li).attr("id", product.ID);
            $(li).attr("type", product.TYPE);
            $(li).attr("price", product.PRICE);
            $(li).appendTo($(list));
            $(li).addClass("product");
            $(list).appendTo(".div22");
        }
        $(".product").on("click", productDetails);
    }

    productDetails = function(e) {
        $("#popup").empty();
        $("#overlay").show();
        $("#popup").show();
        var displayValues = ['Brand:', 'Price:'];
        var product = _.find(products, function(p) { return p.ID === e.currentTarget.id });

        var picDiv = $("<div>");
        $(picDiv).addClass("picDiv");
        var image = document.createElement("img");
        $(image).attr("src", 'http://localhost:8080/' + product.SOURCE);
        $(image).addClass("kurti");
        $(image).appendTo($(picDiv));

        var pName = $("<div>");
        $(pName).text(product.PRODUCT);
        $(pName).addClass("pName");
        $(pName).appendTo($(picDiv));
        $(picDiv).appendTo("#popup");


        var divDetails = $("<div>");
        $(divDetails).addClass("divDetails");
        var divLeft = $("<div>");
        $(divLeft).addClass("divLeft");

        for (i = 0; i < displayValues.length; i++) {
            var div = document.createElement("div");
            var col = $("<span>");
            $(col).text(displayValues[i]);
            $(col).addClass("col");
            $(col).appendTo($(div));
            $(div).appendTo($(divLeft));
        }
        $(divLeft).appendTo($(divDetails));

        var divRight = $("<div>");
        $(divRight).addClass("divRight");

        var div1 = $("<div>");
        $(div1).text(product.PRODUCT);
        $(div1).addClass("col");
        $(div1).appendTo($(divRight));

        var div2 = $("<div>");
        $(div2).text(product.PRICE);
        $(div2).addClass("col");
        $(div2).appendTo($(divRight));

        //           var div3 = $("<div>");
        //           $(div3).text(product.stock);
        //           $(div3).addClass("col");
        //           $(div3).appendTo($(divRight));

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

        //          app.activeCategory.activeSubCategory.activeProductLine.activeProduct = product;

        $(buttonAddToCart).on("click", function() {
            count = count + 1;
            $("#count").text(count);
            cartItem.push(product);
            cartTotal = cartTotal + parseFloat(product.PRICE);
            $("#overlay").hide();
            $("#popup").hide();
        });
    }

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
        var cartCount = cartCount1.concat(count);
        $(divR1).text(cartCount);
        $(divR1).appendTo(checkOut);

        var divR2 = $("<div/>");
        $(divR2).addClass("divR1");
        var cartPrice1 = "Amount Payable: Rs.";
        var cartPrice = cartPrice1.concat(cartTotal);
        $(divR2).text(cartPrice);
        $(divR2).appendTo(checkOut);

        var cartOut = $("<button/>");
        $(cartOut).attr("type", "button");
        $(cartOut).addClass("btn btn-warning btn-lg cartOut");
        $(cartOut).text("Place Order");
        $(cartOut).appendTo(checkOut);

        var cartSave = $("<button/>");
        $(cartSave).attr("type", "button");
        $(cartSave).addClass("btn btn-default cartSave");
        $(cartSave).text("Save for Later");
        $(cartSave).appendTo(checkOut);

        $(checkOut).appendTo(blockR);
        $(blockR).appendTo(container2);

        for (var i = 0; i < cartItem.length; i++) {
            var item = cartItem[i];
            var detail2 = cartItem[i].PRODUCT;
            var price2 = cartItem[i].PRICE;
            var src = cartItem[i].SOURCE;
            var div = $("<div/>");
            $(div).addClass("div");

            var pic = document.createElement("img");
            $(pic).attr("src", 'http://localhost:8080/' + src);
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

        $("#overlay2").on("click", overlayHide);

        $('.cartSave').on('click', login);
    }
    $("#cart").on("click", cartClick);

    overlayHide = function() {
        $("#overlay2").hide();
        $("#popup2").hide();
    }

    itemRemove = function(e) {
        var rem = _.find(cartItem, function(itemR) { return itemR.PRODUCT === e.currentTarget.id; });
        var filtered = _.filter(cartItem, function(item) { return item.PRODUCT !== rem.PRODUCT; });
        cartItem = filtered;
        count = count - 1;
        cartTotal = cartTotal - parseFloat(rem.PRICE);
        $("#count").text(count);
        $("#cart").click();
    }

    login = function() {
        overlayHide();
        $("#popup3").empty();
        $("#overlay3").show();
        $("#popup3").show();
        var divL = $("<div/>");
        var divL1 = $("<div/>");
        $(divL1).text("Email: ");
        $(divL1).addClass("email");
        var input = $("<input/>");
        $(input).attr('type', 'text');
        $(input).attr('id', 'email');
        $(input).appendTo(divL1);

        var divL2 = $("<div/>");
        buttonSave = document.createElement("button");
        $(buttonSave).addClass("btn btn-danger displayButton save");
        $(buttonSave).text("Save");
        $(buttonSave).appendTo(divL2);

        $(divL1).appendTo(divL);
        $(divL2).appendTo(divL);
        $(divL).appendTo("#popup3");

        $(".save").on("click", Proceed);
    }
    var data = null;

    Proceed = function() {
        var user = document.getElementById("email");
        var userId = user.value;
        var ids = [];
        for (var i = 0; i < cartItem.length; i++) {
            var tag = cartItem[i].ID;
            ids.push(tag);
        }

        var docs = {
            'user': userId,
            'itemsId': ids
        };

        data = JSON.stringify(docs);

        $.ajax(options5);

        $("#overlay3").hide();
        $("#popup3").hide();
    }
    var options5 = {
        url: "http://localhost:8080/cart",
        type: "POST",
        data: data,
        contentType: "application/json;charset=UTF-8",
        success: function(e) {
        console.log(data);
            console.log("Data sent to server successfully");
        },
        error: function(e) { console.log("Error in sending the data " + Error.msg) }
    };
}