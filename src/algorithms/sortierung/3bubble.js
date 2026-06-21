export function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        
        for (let j = 0; j < arr.length - 1 - i; j++) {
            
            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                console.log(`Swap ${arr[j]} and ${arr[j + 1]}`);
                console.log(arr);
            
            }

        }

    }

    return arr;
}