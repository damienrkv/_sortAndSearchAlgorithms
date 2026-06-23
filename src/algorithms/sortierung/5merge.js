export function mergeSort (arr) {
    let n = arr.length;

    if (n <= 1) {
        return arr;
    }

    let mid = Math.floor(n / 2);
    let left = mergeSort(arr.slice(0, mid - 1));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result
        .concat(left.slice(i))
        .concat(right.slice(j));
}