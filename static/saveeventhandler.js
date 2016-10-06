// Class responsible for "Save" click events -- saving and displaying //

var saveEventHandler = function(){
       var title = $("input[name=new_board_title]").val();
       if (title === "") {
           $("#alert").append("Please add a title");
       } else {
           $("#alert").remove();
           $('.title').val('');
           var newBoard= createNewBoard(title);
           generalStorage.currentStorage.saveBoard(newBoard);
           DOMHandler.createDisplayableBoard(newBoard);
       }
   };
