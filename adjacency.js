

//! ADJACENCY MATRIX: you store values irrespective of whether an edge exists or not.
let matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
]


//! ADJACENCY LIST: we only need to store the values for the edges that exist
adjacencyList = {
    'A' : ['B'],
    'B' : ['A', 'C'],
    'C' : ['B']
}

console.log(adjacencyList['A']);


//todo : STORAGE WISE, AN ADJACENCY LIST IS WAY MORE EFFICIENT