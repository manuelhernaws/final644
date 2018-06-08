/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

//VARIABLES FOR USER INPUTS
var userName =        $("usr");
var lastName =        $("lastName");
var userEmail =       $("email");
var city =            $("city");
var zipCode =         $("zip");
var phone =           $("phone");
var otherChoice =     $("otherChoice");
var address =         $("address");
var building =        $("unitNumber");


// Validation  
//REGEX CODE
var regex1, emailformat, cityformat, zipcodeFormat, phoneFormat;
regex1 =         /[^a-z|^A-Z]/;
emailformat =    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
cityformat =     /([A-Za-z]+(?: [A-Za-z]+)*),? ([A-Za-z]{2})/;
zipcodeFormat =  /^\d{5}(-\d{4})?$/;
phoneFormat   =  /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    
// VALIDATION AND CHECKMARKS 
function validate() {
	"use strict";
    var nameResult =     regex1.test(userName.value) === true;
    var emailResult =    emailformat.test(userEmail.value) === true;
    var cityResult =     cityformat.test(city.value) === true;
    var zipResult =      zipcodeFormat.test(zipCode.value) === true;
    var phoneResult =     phoneFormat.test(phone.value) === true;
	//VARIABLES TO GET THE VALUES FROM THE ADDRESS TYPE DROPDOWN MENU
	var house =           $("addressDrop").value === "house";
	var apartment =       $("addressDrop").value === "apartment";
	var business =        $("addressDrop").value === "business";
	var campus =          $("addressDrop").value === "campus";
	var hotel  =          $("addressDrop").value === "hotel";
	var dorm  =           $("addressDrop").value === "dorm";
	var other =           $("addressDrop").value === "other";
	var ak     =          $("stateDrop").value === "alaska";
	var cali  =           $("stateDrop").value === "california";
    
	//NAME VALIDATION
    if (nameResult) {
		$("errors").innerHTML = "&#10006;";
		$("errors").style.color = "darkred";
    } else {
		$("errors").innerHTML = "&#x2714;";
		$("errors").style.color = "green";
        $("top").innerHTML = "Name: " + userName.value;
    }
	//LASTNAME VALIDATION
    if (lastName.value === '') {
        $("errorL").innerHTML = "&#10006;";
        return false;
    } else {
        $("errorL").style.display = "none";
		$("errorL2").innerHTML = "&#x2714;";
        $("top").innerHTML += "<br>Last Name: " + lastName.value;
    }
	//PHONE VALIDATION
    if (phoneResult) {
        $("errorP2").innerHTML = "&#x2714;";
		$("errorP").style.display = "none";
        $("top").innerHTML += "<br>Phone: " + phone.value;
    } else {
		$("errorP").innerHTML = "&#10006;";
    }
	//EMAIL VALIDATION
    if (emailResult) {
		$("errorE").style.display = "none";
		$("errorE2").innerHTML = "&#x2714;";
        $("top").innerHTML += "<br>Email: " + userEmail.value;
    } else {
        $("errorE").innerHTML = "&#10006;";
    }
	//ADDRESS TYPE CHOICE DROPDOWN MENU 
	if (house) {
		$("top").innerHTML += "<br>Address Type: House";
	} else if (apartment) {
		$("top").innerHTML += "<br>Address Type: Apartment";
	} else if (business) {
		$("top").innerHTML += "<br>Address Type: Business";
	} else if (campus) {
		$("top").innerHTML += "<br>Address Type: Campus";
	} else if (hotel) {
		$("top").innerHTML += "<br>Address Type: Hotel";
	} else if (dorm) {
		$("top").innerHTML += "<br>Address Type: Dorm";
	} else if (other) {
		$("top").innerHTML += "<br>Address Type: " + otherChoice.value;
	}
	//ADDRESS VALIDATION
    if (address.value === '') {
		$("errorA").innerHTML = "&#10006;";
        return false;
	} else {
		$("errorA").style.display = "none";
		$("errorA2").innerHTML = "&#x2714;";
        $("top").innerHTML += "<br>Address: " + address.value;
	}
	//BUILDING
	if (Number(building.value)) {
		$("top").innerHTML += "<br>Building#: " + building.value;
		$("errorBu").style.display = "none";
	} else if (isNaN(building.value)) {
		$("errorBu").innerHTML = "* numbers only *"
	}
	//CITY VALIDATION
	if (cityResult) {
		$("errorC").style.display = "none";
		$("errorC2").innerHTML = "&#x2714;";
        $("top").innerHTML += "<br>city: " + city.value;
    } else {
        $("errorC").innerHTML = "&#10006;";
    }
	//STATE DROPDOWN MENU
	if (ak) {
		$("top").innerHTML += "<br>State: Alaska";
	} else if (cali) {
		$("top").innerHTML += "<br>State: California";
	}
	//ZIPCODE VALIDATION
	if (zipResult) {
		$("errorZ").style.display = "none";
		$("errorZ2").innerHTML = "&#x2714;";
        $("top").innerHTML += "<br>zipcode: " + zipCode.value;
    } else {
        $("errorZ").innerHTML = "&#10006;";
	}
}


