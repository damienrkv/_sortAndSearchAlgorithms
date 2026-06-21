import * as Input from "./input.js"; 
import * as InsertionSort from "./sortierung/1insertion.js";
import * as SelectionSort from "./sortierung/2selection.js";
import * as BubbleSort from "./sortierung/3bubble.js";
import * as QuickSort from "./sortierung/4quick.js";
import * as MergeSort from "./sortierung/5merge.js";


function main() {

    let numbers = Input.getNumbers();
console.log("Original:");

    console.log(numbers);

    let sortedNumbers = InsertionSort.InsertionSort([...numbers]);

    console.log("Sorted:");

    console.log(sortedNumbers);
}

main();