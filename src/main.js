import * as Input from "/utils/input.js"; 
import * as InsertionSort from "/src/algorithms/sortierung/1insertion.js";
import * as SelectionSort from "/src/algorithms/sortierung/2selection.js";
import * as BubbleSort from "/src/algorithms/sortierung/3bubble.js";
import * as QuickSort from "/src/algorithms/sortierung/4quick.js";
import * as MergeSort from "/src/algorithms/sortierung/5merge.js";


function main() {

    let numbers = Input.getNumbers();
    console.log("Original:");

    console.log(numbers);

    let sortedNumbers = InsertionSort.insertionSort([...numbers]);

    console.log("Sorted:");

    console.log(sortedNumbers);
}

main();