class Graph {
    constructor() {
       this.edges = {};
       this.nodes = [];
    }
    addNode(node) {
       this.nodes.push(node);
       this.edges[node] = [];
    }
    addEdge(node1, node2) {
       this.edges[node1].push(node2);
       this.edges[node2].push(node1);
    }
    addDirectedEdge(node1, node2) {
       this.edges[node1].push(node2);
    }
    display() {
       let graph = ""; 
       this.nodes.forEach(node => {
       graph += node + "->" + this.edges[node].join(", ") + " ";
       });
       console.log(graph);
    }
 }
 let g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addEdge("A", "C");
g.addEdge("B", "A");
g.addDirectedEdge("A", "D");
g.addEdge("D", "E");

g.display();
