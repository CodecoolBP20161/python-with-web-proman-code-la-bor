var DOMHandler = {
    showBoard: function(board){
        var board = JSON.parse(localStorage.getItem('board'))
        document.getElementById("result").innerHTML = board.title;
    }
}
