var clickEventHandler = function(){
   $("#button").click(function() {
       var title = $("input[name=title]").val();
       if (title === "") {
           $("#alert").append("Please add a title");
       }
       else
       {
           $("#alert").remove();
           var newBoard= createNewBoard(title);
           generalStorage.currentStorage.saveBoard(newBoard);
           DOMHandler.createDisplayableBoard(newBoard);
       }
   });
};
