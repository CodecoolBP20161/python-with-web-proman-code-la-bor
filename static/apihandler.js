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
        // var allBoards;
        $.ajax({
            url: 'api/boards',
            method: 'GET',
            // async: false,
            success: function(allBoards){
                JSON.parse(allBoards).forEach(function(element) {
                    var title = element.title;
                    DOMHandler.createDisplayableBoard(element, title);
                })
                // allBoards = allBoards;
                },
        })
        // return allBoards;
    }

}
