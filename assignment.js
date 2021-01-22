// https://github.com/Omar-Meharab/assignment-3

// kilometerToMeter function for converting the given value from kilometer to meter.

function kilometerToMeter(distance) {
    if (distance > 0) {
        convertedDistance = distance * 1000;
        return convertedDistance;
    }
    else if (distance <= 0) {
        console.log("Distance can not be negative number/zero.");   // section for converting from kilometer to meter.
    }
    else {
        console.log("Enter a value to convert to meter.");    // section for unexpected input.
    }
}


// budgetCalculator function for calculating the budget needed for buying the given amount of watches, phones, and laptops.

function budgetCalculator(watch, phone, laptop) {
    if (watch <= 0 || phone <= 0 || laptop <= 0) {
        console.log("Please enter the amount of watch, phone and laptop you want to buy. Avoid using negative number/zero.");   // section for unexpected input.
    }
    else {
        totalBudget = watch * 50 + phone * 100 + laptop * 500;  // section for calculating budget.
        return totalBudget;
    }
}


// hotelCost rent for staying at a hotel for a given time.

function hotelCost(numberOfDays) {
    var totalRent = 0;
    if (numberOfDays <= 0) {
        return console.log("Please enter how long you will be staying. Avoid giving negative number/zero.");    // section for unexpected input.
    }
    if (numberOfDays <= 10) {
        totalRent = numberOfDays * 100;   //  section for calculating total rent for first 10 days.
    }
    else if (numberOfDays <= 20) {
        var firstPart = 10 * 100;
        var remainingDays = numberOfDays - 10;
        var secondpart = remainingDays * 80;
        totalRent = firstPart + secondpart;   // section for calculating total rent for first 20 days.
    }
    else {
        var firstPart = 10 * 100;
        var secondpart = 10 * 80;
        var remainingDays = numberOfDays - 20;
        var thirdPart = remainingDays * 50;
        totalRent = firstPart + secondpart + thirdPart;   // section for calculating total rent for more than 20 days.
    }
    return totalRent;
}


// megaFriend finding the biggest name in an array containing someones friends names.

var friendsNames = ["abrar", "sajjad", "adiba", "tanmoy"];  // array containing names.
var largest = friendsNames[0];
function megaFriend(friendsNames) {
    for (var i = 0; i < friendsNames.length; i++) {
        var element = friendsNames[i];
        if (element.length > largest.length) {
            largest = element;                             // section for finding the largest name.
        }
    }
    return largest;
}