//CREDIT CARD VALIDATION
var visaPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
var mastPattern = /^(?:5[1-5][0-9]{14})$/;
var amexPattern = /^(?:3[47][0-9]{13})$/;
var discPattern = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
var cvv =         /^[0-9]{3,4}$/;

$("cc-number").addEventListener("blur", function () {
	"use strict";
    var ccNum  = document.getElementById("cc-number").value;
	var isVisa = visaPattern.test(ccNum) === true;
    var isMast = mastPattern.test(ccNum) === true;
    var isAmex = amexPattern.test(ccNum) === true;
    var isDisc = discPattern.test(ccNum) === true;

    if (isVisa || isMast || isAmex || isDisc) {
        // at least one regex matches, so the card number is valid.

        if (isVisa) {
            $("card1").innerHTML = "Visa 💳";
			$("card2").style.display = "none";
        } else if (isMast) {
             // Mastercard-specific logic goes here
			$("card1").innerHTML = "Marter card 💳";
			
        } else if (isAmex) {
            // AMEX-specific logic goes here
			$("card1").innerHTML = "Amerca Ex 💳";
			
        } else if (isDisc) {
            // Discover-specific logic goes here
			$("card1").innerHTML = "Discovery 💳";
		}
	} else {
        $("card2").innerHTML = "&#9888;";
        return false;
	}
});

//CC EXPIRATON VALIDATION
$("cc-expiration").addEventListener("blur", function () {
	"use strict";
	if($("cc-expiration").value != "" && !/^\d{1,2}\/\d{4}$/.test($("cc-expiration").value)) {
		alert('Bwahaha! Thats not a valid expiration date! Try using MM/YYYY format!');
   }
});

//CVV VALIDATION
$("cc-cvv").addEventListener("blur", function () {
	"use strict";
	if($("cc-cvv").value != "" && !cvv.test($("cc-cvv").value)) {
		alert('Bwahaha! Thats not a valid CVV number! Try again ZAK!');
   }
});

//DISPLAY OTHER OPTION FOR ADDRESS TYPE    
$("addressDrop").addEventListener("change", function () {
    "use strict";
    var x = $("otherChoice");
    
    if ($("other").selected == true) {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
});

//BUTTON TO SHOW THE CHECKOUT FORM "CASH OR CARD"
$("card").addEventListener("click", function () {
    "use strict";
    var x = $("payment");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
});

//BUTTON TO HIDE THE CHECKOUT FORM "CASH OR CARD"
$("cash").addEventListener("click", function () {
    "use strict";
    var y = $("payment");
    
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "none";
        
    }
});

//PIZZA CHOICE ARRAY TO ADD PRICE VALUE
var pizza_price = new Array();
pizza_price["None"] = 0;
pizza_price["Glutten Free"] = null;
pizza_price["New York"] = null;
pizza_price["Thin Crust"] = null;
pizza_price["Hand Tossed"] = null;
pizza_price["Small ($10.99)"] = 10.99;
pizza_price["Large ($16.99)"] = 16.99;
pizza_price["Extra Large ($19.99"] = 19.99;
pizza_price["Medium ($11.99)"] = 11.99;
pizza_price["Large ($13.99)"] = 13.99;
pizza_price["Small ($9.99)"] = 9.99;
pizza_price["Medium ($12.99)"] = 12.99;
pizza_price["Large ($14.99)"] = 14.99;


//CHOOSING PIZZA
function getPizzaPrice() {
    "use strict";
    var pizzaChoice = 0;
    var theForm = document.forms["myDIV"];
    var selected = theForm.elements["select"];
    pizzaChoice = pizza_price[selected.value];
    return pizzaChoice;
}


//RADIO BUTTONS TO DISPLAY PIZZA DROPDOWN MENU
$("hand").addEventListener("change", function gluten() {
    "use strict";
    var select = $("select");
	var options = ["Hand Tossed", "Small ($9.99)", "Medium ($12.99)", "Large ($14.99)"];
	var i;
	for (i = 0; i < options.length; i += 1) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
});

$("thin").addEventListener("change", function gluten() {
    "use strict";
    var select = $("select");
	var options = ["Thin Crust", "Medium ($11.99)", "Large ($13.99)"];
	var i;
    for (i = 0; i < options.length; i += 1) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
});

$("gluten").addEventListener("change", function gluten() {
    "use strict";
    var select = $("select");
	var options = ["Glutten Free", "Small ($10.99)"];
	var i;
    for (i = 0; i < options.length; i += 1) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
});

$("york").addEventListener("change", function gluten() {
    "use strict";
    var select = $("select");
	var options = ["New York", "Large ($16.99)", "Extra Large ($19.99"];
	var i;
    for (i = 0; i < options.length; i += 1) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
});

//ADDING SAUCE
function getSauce() {
    "use strict";
    var sauce = 0;
	var extra = [];
    if ($("bbq").selected == true) {
        sauce = parseFloat($("bbq").value);
		extra.push("+ Hearty Tomato");
    }
    if ($("tomato").selected == true) {
        sauce = parseFloat($("tomato").value);
		extra.push("+ BBQ Sauce");
    }
	$("extras2").innerHTML = extra.join("");
    return sauce;
}

