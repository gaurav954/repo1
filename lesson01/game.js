
var currentImage = "url(circle.png)";
var nextImage = "url(cross.png)";

$(document).ready(onDocReady);

function onDocReady() {
    $(".cube").on("click",onCubeClick);
}
var Cell = function() {
    this.playerId = null;
    this.id = null;
    this.row = null;
    this.col = null;
    this.north = null;
    this.northEast = null;
    this.east = null;
    this.eastSouth = null;
    this.south = null;
    this.southWest = null;
    this.west = null;
    this.westNorth = null;
    this.setBgImage = function() {
        if (this.playerId === 1) {
            $("#" + this.id).css('background-image', currentImage);
        }else if (this.playerId === 2) {
            $("#" + this.id).css('background-image', nextImage);
        }
    }
}

var Game = function() {
    this.cells = [];
    this.activePlayer = 0;
    this.getCellById = function(id) {
        for (var i = 0; i < this.cells.length; i++) {
            if (this.cells[i].id === id) {
                return this.cells[i];
            }
        }
    }
    
    this.init = function() {
        for (var iRow = 0; iRow < 3; iRow++) {
            for (var jCol = 0; jCol < 3; jCol++) {
                var cell = new Cell();
                cell.row = iRow;
                cell.col = jCol;
                cell.id = "cell" + iRow + jCol;
                var neighbour = this.getCellNeighbours(iRow, jCol);
                cell.north = neighbour.north;
                cell.northEast = neighbour.northEast;
                cell.east = neighbour.east;
                cell.eastSouth = neighbour.eastSouth;
                cell.south = neighbour.south;
                cell.southWest = neighbour.southWest;
                cell.west = neighbour.west;
                cell.westNorth = neighbour.westNorth;

                this.cells.push(cell);

            }
        }
    }
    
    this.getCellNeighbours = function(row, col) {
        var neighbour = {};
        neighbour.north = null;
        neighbour.northEast = null;
        neighbour.east = null;
        neighbour.eastSouth = null;
        neighbour.south = null;
        neighbour.southWest = null;
        neighbour.west = null;
        neighbour.westNorth = null;

        if (col < 2) {
            neighbour.east = "cell" + row.toString() + (col + 1);
        }

        if (col > 0) {
            neighbour.west = "cell" + row.toString() + (col - 1);
        }

        if (row > 0) {
            neighbour.north = "cell" + (row - 1) + col.toString();
        }

        if (row < 2) {
            neighbour.south = "cell" + (row + 1) + col.toString();
        }

        if (row > 0 && col < 2) {
            neighbour.northEast = "cell" + (row - 1) + (col + 1);
        }

        if (row > 0 && col > 0) {
            neighbour.westNorth = "cell" + (row - 1) + (col - 1);
        }

        if (row < 2 && col < 2) {
            neighbour.eastSouth = "cell" + (row + 1) + (col + 1);
        }

        if (row < 2 && col > 0) {
            neighbour.southWest = "cell" + (row + 1) + (col - 1);
        }
        return neighbour;
    }
    this.handleCellClick = function(cellId) {
        var cell = this.getCellById(cellId);
        if (cell.playerId)
            return;

        this.setActivePlayer();
        cell.playerId = this.activePlayer;
        cell.setBgImage();

        if (this.getOccupiedCellCount() === 9) {
            var player1 = 'Player 1 = ';
            var player2 = 'Player 2 = ';

            for (i = 0; i < 9; i++) {
                if (this.cells[i].playerId === 1) {
                    player1 = player1 + this.cells[i].id + ", ";
                }
                if (this.cells[i].playerId === 2) {
                 player2 = player2 + this.cells[i].id + ", ";
                }
            }

            alert(player1 + "\n" + player2);
        }

    }
    this.setActivePlayer = function() {
        if (this.activePlayer === 0) {
            this.activePlayer = 1;
            return;
        }
        if (this.activePlayer === 1) {
            this.activePlayer = 2;
            return;
        }
        if (this.activePlayer === 2) {
            this.activePlayer = 1;
            return;
        }
    }
    this.getOccupiedCellCount = function() {
        var count = 0;
        for (var i = 0; i < this.cells.length; i++) {
            if (this.cells[i].playerId) {
                count++;
            }
        }
        return count;
    }
}

var game = new Game();
game.init();

function onCubeClick(e) {
    game.handleCellClick(e.target.id);
}





e.preventDefault();
e.stopPropagation();
$(".element").on("click", this.handleClick);