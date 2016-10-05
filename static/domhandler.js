var DOMHandler = {
    showBoard: function(){
        var allBoardObjects = myLocalStorage.getBoards();
        document.getElementById("result").innerHTML = allBoardObjects;
    }
};
