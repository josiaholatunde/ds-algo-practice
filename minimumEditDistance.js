function minimumEditDistance(firstString, secondString, costOfEdit, costOfInsert, costOfDelete) {
    const m = firstString.length;
    const n = secondString.length;
    const distanceArray = new Array(m + 1);
    const minCost = getMinCost(costOfDelete, costOfInsert, costOfEdit)
    for (let i = 0; i <= m; i++) {
        distanceArray[i] = new Array(n + 1);
        distanceArray[i][0] =  minCost * i;
    }
    console.table(distanceArray)
    for (let j = 0; j < distanceArray[0].length; j++) {
        distanceArray[0][j] = minCost * j
    }


    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <=n; j++) {
            if (firstString.charAt(i - 1) === secondString.charAt(j - 1)) {
                distanceArray[i][j] = distanceArray[i - 1][j - 1];
            } else {
                distanceArray[i][j] = Math.min(
                    distanceArray[i][j - 1] + costOfInsert,
                    Math.min(distanceArray[i - 1][j - 1] + costOfEdit,
                        distanceArray[i - 1][j] + costOfDelete)
                );
            }
            
        }
    }

    console.log('Result');
    console.table(distanceArray);
}

function getMinCost(costOfEdit, costOfInsert, costOfDelete) {
    return Math.min(costOfDelete, Math.min(costOfEdit, costOfInsert))
}


// minimumEditDistance("abcbdab", "bdcaba", 1, 1, 1);
// verticalAxis, horizontalAxis
minimumEditDistance("CBAC", "ACBB", 3, 2, 2);