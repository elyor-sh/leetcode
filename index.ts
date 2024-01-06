import { execute } from "./helpers/performance";
import { fromArrayToTree } from "./helpers/treeNode";
import { findDuplicateSubtrees } from "./solutions/findDuplicateSubtrees";


// execute(() => findDuplicateSubtrees(fromArrayToTree([1,2,3,4,null,2,4,null,null,4])));

// type WeightGraph = Record<string, Record<string, number>>

// const graph: WeightGraph = {}
// graph.a = {b: 2, c: 1}
// graph.b = {f: 7}
// graph.c = {d: 5, e: 2}
// graph.d = {f: 2}
// graph.e = {f: 1}
// graph.f = {g: 1}
// graph.g = {}

// function shortPath(graph: WeightGraph, start: string, end: string) {
//     const costs: Record<string, number> = {}
//     const processed: string[] = []
//     let neighbors: Record<string, number> = {}
//     Object.keys(graph).forEach(node => {
//         if (node !== start) {
//             let value = graph[start][node]
//             costs[node] = value || 100000000
//         }
//     })
//     let node = findNodeLowestCost(costs, processed)
//     while (node) {
//         const cost = costs[node]
//         neighbors = graph[node]
//         Object.keys(neighbors).forEach(neighbor => {
//             let newCost = cost + neighbors[neighbor]
//             if (newCost < costs[neighbor]) {
//                 costs[neighbor] = newCost
//             }
//         })
//         processed.push(node)
//         node = findNodeLowestCost(costs, processed)
//     }
//     return costs
// }


// function findNodeLowestCost(costs: Record<string, number>, processed: string[]) {
//     let lowestCost = 100000000
//     let lowestNode;
//     Object.keys(costs).forEach(node => {
//         let cost = costs[node]
//         if (cost < lowestCost && !processed.includes(node)) {
//             lowestCost = cost
//             lowestNode = node
//         }
//     })
//     return lowestNode
// }

// console.log(shortPath(graph, 'a', 'g'));

// type WeightGraph = Record<string, Record<string, number>>

// // Define a graph using an adjacency list
// const graph: WeightGraph = {
//   A: { B: 1, C: 4 },      // Node A is connected to Node B with a weight of 1 and Node C with a weight of 4
//   B: { A: 1, C: 2, D: 5 },  // ... and so on for other nodes
//   C: { A: 4, B: 2, D: 1 },
//   D: { B: 5, C: 1 }
// };

// function dijkstra(graph: WeightGraph, start: string) {
//   // Create an object to store the shortest distance from the start node to every other node
//   let distances: Record<string, number> = {};

//   // A set to keep track of all visited nodes
//   let visited = new Set<string>();

//   // Get all the nodes of the graph
//   let nodes = Object.keys(graph);

//   // Initially, set the shortest distance to every node as Infinity
//   for (let node of nodes) {
//       distances[node] = Infinity;
//   }
  
//   // The distance from the start node to itself is 0
//   distances[start] = 0;

//   // Loop until all nodes are visited
//   while (nodes.length) {
//       // Sort nodes by distance and pick the closest unvisited node
//       nodes.sort((a, b) => distances[a] - distances[b]);
//       let closestNode = nodes.shift()!;

//       // If the shortest distance to the closest node is still Infinity, then remaining nodes are unreachable and we can break
//       if (distances[closestNode] === Infinity) break;

//       // Mark the chosen node as visited
//       visited.add(closestNode);

//       // For each neighboring node of the current node
//       for (let neighbor in graph[closestNode]) {
//           // If the neighbor hasn't been visited yet
//           if (!visited.has(neighbor)) {
//               // Calculate tentative distance to the neighboring node
//               let newDistance = distances[closestNode] + graph[closestNode][neighbor];
              
//               // If the newly calculated distance is shorter than the previously known distance to this neighbor
//               if (newDistance < distances[neighbor]) {
//                   // Update the shortest distance to this neighbor
//                   distances[neighbor] = newDistance;
//               }
//           }
//       }
//   }

//   // Return the shortest distance from the start node to all nodes
//   return distances;
// }

