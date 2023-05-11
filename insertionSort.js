function insertionSort(A) {

    for (let i = 1; i < A.length; i++) {
        let j = i - 1;
        const currentNumber = A[i];

        while (j >= 0 && currentNumber < A[j]) {
            A[j + 1] = A[j];
            j--;
        }
        A[j + 1] = currentNumber;

        console.log(A);
    }
}


insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1])