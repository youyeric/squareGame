var tileSize = 50;
var tileBoard = 54;
var tilePoint = 0;
var t_color =["#000000","#0f0f0f"];
var tiles = [];

function Tile(x,y,num,color){
	this.pX = x;
	this.pY = y;
	this.num = num;
	this.color = color;
}