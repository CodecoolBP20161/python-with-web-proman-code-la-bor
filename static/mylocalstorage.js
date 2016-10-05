var myLocalStorage = {
    saveBoard: function(board) {
        var currentBoards = this.getBoards();
        currentBoards.push(board);
        localStorage.setItem('boards', JSON.stringify(currentBoards));
    },
    
    getBoards: function() {
        var currentBoards = JSON.parse(localStorage.getItem('boards'));
        if(currentBoards == null){
            currentBoards = [];
        }
        return currentBoards;
    }
};
