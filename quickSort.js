function quickSort(A, leftIndex, rightIndex) {
    if (leftIndex < rightIndex) {
        const partitionIndex = partition(A, leftIndex, rightIndex);
        console.log('Array ----> ', A);
        quickSort(A, leftIndex, partitionIndex - 1);
        quickSort(A, partitionIndex + 1, rightIndex);
    }
}


function partition(A, leftIndex, rightIndex) {
    let i = leftIndex - 1;
    let pivot = A[rightIndex];

    for (let j = leftIndex; j <= rightIndex - 1; j++) {
        if (A[j] <= pivot) {
            i++;
            swap(A, i, j);
        }
    }
    swap(A, i + 1, rightIndex);
    return i + 1;
}

function swap(A, i, j) {
    const temp = A[i];

    A[i] = A[j];
    A[j] = temp;
}


const arrayToBeSorted = [10, 4, 7, 1, 2, 8, 3];
console.log(quickSort(arrayToBeSorted, 0, arrayToBeSorted.length - 1));