function floydWarshall(graph, noOfVertices) {
    const distanceArray = graph;
    const predecessorArray = []
    for (let i = 0; i < noOfVertices; i++) {
        predecessorArray[i] = new Array(noOfVertices).fill(null);
        
        for (let j = 0; j < noOfVertices; j++) {
            if (graph[i][j] !== Infinity && graph[i][j] !== 0) {
                predecessorArray[i][j] = i;
            }

        }
    }
    console.log('Initial Array ------->')
    console.table(distanceArray);
    console.log('Initial Predecessor Array ------>')
    console.table(predecessorArray);
    for (let k = 0; k < noOfVertices; k++) {

        for (let i = 0; i < noOfVertices; i++) {

            for (let j = 0; j < noOfVertices; j++) {
                if (distanceArray[i][k] + distanceArray[k][j] < distanceArray[i][j]) {
                    distanceArray[i][j] = distanceArray[i][k] + distanceArray[k][j]
                    predecessorArray[i][j] = predecessorArray[k][j];
                } 
            }
        }
        console.log('Guys shortest path through vertex', k);
        console.table(distanceArray);
        console.log('Predecessor List');
        console.table(predecessorArray);
    }
    

    // console.table(distanceArray);
    // console.table(predecessorArray);
}

floydWarshall([
    [0, Infinity, 3, 4],
    [-2, 0, 1, Infinity],
    [Infinity, Infinity, 0, 6],
    [Infinity, 7, Infinity, 0]
], 4);


// floydWarshall([
//     [0, -2, 5],
//     [8, 0, 4],
//     [-1, 2, 0]
// ], 3);