// Class responsible for displaying elements on the HTML Document Object Model //

var DOMHandler = {
    createDisplayableBoard(board, title) {
        // var $boardBox = ['<div class="col-sm-4 col-xs-6 col-md-3 col-lg-3">',
        //                         '<a class="thumbnail fancybox" rel="ligthbox" href="http://placehold.it/300x320.png">',
        //                         '<img class="img-responsive img-rounded" alt="" src="https://blog.fogcreek.com/wp-content/uploads/2013/11/Taco-Headphones1.png" width="304" height="236" />',
        //                         '</a>',
        //                         '<div class="text-right"><small class="text-muted">',
        //                         board.title, '</small></div>',
        //                 '</div>'];
        var title = board.title;
        var $boardBox = ['<div class="col-sm-4 col-xs-6 col-md-3 col-lg-3">',
                         '<div class = "board">', title, '</div>']

        $('.boardBox').append($boardBox.join(''));
    },

    showAllBoards() {
        allBoards = generalStorage.currentStorage.getBoards()
        for(board in allBoards){
            var title = allBoards[board].title;
            this.createDisplayableBoard(board, title);
            }
        }
    };
