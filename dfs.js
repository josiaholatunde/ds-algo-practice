function dfsGraph(graph, startVertex) {
    const stack = [ startVertex ]
    const visited = new Set();
    visited.add(startVertex);

    while (stack.length > 0) {
        console.log('Stack ---->', stack);
        const current = stack.pop();

        for (let neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                stack.push(neighbor)
            }
        }
    }
}

dfsGraph({a: [ 'b', 'c', 'g' ], b: [ 'a', 'd', 'h'], c: [ 'a', 'd', 'e' ], d: [ 'b', 'c', 'f' ], e: [ 'c', 'f', 'g'], 
f: [ 'd', 'e', 'h'], g: ['a', 'e', 'h'], h: ['b', 'f', 'g'] }, 'a');