function gamemap(){
	//var that = this;
	
	this.eMap;
	
	this.setImage = function (sprite){
		this.eMap = new Map(config.tileSize,config.tileSize);
		this.eMap.image = sprite;
		
	};
	
	this.loadMap = function (map,collision){
		this.eMap.loadData(map);
		this.eMap.collisionData = collision;
	};
	
	this.loadMapJSON = function(data){
		
		this.loadMap(data.fieldMap, data.colMap);
	};
	
	this.getMap = function(){
		return this.eMap;
	};
}