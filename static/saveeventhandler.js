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
        var description = $("input[name="card-description"").val();
        if (description.length === 0) {
            $("#missing-description-alert").html('Please add a title');
        } else {
            $("#missing-description-alert").html("");
            $("#description").val("");
            var newCard = createNewCard(description);
            generalStorage.currentStorage.saveCard(newCard);
            DOMHandler.createDisplayableCard(newCard);
        }

    }
};
