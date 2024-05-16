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
    console.table(A);
    return i + 1;
}

function swap(A, i, j) {
    const temp = A[i];

    A[i] = A[j];
    A[j] = temp;
}


const arrayToBeSorted = [2, 5, 6, 1, 4, 3];
console.log(`Partition(A, 1, ${arrayToBeSorted.length}`);
console.log(partition(arrayToBeSorted, 0, arrayToBeSorted.length - 1));