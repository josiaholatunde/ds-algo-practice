function protoBelmanFordShortestPath(graph, noOfVertices) {
    const distanceArray = [];
    for (let i = 0; i < noOfVertices; i++) {
        distanceArray[i] = new Array(noOfVertices).fill(Infinity);
        distanceArray[i][0] = 0;
    }
    
    console.table(distanceArray);
    for (let i = 1; i < noOfVertices; i++) {
        for (let v = 1; v < noOfVertices; v++) {
            distanceArray[i][v] = distanceArray[i - 1][v];
            for (let w = 0; w < noOfVertices; w++) {
                console.log('w v', w, v);
                if (distanceArray[i - 1][w] + graph[w][v] < distanceArray[i][v]) {
                    distanceArray[i][v] = distanceArray[i - 1][w] + graph[w][v];
                }
            }
        }
        console.log('Iteration --- ', i)
        console.table(distanceArray);
    } 
}

protoBelmanFordShortestPath([
    
    [0, 4, 2, -3, Infinity, 3],
    [Infinity, 0, Infinity, Infinity, -1, Infinity],
    [Infinity, Infinity, 0, Infinity, -2, Infinity],
    [Infinity, 6, Infinity, 0, Infinity, Infinity],
    [Infinity, Infinity, Infinity, -4, 0, 8],
    [Infinity, Infinity, -3, Infinity, Infinity, 0],  
], 6)