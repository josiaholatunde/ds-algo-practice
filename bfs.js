function breadFirstSearch(graph, startVertex) {
    const queue = [ startVertex ]; // queue operations -> dequeue , add
    const visited = new Set();
    visited.add(startVertex);

    while(queue.length !== 0) {
        console.log('Queue --->', queue)
        const current = queue.shift();
        for (let neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

breadFirstSearch({a: [ 'b', 'c', 'g' ], b: [ 'a', 'd', 'h'], c: [ 'a', 'd', 'e' ], d: [ 'b', 'c', 'f' ], e: [ 'c', 'f', 'g'], 
f: [ 'd', 'e', 'h'], g: ['a', 'e', 'h'], h: ['b', 'f', 'g'] }, 'a');




