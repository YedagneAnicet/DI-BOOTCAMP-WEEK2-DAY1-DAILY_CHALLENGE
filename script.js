/* Exercise 1:
Using this array :

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
Remove Banana from the array.
Sort the array in alphabetical order.
Add “Kiwi” to the end of the array.
Remove “Apples” from the array. Don’t use the same method as in part 1.
Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’]) */

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift(); //remove Banana
fruits.sort(); //sort the array
fruits.push("Kiwi"); //add Kiwi
fruits.splice(0,1);//remove Apples
fruits.reverse();//reverse the array

console.log(fruits);

/* Exercise 2:
Using this array :

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
Access and then console.log “Oranges”.
Bonus: If you would like more array exercises take a look at the link below.

Array Exercises */

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

 console.log(moreFruits[1][1][0]);
