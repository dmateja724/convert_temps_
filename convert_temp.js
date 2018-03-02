"use strict";
var $ = function(id) { 
    return document.getElementById(id); 
};

// self explanitory 
var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

// celsius to fahrenheit radio button function
var toFahrenheit = function() {
    $("degree_label_1").firstChild.nodeValue = "Enter C degrees:";
    $("degree_label_2").firstChild.nodeValue = "Degrees Fahrenheit:";
    clearTextBoxes();
    $("degrees_entered").focus();
};
// fahrenheit to celsius radio button function  
var toCelsius = function() {
    $("degree_label_1").firstChild.nodeValue = "Enter F degrees:";
    $("degree_label_2").firstChild.nodeValue = "Degrees Celsius:";
    clearTextBoxes();
    $("degrees_entered").focus();
};

// handles the conversion of temperatures with vallidation
var convertTemp = function() {
    var degEnt = $("degrees_entered").value;
    
    if (isNaN(degEnt) || degEnt == "") {
        alert("You must enter a valid number for degrees.");
        $("degrees_entered").focus();
        clearTextBoxes();
    } else if ($("to_celsius").checked) {
        var temp = parseInt((degEnt - 32) * (5/9));
        $("degrees_computed").value = temp;
    } else if ($("to_fahrenheit").checked) {
        temp = parseInt((degEnt * (9/5)) + 32);
        $("degrees_computed").value = temp;
    }
};

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
    
    //allows user to hit enter/return key to calculate the conversion vs clicking the convert button
    $("degrees_entered").addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            convertTemp();
    }
});
};



