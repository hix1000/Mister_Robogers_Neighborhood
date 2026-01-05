
# Mister_Robogers_Neighborhood

  

### Contributers

Mason Alex

  

### Details

This program loops through a given value and either outputs the loop value, `Beep`, `Boop`, or `Won't you be my neighbor?` depending on the loop value.

> Setup
Launch a live server or click [here](https://hix1000.github.io/Mister_Robogers_Neighborhood/).

  

### Description

  

This website takes in a given value, and starting from 0, loops to that value while outputting a value depending on the criteria:

Contains 3: `Won't you be my neighbor?`

Contains 2: `Boop`

Contains 1: `Beep`

This order executes if the previous is found to be false. All other numbers output their value.

  

### Technologies incorporated

  

- HTML

- CSS

- JavaScript

  

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

Expected output (Last item): `"Won't you be my neighbor?"`

  

Test: Last item in an array if 21 is inputted

Code: `mrRobogersNeighborhood("21")`

Expected output (Last item): `"Boop"`

  

> Known bugs
None yet.

  
### License

##### Mister_Robogers_Neighborhood

GNU General Public License

> This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
You should have received a copy of the GNU General Public License along with this program. If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).
_Assets used in this program are properly credited according to the copyright holder's requirements._