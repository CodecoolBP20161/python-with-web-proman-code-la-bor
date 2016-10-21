// State pattern for implementing storage //

var generalStorage = {

    currentStorage: new APIHandler(),

    saveBoard: function() {
        currentStorage.saveBoard(board);
    },

    getBoards: function() {
        currentStorage.getBoards();
    },

    deleteBoard: function(board) {
        currentStorage.deleteBoard();
    },
    
    saveCard: function() {
        currentStorage.saveCard(card);
    },

    getCards: function() {
        currentStorage.getCards();
    }
};
