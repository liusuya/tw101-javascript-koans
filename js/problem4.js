"use strict";

/*
 Problem 4:

 Background:
 At present, currency notes in India are issued in the denomination of Rs.5, Rs.10, Rs.20, Rs.50, Rs.100, Rs.500 and
 Rs.1000.
 http://www.rbi.org.in/currency/faqs.html

 Problem statement:
 Write a program that will enable counting of money given in the form of Indian currency notes. The program must take
 a variable number of arguments. These arguments must be summed and the total must be displayed. For any input number
 that does not match a valid currency denomination, ignore the value and stop counting further, displaying the sum
 counted so far.

 Examples:

 Given Rs 10, 20, 100 notes
 When I count the money
 Then my total is Rs 130

 Given Rs 20, 50, 10, 20, 13, 500 notes
 When I count the money
 Then my total is Rs 100

*/

// Write your JavaScript here


function isValidCurrency(amount) {
    var validDenominations = [5, 10, 20, 50, 100, 500, 1000];
    if (validDenominations.indexOf(amount) > -1)
        return true;
    return false;
}

function formattedNote(amount, argIndex) {
    var formattedAmount = amount;

    if (argIndex > 0) //if is the first in the list, don't add comma
        formattedAmount = ", " + formattedAmount;
    return formattedAmount;
}

function changeElementText(element, answer) {
    $(element).text(answer);
}

function countNotes() {

    var allNotes = "";
    var total = 0;
    var argLen = arguments.length;
    var continueAdding = true;
    var curArg;

    if (argLen == 0)
        allNotes = "no ";

    for (var argIndex = 0; argIndex < argLen; argIndex++) {
         curArg = arguments[argIndex];
        allNotes += formattedNote(curArg, argIndex);
        if (continueAdding) {
            if(isValidCurrency(curArg)) {
                total += curArg;
            }
            else {
                continueAdding = false;
            }
        }
    }

    changeElementText("#allNotes", allNotes);
    changeElementText("#total", total);
}