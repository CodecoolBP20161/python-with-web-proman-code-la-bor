// State pattern for implementing storage //

var generalStorage = {

    currentStorage: new APIHandler(),

    saveBoard: function() {
        currentStorage.saveBoard(board);
    },

    getBoard: function() {
        currentStorage.getBoard();
    }
};
