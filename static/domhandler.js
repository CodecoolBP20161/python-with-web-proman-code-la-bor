var DOMHandler = {
    showBoard: function(){
        var allBoardObjects = generalStorage.currentStorage.getBoards();
        document.getElementById("result").innerHTML = allBoardObjects;
    }
};