//ADDING CHEESE
function getCheese() {
    "use strict";
    var cheese = 0;
	var extras = [];
    if ($("extra").selected == true) {
        cheese = parseFloat($("extra").value);
		extras.push("+ Extra Cheese");
    }
    if ($("double").selected == true) {
        cheese = parseFloat($("double").value);
		extras.push("+ Double Cheese");
    }
	$("extras").innerHTML = extras.join("");
    return cheese;
}


//RETURNING 
function formatDecimal(val, n) {
	"use strict";
	n = n || 2;
	var str = "" + Math.round(parseFloat(val) * Math.pow(10, n));
	while (str.length <= n) {
		str = "0" + str;
	}
	var pt = str.length - n;
	return str.slice(0, pt) + "." + str.slice(pt);
}

//ADDING TOPPINGS / EASIER IF DO MAKE A FOR LOOP
function toppingPrice() {
    "use strict";
    var toppings = 0;
	var arr = [];
    
    var theForm = document.forms["myDIV"];
    var pepperoni = theForm.elements["pep"];
    var sasauge = theForm.elements["sa"];
    var ham = theForm.elements["ham"];
    var bacon = theForm.elements["bacon"];
    var salami = theForm.elements["salami"];
    var peppers = theForm.elements["peppers"];
    var olives = theForm.elements["olives"];
    var jala = theForm.elements["jala"];
    var mushroom = theForm.elements["mush"];
    var pineapple = theForm.elements["pine"];
    var onions = theForm.elements["onions"];
    
    if (pepperoni.checked === true) {
        toppings += parseFloat("0.99");
		arr.push("Pepperoni");
    }
    if (sasauge.checked === true) {
        toppings += parseFloat("0.99");
		arr.push("Sasauge");
    }
    if (ham.checked === true) {
        toppings += parseFloat("0.99");
		arr.push("Ham");
    }
    if (bacon.checked === true) {
        toppings += parseFloat("0.99");
		arr.push("Bacon");
    }
    if (salami.checked === true) {
        toppings += parseFloat("0.99");
		arr.push("Salami");
    }
    if (peppers.checked === true) {
        toppings += parseFloat("0.99");
		arr.push("Peppers");
    }
    if (olives.checked === true) {
        toppings += parseFloat("0.99");
		arr.push("Olives");
    }
    if (jala.checked === true) {
        toppings += parseFloat("0.99");
		arr.push("Jalapeno");
    }
    if (mushroom.checked === true) {
        toppings += parseFloat("0.99");
		arr.push("Mushroom");
    }
    if (pineapple.checked === true) {
        toppings += parseFloat("0.99");
		arr.push("Pineapple");
    }
    if (onions.checked === true) {
        toppings += parseFloat("0.99");
		arr.push("Onions");
    }
	$("added").innerHTML = arr.join(",");
    return toppings;
}


//CASH OPTION TO UNCHECK CARD BUTTON
$("cash").addEventListener("click", function(){
    "use strict";
    $("card").checked = false;
});

//CARD OPTION TO UNCHECK CASH BUTTON
$("card").addEventListener("click", function(){
    "use strict";
    $("cash").checked = false;
});

//AUTOFILL THE CARD ADDRESS INFO 
$("autoFill").addEventListener("click", function() {
    var box = $("autoFill");
    if(box.checked == false) { return; }
    document.myDIV.usr2.value  = document.myDIV.usr.value;
    document.myDIV.lastName2.value  = document.myDIV.lastName.value;
    document.myDIV.email2.value  = document.myDIV.email.value;
    document.myDIV.city2.value  = document.myDIV.city.value;
    document.myDIV.zip2.value  = document.myDIV.zip.value;
    document.myDIV.address2.value  = document.myDIV.address.value;
	document.myDIV.state2.value  = document.myDIV.stateDrop.value;
});

//WILL DISPLAY CASH OPTION OR CARD OPTION ON ALERT
function display() {
	"use strict";
	if ($("cash").checked === true) {
		return "\nYour Total Will Be Paid Cash";
	} else if ($("card").checked === true) {
		return "\nYour Total Will Be Charged On Your Card";
	}
	return this;
}

//TOTAL CALCULATION
function calculateTotal() {
    "use strict";
    var total;
    total =  formatDecimal(toppingPrice() + getPizzaPrice() + getSauce() + getCheese());
    var totalCost = $("totalPrice");
    totalCost.innerHTML = "<br>$ " + total;
    return true;
}

//DISPLAY ALERT BOX ON SUBMIT
$("btn").addEventListener("click", function(){
    alert("Name: " + userName.value + "\nLast Name: " +  lastName.value + "\nEmail: " + userEmail.value + "\nAddress: " + address.value + "\nZip Code: " + zipCode.value + "\nyour Total: " + Math.abs(toppingPrice() + getPizzaPrice() + getSauce() + getCheese()) + display());
    return this;
});
