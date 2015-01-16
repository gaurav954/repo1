var currentImage = "url(circle.png)";
var nextImage = "url(cross.png)";




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
        for (i = 0; i < 9; i++) {
            if (this.playerId === 1) {
                $("#" + this.id).css("background-image", currentImage);
            }
            if (this.playerId === 2) {
                $("#" + this.id).css("background-image", nextImage);
            }
        }
    }
}





var Game = function() {
    this.cells = [];
    this.activePlayer = 0;
    this.getCellById = function(id) {
        for (i = 0; i < this.cells.length; i++) {
            if (this.cells[i].id === id) {
                return this.cells[i];
            }
        }
    }

    this.init = function() {
        for (var iRow = 0; iRow < 3; iRow++) {
            for (var iCol = 0; iCol < 3; iCol++) {
                var cell = new Cell;
                cell.row = iRow;
                cell.col = iCol;
                cell.id = "cell" + iRow + iCol;
                var neighbour = this.getNeighbourId(iRow, iCol);
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

    this.getNeighbourId = function(row, col) {
        var neighbour = {};
        neighbour.north = null;
        neighbour.northEast = null;
        neighbour.east = null;
        neighbour.eastSouth = null;
        neighbour.south = null;
        neighbour.southWest = null;
        neighbour.west = null;
        neighbour.westNorth = null;

        if (col < 2) { neighbour.east = "cell" + row.toString() + (col + 1); }
        if (col > 0) { neighbour.west = "cell" + row.toString() + (col - 1); }
        if (row > 0) { neighbour.north = "cell" + (row - 1) + col.toString(); }
        if (row < 2) { neighbour.south = "cell" + (row + 1) + col.toString(); }
        if (row > 0 && col < 2) { neighbour.northEast = "cell" + (row - 1) + (col + 1); }
        if (row > 0 && col > 0) { neighbour.westNorth = "cell" + (row - 1) + (col - 1); }
        if (row < 2 && col < 2) { neighbour.eastSouth = "cell" + (row + 1) + (col + 1); }
        if (row < 2 && col > 0) { neighbour.southWest = "cell" + (row + 1) + (col - 1); }
        return neighbour;
    }


    this.handleCellClick = function(cellId) {
        var cell = this.getCellById(cellId);
        if (cell.playerId) {
            return;
        }

        this.setActivePlayer();
        cell.playerId = this.activePlayer;
        cell.setBgImage();
        if (this.is2SE(cell.row, cell.col)) {
            var msg = "Winner Player Id = " + cell.playerId;
            alert(msg);
            return;
        }

        if (this.is1NW1SE(cell.row, cell.col)) {
            var msg = "Winner Player Id = " + cell.playerId;
            alert(msg);
            return;
        }

        if (this.is2NW(cell.row, cell.col)) {
            var msg = "Winner Player Id = " + cell.playerId;
            alert(msg);
            return;
        }

        if (this.is2E(cell.row, cell.col)) {
            var msg = "Winner Player Id = " + cell.playerId;
            alert(msg);
            return;
        }

        if (this.is1W1E(cell.row, cell.col)) {
            var msg = "Winner Player Id = " + cell.playerId;
            alert(msg);
            return;
        }

        if (this.is2W(cell.row, cell.col)) {
            var msg = "Winner Player Id = " + cell.playerId;
            alert(msg);
            return;
        }

        if (this.is2S(cell.row, cell.col)) {
            var msg = "Winner Player Id = " + cell.playerId;
            alert(msg);
            return;
        }

        if (this.is1N1S(cell.row, cell.col)) {
            var msg = "Winner Player Id = " + cell.playerId;
            alert(msg);
            return;
        }

        if (this.is2N(cell.row, cell.col)) {
            var msg = "Winner Player Id = " + cell.playerId;
            alert(msg);
            return;
        }

        if (this.is2SW(cell.row, cell.col)) {
            var msg = "Winner Player Id = " + cell.playerId;
            alert(msg);
            return;
        }

        if (this.is1NE1SW(cell.row, cell.col)) {
            var msg = "Winner Player Id = " + cell.playerId;
            alert(msg);
            return;
        }

        if (this.is2NE(cell.row, cell.col)) {
            var msg = "Winner Player Id = " + cell.playerId;
            alert(msg);
            return;
        }
       

    }

    this.getCellCount = function() {
        var count = 0;
        for (i = 0; i < this.cells.length; i++) {
            if (this.cells[i].playerId) {
                count++;
            }
        }
        return count;
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

    this.is2SE = function(row, col) {
        var c = this.getCellById("cell" + row + col);
        var p = c.playerId;
        var c1 = c.eastSouth;
        if (c1) {
            var p1 = this.getCellById(c1).playerId;
            if (p1 === p) {
                var c2 = this.getCellById(c1).eastSouth;
                if (c2) {
                    var p2 = this.getCellById(c2).playerId;
                    if (p1 === p2) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    this.is1NW1SE = function(row, col) {
        var c = this.getCellById("cell" + row + col);
        var p = c.playerId;
        var c1, c2;
        if (c1 = c.eastSouth) {
            var p1 = this.getCellById(c1).playerId;
            if (p === p1) {
                if (c2 = c.westNorth) {
                    var p2 = this.getCellById(c2).playerId;
                    if (p === p2) {
                        return true;
                    } return false;
                } return false;

            } return false;
        }
        return false;
    }

    this.is2NW = function(row, col) {
        var c = this.getCellById("cell" + row + col);
        var p = c.playerId;
        var c1 = c.westNorth;
        if (c1) {
            var p1 = this.getCellById(c1).playerId;
            if (p1 === p) {
                var c2 = this.getCellById(c1).westNorth;
                if (c2) {
                    var p2 = this.getCellById(c2).playerId;
                    if (p1 === p2) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    this.is2E = function(row, col) {
        var c = this.getCellById("cell" + row + col);
        var p = c.playerId;
        var c1 = c.east;
        if (c1) {
            var p1 = this.getCellById(c1).playerId;
            if (p1 === p) {
                var c2 = this.getCellById(c1).east;
                if (c2) {
                    var p2 = this.getCellById(c2).playerId;
                    if (p1 === p2) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    this.is1W1E = function(row, col) {
        var c = this.getCellById("cell" + row + col);
        var p = c.playerId;
        var c1, c2;
        if (c1 = c.west) {
            var p1 = this.getCellById(c1).playerId;
            if (p === p1) {
                if (c2 = c.east) {
                    var p2 = this.getCellById(c2).playerId;
                    if (p === p2) {
                        return true;
                    } return false;
                } return false;

            } return false;
        }
        return false;
    }

    this.is2W = function(row, col) {
        var c = this.getCellById("cell" + row + col);
        var p = c.playerId;
        var c1 = c.west;
        if (c1) {
            var p1 = this.getCellById(c1).playerId;
            if (p1 === p) {
                var c2 = this.getCellById(c1).west;
                if (c2) {
                    var p2 = this.getCellById(c2).playerId;
                    if (p1 === p2) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    this.is2S = function(row, col) {
        var c = this.getCellById("cell" + row + col);
        var p = c.playerId;
        var c1 = c.south;
        if (c1) {
            var p1 = this.getCellById(c1).playerId;
            if (p1 === p) {
                var c2 = this.getCellById(c1).south;
                if (c2) {
                    var p2 = this.getCellById(c2).playerId;
                    if (p1 === p2) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    this.is1N1S = function(row, col) {
        var c = this.getCellById("cell" + row + col);
        var p = c.playerId;
        var c1, c2;
        if (c1 = c.north) {
            var p1 = this.getCellById(c1).playerId;
            if (p === p1) {
                if (c2 = c.south) {
                    var p2 = this.getCellById(c2).playerId;
                    if (p === p2) {
                        return true;
                    } return false;
                } return false;

            } return false;
        }
    }

    this.is2N = function(row, col) {
        var c = this.getCellById("cell" + row + col);
        var p = c.playerId;
        var c1 = c.north;
        if (c1) {
            var p1 = this.getCellById(c1).playerId;
            if (p1 === p) {
                var c2 = this.getCellById(c1).north;
                if (c2) {
                    var p2 = this.getCellById(c2).playerId;
                    if (p1 === p2) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    this.is2SW = function(row, col) {
        var c = this.getCellById("cell" + row + col);
        var p = c.playerId;
        var c1 = c.southWest;
        if (c1) {
            var p1 = this.getCellById(c1).playerId;
            if (p1 === p) {
                var c2 = this.getCellById(c1).southWest;
                if (c2) {
                    var p2 = this.getCellById(c2).playerId;
                    if (p1 === p2) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    this.is1NE1SW = function(row, col) {
        var c = this.getCellById("cell" + row + col);
        var p = c.playerId;
        var c1, c2;
        if (c1 = c.northEast) {
            var p1 = this.getCellById(c1).playerId;
            if (p === p1) {
                if (c2 = c.southWest) {
                    var p2 = this.getCellById(c2).playerId;
                    if (p === p2) {
                        return true;
                    } return false;
                } return false;

            } return false;
        }
    }

    this.is2NE = function(row, col) {
        var c = this.getCellById("cell" + row + col);
        var p = c.playerId;
        var c1 = c.northEast;
        if (c1) {
            var p1 = this.getCellById(c1).playerId;
            if (p1 === p) {
                var c2 = this.getCellById(c1).northEast;
                if (c2) {
                    var p2 = this.getCellById(c2).playerId;
                    if (p1 === p2) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

}
var game = new Game();
game.init();

function onCubeClick(e) {
    game.handleCellClick(e.target.id);
} 

function onDocReady() {
    $(".cube").on("click", onCubeClick);
}

$(document).ready(onDocReady);
