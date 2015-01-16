var Button = function() {
    this.tagName = "button";
    this.title = "Submit";
    this.cssClass = "button element";
    this.id = "btnId";
    this.isSelected = false;
}

var Checkbox = function() {
    this.tagName = "input";
    this.type = "checkbox";
    this.cssClass = "checkbox element";
    this.id = "chkId";
    this.isSelected = false;
    this.text = " select checkbox";
}

var Image = function() {
    this.tagName = "img";
    this.source = "cross.png";
    this.cssClass = "image element";
    this.id = "imgId";
    this.isSelected = false;
}

var List = function() {
    this.tagName = "ul";
    this.item = ["Orange", "Banana", "Grapes", "Kiwi"];
    this.cssClass = "list element";
    this.liClass = "li";
    this.id = "listId";
    this.isSelected = false;
}

var Canvas = function() {
    this.Elements = [];   
    this.getElementById = function(id) {
        for (i = 0; i < this.Elements.length; i++) {
            if (this.Elements[i].id === id) {
                return this.Elements[i];
            }
        }
    }
    
    this.getSelectedElements = function() {
        this.selectedElements = [];
        for (var i = 0; i < this.Elements.length; i++) {
            if (this.Elements[i].isSelected === true) {
                this.selectedElements.push(this.Elements[i]);
            }
        } 
        return this.selectedElements;
    }

    this.pasteElements = function(id) {
        if ("btnId" === id) {
            var btn = new Button();
            this.createButton2(btn);
        }

        if ("chkId" === id) {
            var chk = new Checkbox();
            this.createCheckbox2(chk);
        }

        if ("imgId" === id) {
            var img = new Image();
            this.createImage2(img);
        }

        if ("listId" === id) {
            var ul = new List();
            this.createList2(ul);
        }
    }

    this.handleClick = function(e) {
        $("#" + e.currentTarget.id).toggleClass("selection");
        if (e.currentTarget.id === "chkId")
            $("label#chkId").toggleClass("selection");

        var clickElement = canvas.getElementById(e.currentTarget.id);      
            if (clickElement.isSelected === false) {
                clickElement.isSelected = true;
            }
            else
                if (clickElement.isSelected === true) {
                clickElement.isSelected = false;
                return;
            }
    }

    this.createButton2 = function(btn) {
        var button = document.createElement(btn.tagName);
        var row = $("<div/>");
        row.appendTo($("#div2"));
        $(button).attr("id", btn.id);
        $(button).appendTo(row);
        $(button).addClass(btn.cssClass);
        $(button).text(btn.title);
    }

    this.createButton = function(btn) {
        var button = document.createElement(btn.tagName);
        var row = $("<div/>");
        row.appendTo($("#div1"));
        $(button).attr("id", btn.id);
        $(button).appendTo(row);
        $(button).addClass(btn.cssClass);
        $(button).text(btn.title);
    }

    this.createCheckbox = function(chk) {
        var checkbox = document.createElement(chk.tagName);
        var row1 = $("<div/>");
        row1.appendTo($("#div1"));
        $(checkbox).attr("id", chk.id);
        $(checkbox).attr("type", chk.type);
        $(checkbox).appendTo(row1);
        $(checkbox).addClass(chk.cssClass);
        $(checkbox).after($('<label class="element" id=' + chk.id + '/>').text(chk.text));
    }

    this.createCheckbox2 = function(chk) {
        var checkbox = document.createElement(chk.tagName);
        var row1 = $("<div/>");
        row1.appendTo($("#div2"));
        $(checkbox).attr("id", chk.id);
        $(checkbox).attr("type", chk.type);
        $(checkbox).appendTo(row1);
        $(checkbox).addClass(chk.cssClass);
        $(checkbox).after($('<label class="element" id=' + chk.id + '/>').text(chk.text));
    }

    this.createList = function(ul) {
        var list = document.createElement(ul.tagName);
        var row3 = $("<div/>");
        row3.appendTo($("#div1"));
        for (i = 0; i < ul.item.length; i++) {
            var liItem = ul.item[i];
            var liText = $("<li/>").text(liItem);
            $(liText).appendTo(list);
            $(liText).addClass(ul.liClass);
        }
        $(list).attr("id", ul.id);
        $(list).addClass(ul.cssClass);
        $(list).appendTo(row3);
    }

    this.createList2 = function(ul) {
        var list = document.createElement(ul.tagName);
        var row3 = $("<div/>");
        row3.appendTo($("#div2"));
        for (i = 0; i < ul.item.length; i++) {
            var liItem = ul.item[i];
            var liText = $("<li/>").text(liItem);
            $(liText).appendTo(list);
            $(liText).addClass(ul.liClass);
        }
        $(list).attr("id", ul.id);
        $(list).addClass(ul.cssClass);
        $(list).appendTo(row3);
    }

    this.createImage = function(img) {
        var image = document.createElement(img.tagName);
        var row2 = $("<div/>");
        row2.appendTo($("#div1"));
        $(image).attr("src", img.source);
        $(image).attr("alt", img.altName);
        $(image).attr("id", img.id);
        $(image).addClass(img.cssClass);
        $(image).appendTo($(row2));
    }
    
    this.createImage2 = function(img) {
        var image = document.createElement(img.tagName);
        var row2 = $("<div/>");
        row2.appendTo($("#div2"));
        $(image).attr("src", img.source);
        $(image).attr("alt", img.altName);
        $(image).attr("id", img.id);
        $(image).addClass(img.cssClass);
        $(image).appendTo($(row2));
    }

    this.init = function() {
        var self = this;
        var btn = new Button();
        var elementButton = this.createButton(btn);
        this.Elements.push(btn);

        var chk = new Checkbox();
        var elementCheckbox = this.createCheckbox(chk);
        this.Elements.push(chk);

        var img = new Image();
        var elementImage = this.createImage(img);
        this.Elements.push(img);

        var ul = new List();
        var ulElement = this.createList(ul);
        this.Elements.push(ul);


        $(".element").on("click", this.handleClick.bind(this));
    }
}
var canvas = null;
var load = function() {
    canvas = new Canvas();
    canvas.init();

    $(document).keydown(function(e) {
        if (e.keyCode == 67 && e.ctrlKey) {
            var copy1 = canvas.getSelectedElements();
            return copy1;
        }
    });

    $(document).keydown(function(e) {
        if (e.keyCode == 86 && e.ctrlKey) {
            var copy1 = canvas.getSelectedElements();
            for( var i = 0; i<copy1.length;i++){            
            canvas.pasteElements(copy1[i].id);
            }
        $("#div2").children().children().removeClass("selection");
        }
    });
}

$(document).ready(load);
