$(document).ready(docready);

var allAccounts = getAllAccounts();

function docready() {
    addAllItemsToList();
    addEventHandlers();
}

function addAllItemsToList() {
    var ul = $('<ul class="ul" id="myid"></ul>');
    var parent = $("#l-pane");
    ul.appendTo(parent);
    
    for (var i = 0; i < allAccounts.length; i++) {
        addItemToList(allAccounts[i].name, i);
    }
}
function addItemToList(name, id) {
    
    var tmpl = '<li class="left-entry"><a href="#r-pane"></a></li>';

    var ul = $("#myid");
    var li = $(tmpl);
    li.attr("id", id);
    $(li).find('a').text(name);
    li.appendTo(ul);
    $(li).on("click", onItemClick);
    
}

function onItemClick(e) {
    var id = parseInt($(this).attr("id"));
    $("#pName").text(allAccounts[id].name);
    $("#pType").text(allAccounts[id].type);
    $("#pBal").text(allAccounts[id].openingBalance);
}

function addEventHandlers() {
    $("#addEntry").on("click", addNewEntry);
    $("#ok").on("click", onPopUpOk);
    $("#cancel").on("click", onPopUpCancel);
    
}

function addNewEntry() {
    $("#name").val("");
    $("#type").val("");
    $("#bal").val("");

    $("#overlay").show();
    $("#popup").show();
    
}
function onPopUpOk() {
    $("#overlay").hide();
    $("#popup").hide();
    var id = allAccounts.length;
    var name = $("#name").val();
    var type = $("#type").val();
    var bal = $("#bal").val();
    var accNew = new Account(name, type, bal);
    allAccounts.push(accNew);
    addItemToList(accNew.name, id);
}

function onPopUpCancel() {
    $("#overlay").hide();
    $("#popup").hide();	
}





