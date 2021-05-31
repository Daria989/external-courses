function Sweets(weight) {
    this.weight = weight;
};

let marshmallow = new Sweets(255);

function Candy(weight, typeOfFilling) {
    Sweets.apply(this, arguments);
    this.typeOfFilling = typeOfFilling;
};

let birdMilk = new Candy(20, 'souffle');
let southNight = new Candy(14, 'marmalade');
let truffles = new Candy(15, 'chocolateCream');
let redRidingHood = new Candy(14, 'waffles');

function Chocolate(weight, percentageOfChocolate) {
    Sweets.apply(this, arguments);
    this.percentageOfChocolate = percentageOfChocolate; 
};

let alenka = new Chocolate(100, 25);
let Babaevsky = new Chocolate(100, 75);
let ozera = new Chocolate(90, 38);
let ritterSport = new Chocolate(100, 30);

function ChocolateWithSurprise(weight, percentageOfChocolate) {
    Chocolate.apply(this, arguments); 
    this.rattle = function() {
        console.log('knock');
    }
};

let kinderSurprise = new ChocolateWithSurprise(20, 15);
let chupaChupsBall = new ChocolateWithSurprise(20, 15);

const gift = [];
gift.push(marshmallow, birdMilk, southNight, truffles, redRidingHood, alenka, Babaevsky, ozera, ritterSport, kinderSurprise, chupaChupsBall);

function calcWeightGift(present) {
let sum = 0;
    for (value of present) {
        sum += value.weight; 
    };
    return sum;
};

calcWeightGift(gift);

function sortByWeight(present) {
    return present.sort(function(a, b) { 
        return a.weight > b.weight ? -1 : 1;
    });
}

sortByWeight(gift);

function findName(present, name) {
    return present[present.indexOf(name)];
}

findName(gift, alenka);
