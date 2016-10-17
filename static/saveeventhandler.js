// Class responsible for "Save" click events -- saving and displaying //

var saveEventHandler = function(){
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
};
