var DOMHandler = {
    showBoard: function(){

        var allBoardObjects = generalStorage.currentStorage.getBoards();
        document.getElementById("result").innerHTML = allBoardObjects;
    },

    createDisplayableBoard(board) {
        var $boardBox = ['<div class="col-sm-4 col-xs-6 col-md-3 col-lg-3">',
                                '<a class="thumbnail fancybox" rel="ligthbox" href="http://placehold.it/300x320.png">',
                                '<img class="img-rounded" alt="" src="https://blog.fogcreek.com/wp-content/uploads/2013/11/Taco-Headphones1.png" width="304" height="236" />',
                                '</a>',
                                '<div class="text-right"><small class="text-muted">',
                                board.title, '</small></div>',
                        '</div>'];
        $('.boardBox').append($boardBox.join(''));
        // var allTitles = [];
        // for(board in JSON.parse(localStorage.getItem('boards'))){
        //     allTitles.push(allBoards[board].title);
        // };
    }
};
