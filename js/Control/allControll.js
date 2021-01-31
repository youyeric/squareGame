function createInitialScene(){
	//set all layer height and width
	loadViewSet();
	//make tiles
	loadTilesModel();
	//loadTilesModel();
	//make tile on view
	 makeTilesOnView(5,9);
	//create player info view
	createPlayInfo_View(); 
}