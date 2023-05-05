function primMST(graph, startingVertex) {
    const dList = [];
    const predecessorList = [];
    const processedVertices = new Set();
    for (let i = 0; i < graph.length; i++) {
        dList[i] = Infinity;
    }
    dList[startingVertex] = 0;
    predecessorList[startingVertex] = -1;

    for (let i = 0; i < graph.length - 1; i++) {

        const u = selectMinVertex(dList, processedVertices) // u indicates vertex of minimum distance for from current reference
        processedVertices.add(u);
        console.log('Current Vertx ---- Minimum vertex ---->', u);
        for (let j = 0; j < graph.length; j++) {
            if (graph[u][j] !== 0 && !processedVertices.has(j) && dList[u] !== Infinity && dList[u] + graph[u][j] < dList[j]) {
                dList[j] = graph[u][j] + dList[u];
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


primMST([
    [ 0, 50, 45, 10, 0, 0 ],
    [ 0, 0, 10, 15, 0, 0],
    [ 0, 0, 0, 0, 30, 0], 
    [ 10, 0, 0, 0, 15, 0], 
    [ 0, 20, 35, 0, 0, 0],
    [ 0, 0, 0, 0, 3, 0],
], 0)