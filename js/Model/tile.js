var tileSize = 50;
var tileBoard = 54;
var tilePoint = 0;
var t_color =["#000000","#0f0f0f"];
var tiles = [];
function createTile(tilePx,tilePy){
	ctx_l1.beginPath();
	ctx_l1.rect(0, 0, 54, 54);
	ctx_l1.strokeStyle = "rgba(0, 0, 0, 0.5)";
	ctx_l1.stroke();
	ctx_l1.closePath();


	ctx_l1.beginPath();
	ctx_l1.rect(0+2, 0+2, 50, 50);
	ctx_l1.fillStyle = "#000000";
	ctx_l1.fill();
	ctx_l1.closePath();
}

function makeTiles(scale){
	for(var i = 0, i < scale, i++){
		for(var j = 0, j < scale, j++){
			createTile(i*tileBoard, j*tileBoard);
		}
	}
}
function Tile(x,y,num,color){
	this.pX = x;
	this.pY = y;
	this.num = num;
	this.color = color;
}