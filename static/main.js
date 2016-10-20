// Main page handler //

$(document).ready(function(){
    DOMHandler.showAllBoards();
    DOMHandler.showCardModal();

    // Hiding the field responsible for "Saving/Cancelling"
    $('#board_create').hide();

    // Save board with pressing "Save" button or hitting Enter //
    $("#save-new-board-button").click(function() {
        saveEventHandler();
    });
    $('#title').keydown(function(key){
        if(key.which == 13){
            saveEventHandler();
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
});
