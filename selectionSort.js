function selectionSort(A) {
    
    for (let i = 0; i < A.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < A.length; j++) {
            if (A[j] < A[minIndex]) {
                minIndex = j;
            }
        }
        swapArrayItems(A, i, minIndex);
        console.table(A);
    }
}

function swapArrayItems(A, firstIndex, secondIndex) {
    const temp = A[firstIndex];
    A[firstIndex] = A[secondIndex];
    A[secondIndex] = temp;
}


selectionSort([9, 8, 4, 2, 1])