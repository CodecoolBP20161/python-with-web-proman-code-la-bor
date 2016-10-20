// Class responsible for "Save" click events -- saving and displaying //

var saveEventHandler = function(item){

    if(item === 'board'){
        var title = $("input[name=new_board_title]").val();
        if (title.length === 0) {
            $("#alert").html('Please add a title');
        } else {
            $('#alert').html("");
            $('#title').val('');
            var newBoard= createNewBoard(title);
            generalStorage.currentStorage.saveBoard(newBoard);
            DOMHandler.createDisplayableBoard(newBoard);
            DOMHandler.showCreateBoardField();
        }

    } else {
        var description = $("input[name=card-description]").val();
        if (description.length === 0) {
            $("#missing-description-alert").html('Please add a title');
        } else {
            $("#missing-description-alert").html("");
            $("#card-description").val("");
            var boardId = $(".card-button").data('board-id');
            var newCard = new Card(description, boardId);
            generalStorage.currentStorage.saveCard(newCard);
            DOMHandler.createDisplayableCard(newCard);
            }
        }
};
