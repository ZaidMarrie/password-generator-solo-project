const generateButton = document.getElementById("genPassword");
const passwordEl1 = document.getElementById("password1");
const passwordEl2 = document.getElementById("password2");

// prettier-ignore
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Returns a random number in a range (min & max inclusive)
function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function generatePassword() {
	const passwordLength = 15;
	let randomPassword = "";

	for (let i = 0; i < passwordLength; i++) {
		randomPassword += characters[randInt(0, characters.length - 1)];
	}

	console.log(randomPassword);
	return randomPassword;
}

generateButton.addEventListener("click", () => {
	passwordEl1.textContent = generatePassword();
	passwordEl2.textContent = generatePassword();
});
