// Class responsible for displaying elements on the HTML Document Object Model //

var DOMHandler = {

    // logic for displaying one board
    createDisplayableBoard: function(board, title) {
        var title = board.title;
        var $boardBox = ['<div class="col-sm-4 col-xs-6 col-md-3 col-lg-3">',
                         '<div class = "board" data-board-id="'+ board.board_id +'">',
                         '<input type="button" class="delete-button" value="X">',
                         '<div>',
                         title,
                         '</div>',
                         '<input type="button" class="card-button" value="Cards" data-toggle="modal" data-target="#cardsModal"',
                         'data-whatever="' + title + '"',
                         'data-board-id="' + board.board_id + '">',
                         '</div>'];

        $('.boardBox').append($boardBox.join(''));
        generalStorage.currentStorage.deleteBoard()
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
    },

    // modal for cards
    showCardModal: function() {
        $('#cardsModal').on('show.bs.modal', function( event ) {
            var boardName = $(event.relatedTarget).data('whatever');
            var boardId = $(event.relatedTarget).data('board-id');
            DOMHandler.showAllCards(boardId);
            $(this).find('.modal-title').text("Cards for " + boardName);
        });
    },


    // logic for displaying one card
    createDisplayableCard: function(card) {
        $cardItem = ['<div class="item  col-xs-4 col-lg-4">',
                     '<div class = "card">',
                     card.description,
                     '</div>'];

        $('.card-item').append($cardItem.join(''));
    },

    // method to display all the cards
    showAllCards: function(board_id) {
        var getCards = generalStorage.currentStorage.getCards(board_id);
        var allCards = JSON.parse(getCards);
        allCards.forEach(function(element) {
            DOMHandler.createDisplayableCard(element);
        })
    },

    //Delete board logic, when click on the delete button
    deleteBoard: function() {
        $('.delete-button').on('click', function (event) {
            var board = $(event.target).parent();
            generalStorage.currentStorage.deleteBoard(board.data('board-id'));
            board.remove();
            // document.location.reload()
        });
    }

};
