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
    j = i;
    while (j >= leftIndex && A[j] === A[i + 1]) {
        j = j - 1;
    }
    console.log('Array', A);
    return Math.round((i + j - 1)/ 2);
}

function swap(A, i, j) {
    const temp = A[i];

    A[i] = A[j];
    A[j] = temp;
}


const result = partition([0, 0, 0, 0, 0, 0, 0, 0, 0], 0, 8);
console.log('Res', result);