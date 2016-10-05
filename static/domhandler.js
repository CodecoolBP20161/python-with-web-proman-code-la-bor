var DOMHandler = {
    showBoard: function(board){
        var board = JSON.parse(localStorage.getItem(board.board_id))
        document.getElementById("result").innerHTML = board.title;
    }
}
