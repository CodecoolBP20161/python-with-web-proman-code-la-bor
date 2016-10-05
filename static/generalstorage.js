var generalStorage = {

    currentStorage: new myLocalStorage(),

    saveBoard: function() {
        currentStorage.saveBoard(board);
    },

    getBoard: function() {
        currentStorage.getBoard();
    }
};
