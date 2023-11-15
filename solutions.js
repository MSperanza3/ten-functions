"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
 // Question 1
function isTrue(answer1) {
    return answer1 === true
}
// Question 2
function isFalse(answer2) {
    return answer2 === false
}
// Question 3
function not(answer3) {
    return !answer3;
}
// Question 4
function addOne(answer4) {
    if (answer4 === Infinity) {
        return Infinity
    } else {
        return parseInt(answer4) + 1
    }
}
// Question 5
function isEven(answer5) {
    if (answer5 === false) {
        return false;
    }
    return answer5 % 2 === 0;
}
// Question 6
function isIdentical(answer6, answer66) {
    return answer6 === answer66;
}
// Question 7
function isEqual(answer7, answer77) {
    return answer7 == answer77
}
// Question 8
function or(answer8, answer88) {
    return answer8 || answer88
}
// Question 9
function and(answer9, answer99) {
    return answer9 && answer99
}
// Question 10
function concat(answer10, answer101) {
    return answer10.toString() + answer101.toString()
}


