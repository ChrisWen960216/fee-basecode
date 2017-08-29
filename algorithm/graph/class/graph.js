/* Created By ChrisWen
 * 17/8/28
 * 1. Graph -- 图
 */

const dictionary = require('../../dictionary/class/dictionary.js');
const queue = require('../../list/class/queue.js');

let Dictionary = new dictionary();
//let Queue = new queue();

module.exports = class graph {
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

    //Start 遍历
    /** white --- 初始化所有顶点的颜色
     *  grey  --- 已经发现 还没有探索过的点
     *  black --- 已经发现 已经探索的点
     */
    initializeColor() {
        let color = [];
        let vertices = this.state.vertices;
        for (let i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    }

    //BFS 广度优先遍历
    bfs(v, callback) {
        let color = this.initializeColor();
        let Queue = new queue();
        let adjList = this.state.adjList;
        Queue.enqueue(v); //起始顶点入队列

        while (!Queue.isEmpty()) {
            let u = Queue.dequeue(); //移除队列的一个点
            let neighbors = adjList.get(u); //获取邻接表
            color[u] = 'gray';

            for (let i = 0; i < neighbors.length; i++) { //获取邻接表中所有的点，如果有未发现的，设置为未探索的。并且将未探索的入队列
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    Queue.enqueue(w);
                }
            }
            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    }

    BFS(v, callback) {
        let color = this.initializeColor();
        let Queue = new queue();
        let d = [];
        let pred = [];
        let vertices = this.state.vertices;
        let adjList = this.state.adjList;
        Queue.enqueue(v);

        for (let i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }
        while (!Queue.isEmpty()) {
            let u = Queue.dequeue();
            let neighbors = adjList.get(u);
            color[u] = 'grey';
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    Queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        return {
            distaces: d,
            predecessors: pred
        }
    }

    //
    //End 遍历

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

    //检查遍历callback函数
    print(value) {
        console.log('遍历的点是:' + value)
    }
}

