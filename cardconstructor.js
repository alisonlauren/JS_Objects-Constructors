function Card(point, suit) {
    this.point = point;
    this.suit = suit;
}

const myCard1 = new Card(5, "clubs")
const myCard2 = new Card(7, "spades")




console.log(myCard1.point);
console.log(myCard1.suit);
console.log(myCard2.point);
console.log(myCard2.suit);


Card.prototype.getImageUrl = function () {
    return (`images/${this.point}_of_${this.suit}`)
}

