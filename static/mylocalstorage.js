var myLocalStorage = {
    saveBoard: function(board) {
        localStorage.setItem( board.board_id, JSON.stringify(board) );
}}