// // Example: Find shortest distances from node A to all other nodes in the graph
// execute(() => dijkstra(graph, "A")); // Outputs: { A: 0, B: 1, C: 3, D: 4 }

type WeightedGraphType = Record<string, Record<string, number>>

class WeightedGraph {

  private graph: WeightedGraphType

  constructor () {
    this.graph = {}
  }
  
  print () {
    return this.graph
  }

  addEdge (key: string, value: Record<string, number>) {
    this.graph[key] = value
  }

  dijkstra(start: string): Record<string, number> {
    // start nuqtadan qolgan barcha nuqtalargacha bo'lgan eng
    // kichik masofani saqlash uchun 
    const distances: Record<string, number> = {};
  
    // tashrif buyurilgan nuqtalarni saqlash uchun
    const visited = new Set<string>();
  
    // graph keylarini massivga olamiz // ['a', 'b' ..., 'g']
    let nodes = Object.keys(this.graph);
  
    // har bir nuqta uchun boshlang'ich masofani Inifinity 
    // qilib belgilab olamiz
    for (let node of nodes) {
        distances[node] = Infinity;
    }
    
    // boshlang'ich nuqtadan o'zigacha bo'lgan masofa
    // 0 bo'lgani uchun uni 0 ga tenglaymiz
    distances[start] = 0;
  
    // barcha nodelar bo'ylab siklda aylanib chiqamiz
    while (nodes.length) {
        // nodelarni kamayish tartibida tartiblab olamiz va
        // undan eng yaqin bo'lgan nodeni olamiz
        nodes.sort((a, b) => distances[b] - distances[a]);
        let closestNode = nodes.pop()!;
  
        // agar eng yaqin nodegacha bo'lgan masoda hali ham Infinity bo'lsa,
        // u holda u siklni to'xtatamiz
        if (distances[closestNode] === Infinity) {
          break
        }
  
        // eng yaqin node'ni tashrif buyurilganlarga qo'shamiz
        visited.add(closestNode);
  
        // node'ning har bir qo'shnilari bo'ylab yurib chiqamiz
        for (let neighbor in this.graph[closestNode]) {
            // agar qo'shni node'ga hali tashrif buyurilmagan bo'lsa
            if (!visited.has(neighbor)) {
                // node'dan uning qo'shinisigacha bo'lgan masofani hisoblaymiz
                let newDistance = distances[closestNode] + this.graph[closestNode][neighbor];
                
                // agar hisoblangan masofa ayni paytdagi masofadan kichik bo'lsa
                // u holda ayni masofani o'zgartiramiz (eng kichik masofa)
                if (newDistance < distances[neighbor]) {
                    // eng kichik masofani update qilamiz
                    distances[neighbor] = newDistance;
                }
            }
        }
    }
  
    // start nuqtadan qolgan nuqtalargacha (nodelar) bo'lgan eng 
    // kichik masofalarni qaytaramiz
    return distances;
  }

  // bir nuqtadan ikkinchi nuqtagacha bo'lgan eng kichik masofa
  shortDistance (start: string, end: string): number | undefined {
    return this.dijkstra(start)[end]
  }

}

// Weighted graph instance
const weightedGraph = new WeightedGraph()

weightedGraph.addEdge('a', {b: 2, c: 1})
weightedGraph.addEdge('b', {f: 7})
weightedGraph.addEdge('c', {d: 5, e: 2})
weightedGraph.addEdge('d', {f: 2})
weightedGraph.addEdge('e', {f: 1})
weightedGraph.addEdge('f', {g: 1})
weightedGraph.addEdge('g', {})

console.log(weightedGraph.print())
// {
//   a: { b: 2, c: 1 },
//   b: { f: 7 },
//   c: { d: 5, e: 2 },
//   d: { f: 2 },
//   e: { f: 1 },
//   f: { g: 1 },
//   g: {}
// }
console.log(weightedGraph.dijkstra('a')) // { a: 0, b: 2, c: 1, d: 6, e: 3, f: 4, g: 5 }
console.log(weightedGraph.shortDistance('a', 'g')) // 5

