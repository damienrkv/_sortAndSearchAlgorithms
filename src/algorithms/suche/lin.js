export function linearSearch(arr, target) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] === target) {
            console.log('Target gefunden an Position: ' + i);
            return i;
        }
        console.log('aktuelles Element: ' + arr[i]);
    }
    return -1;
}