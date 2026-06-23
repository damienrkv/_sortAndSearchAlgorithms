import * as Input from "/utils/input.js"; 
import * as InsertionSort from "/src/algorithms/sortierung/1insertion.js";
import * as SelectionSort from "/src/algorithms/sortierung/2selection.js";
import * as BubbleSort from "/src/algorithms/sortierung/3bubble.js";
import * as QuickSort from "/src/algorithms/sortierung/4quick.js";
import * as MergeSort from "/src/algorithms/sortierung/5merge.js";
import * as BinarySearch from "/src/algorithms/suche/bin.js";
import * as LinearSearch from "/src/algorithms/suche/lin.js";


function main() {

    let numbers = Input.getNumbers();
    console.log("Merge Sort:");
    console.log("Original:");
    console.log(numbers);

    
    let sortedNumbers = MergeSort.mergeSort([...numbers]);

    console.log("Sorted:");

    console.log(sortedNumbers);

    let target = Input.getTarget();
    let index = LinearSearch.linearSearch(sortedNumbers, target);
    console.log(`Index of ${target}: ${index}`);
}

main();