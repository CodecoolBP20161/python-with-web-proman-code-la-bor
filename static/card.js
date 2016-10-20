// Constructor class for Card objects
var Card = function(description) {
    this.description = description;
};

var createNewCard = function(description){
    var newCard = new Card(description);
    return newCard;
};
