# Mister_Robogers_Neighborhood

### Tests
Describe: `mrRobogersNeighborhood(numberString)`

Test: It returns an array of 1 item if 0 is imputted
    Code: `mrRobogersNeighborhood("0")`
    Expected output: `"0"`

Test: It returns an array of 10 items if 9 is inputted
    Code: `mrRobogersNeighborhood("9")`
    Expected output: `"0, \"Beep\", \"Boop\", \"Won't you be my neighbor?\", 4, 5, 6, 7, 8, 9"`

Test: Last item in an array if 1 is imputted
    Code: `mrRobogersNeighborhood("1")`
    Expected output (Last item): `"Beep"`

Test: Last item in an array if 2 is imputted
    Code: `mrRobogersNeighborhood("2")`
    Expected output (Last item): `"Boop"`

Test: Last item in an array if 3 is inputted
    Code: `mrRobogersNeighborhood("3")`
    Expected output (Last item): "Won't you be my neighbor?"
