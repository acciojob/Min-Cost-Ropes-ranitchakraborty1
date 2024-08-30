function mincost(arr)
{ 
//write your code here
	totalCost= 0;
	while(arr.length>1){
		arr.sort((a,b)=>a-b);
		let firstSmallest = arr.shift();
		let secondSmallest = arr.shift();
		 let smallestCost = firstSmallest + secondSmallest;
		arr.push(smallestCost);
		totalCost += smallestCost;
	}
// return the min cost
  return (totalCost);
}

module.exports=mincost;
