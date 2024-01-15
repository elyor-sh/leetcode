import { execute } from "./helpers/performance";
import {canFinish} from "./solutions/207.canFinish";

function find(edge:number,parents:Array<number>){
  if(parents[edge]===edge){
      return edge;
  }
      
  return find(parents[edge],parents)   
}
function findRedundantConnection(edges: number[][]): number[] {
  let n=edges.length;
  const parents=new Array(n+1);
  
  for(let index=0;index<n;index++){
       parents[index]=index
  }
  
  for(const edge of edges){
      let u=find(edge[0],parents)
      let v=find(edge[1],parents)

      if(u===v){
          return edge
          
      }
      parents[v]=u
      
  }
  
  return []
};

execute(() => findRedundantConnection([[1,2],[1,3],[2,3]]));