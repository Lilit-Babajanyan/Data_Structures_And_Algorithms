function quick_sort(arr, start, end) {
    if (start >= end) return;

    let i = start;
    let j = end;
    let pivot = arr[Math.floor((start + end) / 2)];

    while (i <= j) {

        while (arr[i] < pivot) {
            i++;
        }

        while (arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }

    quick_sort(arr, start, j);
    quick_sort(arr, i, end);
}