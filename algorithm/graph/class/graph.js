/* Created By ChrisWen
 * 17/8/28
 * 1. Graph -- 图
 */

const dictionary = require('../../dictionary/class/dictionary.js');
let Dictionary = new dictionary();

class graph {
    constructor() {
        this.state = {
            //顶点列表
            vertices: [],
            //邻接表
            adjList: Dictionary
        }
    }

    //向图中添加新的顶点 v=>顶点
    addVertex(v) {
        this.state.vertices.push(v);
        this.state.adjList.set(v, []);
    }

    addEdge(v, w) {
        //将w加入到v的邻接表中,构建v=>w单向边（有向图）
        this.state.adjList.get(v).push(w);
        //逆序操作，双向边（无向图）v<=>w
        this.state.adjList.get(w).push(v);
    }

    toString() {
        let s = '';
        for (let i = 0; i < this.state.vertices.length; i++) {
            s += this.state.vertices[i] + '->';
            let neighbors = this.state.adjList.get(this.state.vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    }
}

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