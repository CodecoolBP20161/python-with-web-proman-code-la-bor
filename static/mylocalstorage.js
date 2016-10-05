var myLocalStorage = {
    saveBoard: function(board) {
        localStorage.setItem(board.board_id, JSON.stringify(board));
    },

    getBoards: function() {
        var boardList = [],
            boardIdKeys = Object.keys(localStorage),
            allBoards = boardIdKeys.length;

        while ( allBoards-- ) {
            boardList.push(localStorage.getItem(boardIdKeys[allBoards]));
        }
        return boardList;
    }
}
