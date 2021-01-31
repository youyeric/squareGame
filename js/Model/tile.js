var tileSize = 50;
var tileBoard = 54;
var tilePoint = 0;
var t_color =["#000000","#666666","#ffffff"];
var tiles = [];
var numInitialMap = [16,32,64,32,16,8,4,16,4,8,4,8,4,8,4,2,2,4,2,2,2,2,0];
var testPlayer = ["Eric","Nick"];

function Tile(x,y,num,color,player){
	this.pX = x;
	this.pY = y;
	this.num = num;
	this.numPoint = function(){
		var n = this.num;
		var count = 0;
		while(parseInt(n)!=0){
		//console.log(n = n/10);
			n = parseInt(n/10);
			count++;
		}
		return count - 1;
	};
	this.color = color;
	this.player = player;
}
function Player(id, name, color){
	this.id = id;
	this.name = name;
	this.color = color;
	this.getScore = function(){};
	this.getTilesCount = function(){};
}
function loadTilesModel(){
	var i = 0;
	for(;i < numInitialMap.length;i++){
		if(numInitialMap[i]){
			tiles.push(new Tile(0,0,numInitialMap[i],t_color[0],testPlayer[0]));	
		}
		else{
			tiles.push(new Tile(0,0,numInitialMap[i],t_color[2],""));		
		}
	}
	for (var i = numInitialMap.length - 2; i >= 0; i--) {
		tiles.push(new Tile(0,0,numInitialMap[i],t_color[1],testPlayer[1]));	
	}
}
function setNumPoint(){
	for(var i = 0;i<tiles.length;i++){
		tiles[i].numPoint = getNumPoint(tiles[i].num);
	}
}
function getNumPoint(num){
	var n = num;
	var count = 0;
	while(parseInt(n)!=0){
		//console.log(n = n/10);
		n = parseInt(n/10);
		count++;
	}
	return (count - 1)*numMathPx;
}
