function myLocalStorage () {
    this.saveBoard = function(board) {
        var currentBoards = this.getBoards();
        currentBoards.push(board);
        localStorage.setItem('boards', JSON.stringify(currentBoards));
    };

    this.getBoards = function() {
        var currentBoards = JSON.parse(localStorage.getItem('boards'));
        if(currentBoards === null){
            currentBoards = [];
        }
        return currentBoards;
    };
}
