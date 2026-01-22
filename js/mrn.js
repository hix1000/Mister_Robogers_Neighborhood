//#region Business Logic
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