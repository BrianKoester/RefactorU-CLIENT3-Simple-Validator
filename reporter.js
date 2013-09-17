var word = prompt("Enter any word");

alert(
	"You entered: " + word + "\n" +
	"There are " + word.length + " characters in the word." + "\n" +
	"The third character is '" + word.charAt(2) + "'" + "\n" +
	"Lowercase: " + word.toLowerCase() + "\n" +
	"Uppercase: " + word.toUpperCase() + "\n" +
	"Example: I have wanted a " + word + " all my life." + "\n" +
	"Subword: " + word.substring(1,4)
);