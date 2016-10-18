function APIHandler (){

    this.saveBoard = function(board) {
        $.ajax({
            url: '/api/boards',
            method: 'POST',
            dataType: 'json',
            data: JSON.stringify(board)
        });
    },

    this.getBoards = function() {
    }

}
