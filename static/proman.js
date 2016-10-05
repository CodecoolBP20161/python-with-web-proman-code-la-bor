$(document).ready(function() {
    $('#board_create').hide();
    $('#button_create_board').click(function() {
        $('#def_board').hide();
        $('#board_create').show();
    })
});

$(document).ready(function() {
    $('#button_cancel').click(function() {
        $('#board_create').hide();
        $('#def_board').show();
    })
});