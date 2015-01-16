

var Cell = function() {
    this.id = null;
    this.text = null;

}

var Puzzle = function() {
    this.cells = [];
    this.newArray = [];
    this.array = [1, 2, 3, 4, 5, 6, 7, 8,0];

    this.init = function() {
        this.cells = [];
        for (var i = 1; i < 4; i++) {
            for (var j = 1; j < 4; j++) {
                var cell = new Cell();
                cell.id = "cell" + i + j;
                var neighbour = this.getNeighbours(i, j);
                cell.north = neighbour.north;
                cell.east = neighbour.east;
                cell.south = neighbour.south;
                cell.west = neighbour.west;

                this.cells.push(cell);
            }
        }
        this.cellText(this.array);
    }

    this.getNeighbours = function(row, col) {
        var neighbour = {};
        neighbour.north = null;
        neighbour.east = null;
        neighbour.south = null;
        neighbour.west = null;

        if (col < 3) {
            neighbour.east = "cell" + row.toString() + (col + 1);
        }

        if (col > 1) {
            neighbour.west = "cell" + row.toString() + (col - 1);
        }

        if (row > 1) {
            neighbour.north = "cell" + (row - 1) + col.toString();
        }

        if (row < 3) {
            neighbour.south = "cell" + (row + 1) + col.toString();
        }
        return neighbour;
    }
    this.cellText = function(array) {
        for (i = 0; i < 9; i++) {
            var cell = this.cells[i];
            cell.text = array[i];
            $("#" + cell.id).removeClass("hide");
            $("#" + cell.id).text(array[i]);
            if (cell.text === 0) {
                $("#" + cell.id).addClass("hide");
            }
        }
        this.gameOver();
    }

    this.shuffleCells = function(array) {
        var randomArr = _.shuffle(array);
        for (var i = 0; i < 9; i++) {
            this.newArray[i] = randomArr[i];
        }
        this.cellText(this.newArray);
    }

    this.handleCellClick = function(cellId) {
        var clickedCell = _.find(this.cells, function(cell) { return cell.id === cellId });
        var emptyCell = this.getEmptyCell();

        if (clickedCell.east === emptyCell.id) {
            this.swap(clickedCell.id);
            return;
        }

        if (clickedCell.south === emptyCell.id) {
            this.swap(clickedCell.id);
            return;
        }

        if (clickedCell.west === emptyCell.id) {
            this.swap(clickedCell.id);
            return;
        }

        if (clickedCell.north === emptyCell.id) {
            this.swap(clickedCell.id);
            return;
        }

        else {
            alert("Invalid Move");
            return;
        }
    }

    this.swap = function(id) {
        var cell1 = this.getEmptyCell();
        var cell2 = _.find(this.cells, function(cell) { return cell.id === id; });
        var temp = cell2.text;
        cell1.text = temp;
        cell2.text = 0;
        this.newArray = [];
        for (i = 0; i < 9; i++) {
            var finalCellText = this.cells[i].text;
            this.newArray.push(finalCellText);
        }
        this.cellText(this.newArray);
    }

    this.getEmptyCell = function() {

        for (i = 0; i < 9; i++) {
            if (this.cells[i].text === 0) {
                return this.cells[i];
            }
        }
    }

    this.gameOver = function() {
        if (_.isEqual(this.array, this.newArray)) {
            alert("Congratulations!! Game Complete");
        }
    }
}

 

$(document).ready(function() {
    var puzzle = new Puzzle();
    puzzle.init();
    
    handleShuffle = function() {
        puzzle.shuffleCells(puzzle.array);
    }
    $(".shuffle").on('click', handleShuffle);
    
    onCubeClick = function(e) {
        puzzle.handleCellClick(e.currentTarget.id);
    }
    $('.cube').on('click', onCubeClick);
});

var employee = {
    name: 'user1',
    email: 'user1@email.com',
    country: 'germany'
}

var options = {
    url: "http://localhost:8080/writeemployee",
    type: "POST",
    data: JSON.stringify(employee),
    contentType: "application\json",
    success: function(e) { console.log("Data sent to server successfully") },
    error: function(e) { console.log("Error in sending the data " + Error.msg) }
};

$.ajax(options);