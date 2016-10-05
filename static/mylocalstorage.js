var myLocalStorage = {
    saveBoard: function(board) {
        localStorage.setItem( 'board', JSON.stringify(board) );
}}
