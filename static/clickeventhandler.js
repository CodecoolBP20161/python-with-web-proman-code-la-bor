// Class responsible for handling click events //

var clickEventHandler = function(){
    
    $("#button").click(function() {
       var title = $("input[name=new_board_title]").val();
       if (title === "") {
           
           $("#alert").replaceWith("Please add a title");
       } else {
           $("#alert").remove();
           $('.title').val('');
           var newBoard= createNewBoard(title);
           generalStorage.currentStorage.saveBoard(newBoard);
           DOMHandler.createDisplayableBoard(newBoard);
       }
   });
};
