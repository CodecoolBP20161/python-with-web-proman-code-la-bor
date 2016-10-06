// Class responsible for displaying elements on the HTML Document Object Model //

var DOMHandler = {
    createDisplayableBoard(board, title) {
        var title = board.title;
        var $boardBox = ['<div class="col-sm-4 col-xs-6 col-md-3 col-lg-3">',
                         '<div class = "board">', title, '</div>']

        $('.boardBox').append($boardBox.join(''));
    },

    showAllBoards() {
        allBoards = generalStorage.currentStorage.getBoards()
        for(board in allBoards){
            var title = allBoards[board].title;
            this.createDisplayableBoard(allBoards[board], title);
            }
        }
    };
