// Main page handler //

$(document).ready(function(){
    DOMHandler.showAllBoards();

    // Save board with pressing "Save" button or hitting Enter //
    $("#save-new-board-button").click(function() {
        saveEventHandler();
    });
    $('#title').keydown(function(key){
        if(key.which == 13){
            saveEventHandler();
            $('#board_create').hide();
            $('#def_board').show();
         }
    });

    // Show-hide logic for "Create new board field" and "Saving/cancelling field"
    $('#board_create').hide();
    $('#button_create_board').click(function() {
        $('#def_board').hide();
        $('#board_create').show();
    });

    // Show-hide logic for "Save" and "Cancel" buttons
    $('#button_cancel, #save-new-board-button').click(function() {
        $('#board_create').hide();
        $('#def_board').show();
    });
});
