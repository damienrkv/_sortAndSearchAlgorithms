export function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {

        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            console.log(`Move ${arr[j + 1]} to position ${j + 2}`);
        }
        
        arr[j + 1] = key;
        
        console.log(`Insert ${key} at position ${j + 1}`);
        console.log(arr);
    } 
    return arr;
}