var tileSize = 50;
var tileBoard = 54;
var tilePoint = 0;
var t_color =["#000000","#0f0f0f"];
var tiles = [];
function createTile(tilePx,tilePy){
	ctx.beginPath();
	ctx.rect(tilePx, tilePy, tileBoard, tileBoard);
	ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
	ctx.stroke();
	ctx.closePath();


	ctx.beginPath();
	ctx.rect(tilePx+2, tilePy+2, tileSize, tileSize);
	ctx.fillStyle = "#000000";
	ctx.fill();
	ctx.closePath();
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