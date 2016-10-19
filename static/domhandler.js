// Class responsible for displaying elements on the HTML Document Object Model //

var DOMHandler = {

    // logic for displaying one board
    createDisplayableBoard(board, title) {
        var title = board.title;
        var $boardBox = ['<div class="col-sm-4 col-xs-6 col-md-3 col-lg-3">',
                         '<div class = "board">', title, '</div>'];

        $('.boardBox').append($boardBox.join(''));
    },

    // method to display all the boards
    showAllBoards() {
        generalStorage.currentStorage.getBoards();
        // allBoards_J = JSON.parse(allBoards);
        // allBoards_J.forEach(function(element) {
        //     var title = element.title;
        //     DOMHandler.createDisplayableBoard(element, title);
        // })
        },

    // show-hide function for "Create new board field" and "Saving/cancelling field"
    showCreateBoardField() {
        $('#board_create').hide();
        $('#def_board').show();
    },

    hideCreateBoardField() {
        $('#def_board').hide();
        $('#board_create').show();
    }

};
