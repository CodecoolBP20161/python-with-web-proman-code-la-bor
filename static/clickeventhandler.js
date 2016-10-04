var clickEventHandler = function(){
    $("#button").click(function() {
        var title = document.getElementById("title").value;
        var newBoard= createNewBoard(title);
        myLocalStorage.saveBoard(newBoard);
        DOMHandler.showBoard(newBoard);
    })
};
