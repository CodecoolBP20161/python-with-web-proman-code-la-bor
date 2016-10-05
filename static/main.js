// dom handling stuff (document...)
$(document).ready(function(){
    clickEventHandler();
     $('#board_create').hide();
    $('#button_create_board').click(function() {
        $('#def_board').hide();
        $('#board_create').show();
    });
    $('#button_cancel').click(function() {
        $('#board_create').hide();
        $('#def_board').show();
    })
});
