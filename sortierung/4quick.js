function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[Math.floor(arr.length / 2)];

    let left = [];
    let middle = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            middle.push(arr[i]);
        }
        

    return [
        ...quickSort(left),
        ...middle,
        ...quickSort(right)
    ];
}




/*
function quickSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[Math.floor(arr.length / 2)];

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
        console.log('current array:', arr);
        console.log('pivot:', pivot);
        console.log('left:', left);
        console.log('right:', right);
    }

    return [
        ...quickSort(left),
        ...quickSort(right)
    ];
}*/}