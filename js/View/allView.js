//tileView attr
var tileSize = 50;
var tileBoard = 54;
var tilePoint = 0;
var t_color =["#000000","#0f0f0f"];
var tiles = [];
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


//basal method
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

//make initial scene
function createScene(){
	//set all layer height and width
	canvasBackground.width = document.body.clientWidth;
	canvasBackground.height = screen.height;
	canvasL1.width = document.body.clientWidth;
	canvasL1.height = screen.height;
	canvasL2.width = document.body.clientWidth;
	canvasL2.height = screen.height;
	canvasTop.width = document.body.clientWidth;
	canvasTop.height = screen.height;
	//make tiles
	
}