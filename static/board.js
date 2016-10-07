var Board = function(title, board_id) {
    this.title = title;
    this.board_id = board_id;
};

var createNewBoard = function(title){
    var board_id = Math.floor(Math.random()* 10000);
    var newBoard = new Board(title, board_id);
    return newBoard;
};
