"use strict";

const $ = selector => document.querySelector(selector);

function processEntries() {
    var subtotal = parseFloat($("#subtotal").value);
    var taxRate = parseFloat($("#tax_rate").value);
    //validation
    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert("Subtotal must be > 0 and < 10000");
        $("#subtotal").focus();
        return;
    }
    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert("Tax Rate must be > 0 and < 12");
        $("#tax_rate").focus();
        return;
    }

    //calculate S.T. + total
    var salesTax = (subtotal * (taxRate / 100));
    var total = subtotal + salesTax;

    //display for user
    $("#sales_tax").value = salesTax.toFixed(2);
    $("#total").value = total.toFixed(2);
    $("#subtotal").focus();
}

//clear fields on-click, reset focus
function clearEntries() {
    $("#subtotal").value = "";
    $("#tax_rate").value = "";
    $("#sales_tax").value = "";
    $("#total").value = "";
    $("#subtotal").focus();
}

function clearSubtotal() {
    $("#subtotal").value = "";
}

function clearTaxRate() {
    $("#tax_rate").value = "";
}

//E.L.'s
document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#subtotal").addEventListener("click", clearSubtotal);
    $("#tax_rate").addEventListener("click", clearTaxRate);
    $("#subtotal").focus();
});