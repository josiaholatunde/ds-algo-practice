function belmanFordShortestPath(graph, noOfVertices, startVertex) {
    const shortestDistanceArray = new Array(noOfVertices).fill(Infinity);
    const predecessorArray = new Array(noOfVertices).fill(Infinity);
    shortestDistanceArray[startVertex] = 0;
    predecessorArray[startVertex] = -1;
    console.log('i ran', shortestDistanceArray)
    for (let i = 0; i < noOfVertices - 1; i++) {

        for (let j = 0; j < graph.length; j++) {
            const [u, v, edgeDistance] = graph[j];
            if (shortestDistanceArray[v] > shortestDistanceArray[u] + edgeDistance) {
                shortestDistanceArray[v] = shortestDistanceArray[u] + edgeDistance;
                predecessorArray[v] = u;
                console.table(shortestDistanceArray);
            }
        }
        console.log(`After i = ${i}\n`)
        console.table(shortestDistanceArray);
    }
}


// belmanFordShortestPath([
//     [0, 3, 8], [3, 4, 2], [4, 3, 1], [2, 4, 4], [1, 2, -3], [0, 2, 5], [0, 1, 4] // list of edges and weight
// ], 5,  0)


belmanFordShortestPath([
    [1, 3, 1], [1, 4, 5], [2, 1, -1], [2, 4, 7], [3, 4, 3], [0, 1, 4], [0, 2, -2]
], 5,  0)

// belmanFordShortestPath([
//     [0, 1, 6], [0, 3, 9], [0, 4, 7], [1, 3, 2], [2,5,-3], [3, 2, 4], [3, 5, -2], [4, 3, -1] 
// ], 6,  0)


