var clickEventHandler = function(){
    $("#button").click(function() {
        var title = document.getElementById("title").value;
        if (title == "") {
            sweetalert("Please add a title");
            clickEventHandler()
        }
        else {
            var newBoard= createNewBoard(title);
            myLocalStorage.saveBoard(newBoard);
            DOMHandler.showBoard(newBoard);
        }
    })
};
