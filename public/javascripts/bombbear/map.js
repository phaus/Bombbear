function map(){
	var that = this;
	this.eMap = new Map(config.tileSize,config.tileSize);
	
	this.setImage = function (sprite){
		that.eMap.image = sprite;
	};
	
	this.loadMap = function (mapJSON,collisionJSON){
		that.eMap.loadData(mapJSON);
		that.eMap.collisionData = collisionJSON;
	};
	
	this.getMap = function(){
		return that;
	};
}