// Class responsible for displaying elements on the HTML Document Object Model //

var DOMHandler = {
    createDisplayableBoard(board) {
        // var $boardBox = ['<div class="col-sm-4 col-xs-6 col-md-3 col-lg-3">',
        //                         '<a class="thumbnail fancybox" rel="ligthbox" href="http://placehold.it/300x320.png">',
        //                         '<img class="img-responsive img-rounded" alt="" src="https://blog.fogcreek.com/wp-content/uploads/2013/11/Taco-Headphones1.png" width="304" height="236" />',
        //                         '</a>',
        //                         '<div class="text-right"><small class="text-muted">',
        //                         board.title, '</small></div>',
        //                 '</div>'];

        var $boardBox = ['<div class="col-sm-4 col-xs-6 col-md-3 col-lg-3">',
                         '<div class = "board">',board.title, '</div>']

        $('.boardBox').append($boardBox.join(''));
        // var allTitles = [];
        // for(board in JSON.parse(localStorage.getItem('boards'))){
        //     allTitles.push(allBoards[board].title);
        // };
    }
};
