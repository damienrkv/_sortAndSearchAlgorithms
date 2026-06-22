export function binarySearch (arr, target) {
    let left = 0; 
    let right = arr.length - 1; 

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            console.log('Target gefunden: ' + target)
            return mid; 
        }
        if (arr[mid] < target) {
            left = mid + 1;
            console.log('Suche im rechten Teil: ' + arr.slice(mid + 1, right + 1));
        }
        else {
            right = mid - 1; 
            console.log('Suche im linken Teil: ' + arr.slice(left, mid));
        }
    }
    return -1; 
}