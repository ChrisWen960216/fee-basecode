/* Created By ChrisWen
 * 17/8/29
 * All graph TestFile
 */
const graph = require('./class/graph.js');

let Graph = new graph();
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
    Graph.addVertex(myVertices[i]);
}

Graph.addEdge('A', 'B');
Graph.addEdge('A', 'C');
Graph.addEdge('A', 'D');
Graph.addEdge('C', 'D');
Graph.addEdge('C', 'G');
Graph.addEdge('D', 'H');
Graph.addEdge('B', 'E');
Graph.addEdge('B', 'F');
Graph.addEdge('E', 'I');

console.log(Graph.toString());
Graph.bfs(myVertices[0], Graph.print);
console.log(Graph.BFS(myVertices[0]));