
function minCost(cost){
    var maxCons = 100;
    var array = [];
    for(var i = 0; i < cost.length; i++){
    for(var j =0; j < cost[i].length; j++){
    if(cost[i][j] < maxCons && array[i-1] !== cost[i][j]){
    array[i] = cost[i][j];
    maxCons = cost[i][j];
    }
    }
    maxCons = 100;
    }
    const mincostreduced = array.reduce((total,number) => total + number);
    return `The minimum cost is ` +  mincostreduced;
    }
    minCost([[1, 2, 3], [1, 2, 3], [3, 3, 1]]);
