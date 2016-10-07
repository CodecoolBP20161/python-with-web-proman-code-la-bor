// Main page handler //

// show-hide function for "Create new board field" and "Saving/cancelling field"
var showCreateBoard= function() {
    $('#board_create').hide();
    $('#def_board').show();
};


$(document).ready(function(){
    DOMHandler.showAllBoards();

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
    $('#board_create').hide();
    $('#button_create_board').click(function() {
        $('#def_board').hide();
        $('#board_create').show();
    });

    // Show-hide logic for "Cancel" buttons
    $('#button_cancel').click(function() {
        showCreateBoard();
    });
});
