//tileView attr
var tileSize = 50;
var tileBoard = 54;
var tilePoint = 0;
var tileCenterP = 0;
var t_color =["#000000","#0f0f0f"];
var tiles = [];
var fontS = 30;
var fontPx = 20;
var fontPy = 40;
var numMathPx = 0;
//Layer_BG set
var canvasBackground = document.getElementById("canvas_background");
var ctx_bg = canvasBackground.getContext("2d");

//Layer_First set
var canvasL1 = document.getElementById("canvas_layerFirst");
var ctx_l1 = canvasL1.getContext("2d");

//Layer_Sec_Animate set
var canvasL2 = document.getElementById("canvas_layerSecond");
var ctx_l2 = canvasL2.getContext("2d");

//Layer_Top_userTrigger set
var canvasTop = document.getElementById("canvas_foreground");
var ctx_top = canvasTop.getContext("2d");

//load scene setting
function loadViewSet(){
		clearAll();
		var b = parseInt(screen.width/screen.height);
		var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
		canvasBackground.width = width;
		canvasBackground.height = height;
		ctx_bg.fillStyle = "#bfb";
		canvasL1.width = width;
		canvasL1.height = height;
		canvasL2.width = width;
		canvasL2.height = height;
		canvasTop.width = width;
		canvasTop.height = height;	
		if(b){
			 tileSize = 50;
			 tileBoard = 54;
			tilePoint = 100;
			fontS = 30;
			fontPx = 20;
			fontPy = 40;
			numMathPx = 10;
		}	
		else{
			tileSize = 100;
			tileBoard = 104;
			tilePoint = 150;
			fontS = 60;
			fontPx = 40;
			fontPy = 80;
			numMathPx = 20;
		}
		tileCenterP = (width - (tileBoard*5))/2;
}

//basal method
function createTile_View(tilePx,tilePy,num,fontnumX,color){
	var path = new Path2D();
	path.rect(tilePx + tileCenterP, tilePy + tilePoint, tileBoard, tileBoard);
	ctx_l1.strokeStyle = "rgba(0, 0, 0, 0.5)";
	ctx_l1.stroke(path);


	ctx_l1.beginPath();
	ctx_l1.rect(tilePx+tileCenterP+2, tilePy+2+tilePoint, tileSize, tileSize);
	ctx_l1.fillStyle = color;
	ctx_l1.fill();
	ctx_l1.closePath();

	ctx_l1.font = fontS+"px Arial";
	ctx_l1.fillStyle = "white";
	ctx_l1.fillText(num, tilePx + tileCenterP + fontPx - (numMathPx*fontnumX), tilePy+fontPy+tilePoint);
}

function makeTilesOnView(scaleX,scaleY){
	for(var i = 0; i < scaleY; i++){
		for(var j = 0; j < scaleX; j++){
			tiles[5*i+j].pX = j*tileBoard;
			tiles[5*i+j].pY = i*tileBoard;
			createTile_View(j*tileBoard, i*tileBoard,tiles[5*i+j].num,tiles[5*i+j].numPoint(),tiles[5*i+j].color);
		}
	}
}

//make initial scene

//screen resize
//clear canvas
function clearAll(){
	ctx_bg.clearRect(0, 0, canvasBackground.width, canvasBackground.height);
	ctx_l1.clearRect(0, 0, canvasBackground.width, canvasBackground.height);
	ctx_l2.clearRect(0, 0, canvasBackground.width, canvasBackground.height);
	ctx_top.clearRect(0, 0, canvasBackground.width, canvasBackground.height);
}
function resizeView(){
	loadViewSet();
	makeTilesOnView(5,9);
}
