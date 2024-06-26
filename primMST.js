function primMST(graph, startingVertex) {
    const dList = [];
    const predecessorList = [];
    const processedVertices = new Set();
    for (let i = 0; i < graph.length; i++) {
        dList[i] = Infinity;
        predecessorList[i] = Infinity;
    }
    dList[startingVertex] = 0;
    predecessorList[startingVertex] = -1;

    while (processedVertices.size < graph.length) {

        const u = selectMinVertex(dList, processedVertices)
        processedVertices.add(u);
        console.log('Current Vertx ---- Minimum vertex ---->', u);
        for (let j = 0; j < graph.length; j++) {
            if (graph[u][j] !== Infinity && !processedVertices.has(j) && graph[u][j] < dList[j]) {
                dList[j] = graph[u][j];
                predecessorList[j] = u;
            }
        }
        console.log('After ---> Shortest path list\n');
        console.table(dList);
        console.log('Predecessor List ---> \n')
        console.table(predecessorList)
    }
}

function selectMinVertex(dList, processedVertices) {
    let minVal = Infinity, minVertex = Infinity;

    for (let i = 0; i < dList.length; i++) {
        if (!processedVertices.has(i) && dList[i] < minVal) {
            minVal = dList[i]
            minVertex = i;
        }
    }
    return minVertex
}


// primMST([
//     [ 0, 50, 45, 10, 0, 0 ],
//     [ 0, 0, 10, 15, 0, 0],
//     [ 0, 0, 0, 0, 30, 0], 
//     [ 10, 0, 0, 0, 15, 0], 
//     [ 0, 20, 35, 0, 0, 0],
//     [ 0, 0, 0, 0, 3, 0],
// ], 0)


primMST([
    [ 0, 7, 2, 4, Infinity, Infinity],
    [ 7, 0, Infinity, 5, Infinity, Infinity],
    [ 2, Infinity, 0, 8, 3, Infinity], 
    [ 4, 5, 8, 0, 9, 1], 
    [ Infinity, Infinity, 3, 9, 0, 6],
    [ Infinity, Infinity, Infinity, 1, 6, 0],
], 0)