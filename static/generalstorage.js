var myLocalStorage = function (){
    this.saveBoard = function (){
        prompt("save?");
        console.log("save2?");
    }
    this.getBoard = function () {
        prompt("get?");
        console.log("get?2");
    }
};

var GeneralStorage = function () {

    var currentStorage = myLocalStorage()

    genSaveBoard = function() {
        currentStorage.saveBoard();
    }

    genGetBoard = function(){
        currentStorage.getBoard();
    }
}
