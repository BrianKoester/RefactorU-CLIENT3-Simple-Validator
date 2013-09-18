// prompt user for phone number
var phoneInput = prompt("Please enter your 10-digit phone number separated by dashes.\nWe won't be SPAMMING you.");
alert(phoneInput.charAt(3) === '-' && phoneInput.charAt(7) === '-');

// prompt user for birth date
var birthDateInput = prompt("Please enter your birth date as follows: dd/mm/yy.");
alert(birthDateInput.charAt(2) === '/' && birthDateInput.charAt(5) === '/');

// prompt user for postal code
var postalCodeInput = prompt("Please enter your zipcode as follows: xxxxx or xxxxx-xxxx.");
alert(postalCodeInput.length === 5 || (postalCodeInput.length === 10 && postalCodeInput.charAt(5) === '-'));

// prompt user for state abbreviation
var stateInput = prompt("Please enter your state abbreviation using capital letters.");
alert(stateInput.length === 2 && stateInput === stateInput.toUpperCase());

// prompt user for marital status
var maritalInput = prompt("Please enter your marital status. (Yes or No)");
alert(maritalInput.toUpperCase() === "YES" || maritalInput.toUpperCase() === "NO");