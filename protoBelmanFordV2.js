function protoBelmanFordShortestPath(graph, noOfVertices) {
    const distanceArray = [];
    for (let i = 0; i < noOfVertices; i++) {
        if (i === 0) {
            distanceArray[i] = new Array(noOfVertices).fill(0);
        } else {
            distanceArray[i] = new Array(noOfVertices).fill(Infinity);
        }
    }
    
    console.table(distanceArray);
    for (let i = 1; i < noOfVertices; i++) {
        for (let v = 1; v < noOfVertices; v++) {
            distanceArray[v][i] = distanceArray[v][i - 1];
            for (let w = 0; w < noOfVertices; w++) {
                console.log('w v', w, v);
                if (distanceArray[w][i - 1] + graph[w][v] < distanceArray[v][i]) {
                    distanceArray[v][i] = distanceArray[w][i - 1] + graph[w][v];
                }
            }
        }
        console.log('Iteration --- ', i)
        console.table(distanceArray);
    }
}
 
// protoBelmanFordShortestPath([   
//     [0, 4, 2, -3, Infinity, 3],
//     [Infinity, 0, Infinity, Infinity, -1, Infinity],
//     [Infinity, Infinity, 0, Infinity, -2, Infinity],
//     [Infinity, 6, Infinity, 0, Infinity, Infinity],
//     [Infinity, Infinity, Infinity, -4, 0, 8],
//     [Infinity, Infinity, -3, Infinity, Infinity, 0],  
// ], 6)
 
 
 
protoBelmanFordShortestPath([
    
    [0, -1, 4, Infinity, Infinity],
    [Infinity, 0, 2, 5, Infinity],
    [Infinity, Infinity, 0, 7, 6],
    [Infinity, Infinity, Infinity, 0, -3],
    [Infinity, Infinity, Infinity, Infinity, 0],
], 5)