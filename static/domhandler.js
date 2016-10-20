// Class responsible for displaying elements on the HTML Document Object Model //

var DOMHandler = {

    // logic for displaying one board
    createDisplayableBoard: function(board, title) {
        var title = board.title;
        var $boardBox = ['<div class="col-sm-4 col-xs-6 col-md-3 col-lg-3">',
                         '<div class = "board">', title,
                         '<div>',
                         '<input type="button" class="delete-button" value="X">',
                         '<input type="button" class="card-button" value="Cards">',
                         '</div>',
                         '</div>',];

        $('.boardBox').append($boardBox.join(''));
    },

    // method to display all the boards
    showAllBoards: function() {
        var getBoards = generalStorage.currentStorage.getBoards();
        var allBoards = JSON.parse(getBoards);
        allBoards.forEach(function(element) {
            var title = element.title;
            DOMHandler.createDisplayableBoard(element, title);
        })
        },

    // show-hide function for "Create new board field" and "Saving/cancelling field"
    showCreateBoardField: function() {
        $('#board_create').hide();
        $('#def_board').show();
    },

    hideCreateBoardField: function() {
        $('#def_board').hide();
        $('#board_create').show();
    }

};
