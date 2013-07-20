enchant(); // initialize
var game = null ;
var map = null;

game = new Core(config.screenWidth, config.screenHeight); // game stage
game.preload('/assets/images/chara1.png'); // preload image
game.preload('/assets/images/map0.png'); // preload image

game.fps = 20;

game.onload = function () {
	try {
	map = new gamemap();
	map.setImage(game.assets['/assets/images/map0.png']);
	
	$.getJSON("assets/maps.json",function (data){
		
		map.loadMapJSON(data);

		var scene = new Scene();
		scene.addChild(map.eMap);
		game.pushScene(scene);
		  
	
	});
	} catch (e){
		console.log(e.stack);
	}
  };
  
