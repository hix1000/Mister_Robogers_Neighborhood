//#region Business Logic

/*
function validateCreditCard(string) {
  // Remove spaces and split into individual characters 
  let numbers = string.replaceAll(" ", "").split("");
  
  numbers = numbers.map(Number);
  for (let i = numbers.length - 2; i >= 0; i -= 2) {

    // Double every second digit from the right
    numbers[i] *= 2;
    if (numbers[i] > 9) {
      // If the result is greater than 9, subtract 9
      numbers[i] -= 9;
    };
  };
  
  // Sum all the digits and check if the total modulo 10 is 0
  return (numbers.reduce((a, b) => a + b, 0) % 10 === 0);
}
*/
function mrRobogersNeighborhood(numberString) {
    // convert string to number and validate
    let number = parseInt(numberString);
    if (!isNaN(number) && numberString.trim() !== "") {

        let output = [];
        for (let i=0; i<=number; i++) {
            // separate each digit
            let arrI = i.toString().split("").map(Number);

            if (arrI.includes(3)) {
                // contains 3
                output.push("\"Won't you be my neighbor?\"");
            } else if (arrI.includes(2)) {
                // contains 2
                output.push("\"Boop\"");
            } else if (arrI.includes(1)) {
                // contains 1
                output.push("\"Beep!\"");
            } else {
                output.push(i);
            };
        }
        return output.join(", ");
        
    } else {
        // edge case
        return "Invalid input. Please enter a number."
    };
}

//#endregion

//#region ui Logic
window.onload = function() {
  
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    
    const input = document.getElementById("input").value;
    event.preventDefault();
    document.querySelector("p#output").innerText = mrRobogersNeighborhood(input);
    
    document.querySelector("div#mrn").removeAttribute("class");

  };
};
//#endregion