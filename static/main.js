// Main page handler //

$(document).ready(function(){
    DOMHandler.showAllBoards();
    DOMHandler.showCardModal();
    deleteBoard();

    // Hiding the field responsible for "Saving/Cancelling"
    $('#board_create').hide();

    // Save board with pressing "Save" button or hitting Enter //
    $("#save-new-board-button").click(function() {
        saveEventHandler('board');
    });
    $('#title').keydown(function(key){
        if(key.which == 13){
            saveEventHandler('board');
         }
    });

    // Show-hide logic for "Create new board field" and "Saving/cancelling field"
    $('#button_create_board').click(function() {
        DOMHandler.hideCreateBoardField();
    });

    // Show-hide logic for "Cancel" buttons
    $('#button_cancel').click(function() {
        DOMHandler.showCreateBoardField();
    });
    
    // Save card with pressing "Save" button or hitting Enter //
    $('#create-card-button').click(function() {
        saveEventHandler('card');
    });

    $('#create-card-button').keydown(function(key){
        if(key.which == 13){
            saveEventHandler('card');
         }
    });

});

//Delete board logic, when click on the delete button
var deleteBoard = function() {
    $('.delete-button').on('click', function (event) {
        var board = $(event.target).parent();
        DOMHandler.deleteBoard(board.data('board-id'));
        board.remove()
    });
};
