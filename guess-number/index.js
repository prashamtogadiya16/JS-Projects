let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

let num = parseInt(prompt("Enter a number between 1 to 100"));
attempts++; 

while (num !== targetNumber) {
    if (num < targetNumber) {
        alert("Guess higher");
    } else {
        alert("Guess Lower");
    }
    
    num = parseInt(prompt("Enter a number between 1 to 100"));
    attempts++;
}

alert(`Congrats!! You guessed it correctly in ${attempts} attempts!`);