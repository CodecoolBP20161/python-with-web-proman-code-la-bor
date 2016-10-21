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
        var allBoards = $.ajax({
            url: 'api/boards',
            method: 'GET',
            async: false
        });
        return allBoards.responseText;
    },

    this.deleteBoard = function(board_id) {
        $.ajax({
            url: '/api/boards/' + board_id,
            type: "DELETE",
            dataType: 'json'
        });
    },

    this.saveCard = function(card) {
        $.ajax({
            url: '/api/' + card.board_id + '/cards',
            method: 'PUT',
            dataType: 'json',
            data: JSON.stringify(card)
        });
    },

    this.getCards = function(board_id) {
        var allCards = $.ajax({
            url: '/api/' + board_id + '/cards',
            method: 'GET',
            async: false
        });
        return allCards.responseText;
    }

};
