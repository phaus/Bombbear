enchant(); // initialize
var game = null ;
var map = null;
var scene = null;
var player = null;

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

		scene = new Scene();
		scene.addChild(map.eMap);
		game.pushScene(scene);
		gameLoop();
	
	});
	} catch (e){
		console.log(e.stack);
	}
  };
  
  
  function gameLoop(){
	  player = new Player(); 
	  
	  game.currentScene.on('downbuttondown', function(evt){
	    	move_direction=('down');
	    	move(config.tileSize);
	    });
	  game.currentScene.on('downbuttonup', function(evt){
	    	move_direction='stop';
	    	move(config.tileSize);
	    	//move_finish('down');
	    });
	  game.currentScene.on('upbuttondown', function(evt){
	    	
	    	move_direction=('up'); 
	    	move(config.tileSize);
	    });
	  game.currentScene.on('upbuttonup', function(evt){
	    	move_direction='stop';
	    	move(config.tileSize);
	    	//move_finish('up');
	    });
	    
	    
	  game.currentScene.on('leftbuttondown', function(evt){
	    	move_direction=('left');
	    	move(config.tileSize);
	    });
	  game.currentScene.on('leftbuttonup', function(evt){
	    	move_direction='stop';
	    	move(config.tileSize);
	    	//move_finish('left');
	    });
	  game.currentScene.on('rightbuttondown', function(evt){
	    	
	    	move_direction=('right');
	    	move(config.tileSize);
	    	
	    });
	  game.currentScene.on('rightbuttonup', function(evt){
	    	move_direction='stop';
	    	move(config.tileSize);
	    	//move_finish('right');
	    });
	    
	    function move(movement){
	    	
	    	//bear.tl.resume();
	    	switch (move_direction){
	    		case 'up':{
	    			//if (bear.y % size == 0)  movement = size ; else movement = size - bear.y % size;
	    			//if (map.hitTest(bear.x,bear.y-size) !== true ) bear.tl.moveBy(0,- size,4) ;
	    			if (map.eMap.hitTest(player.x,player.y-config.tileSize) !== true ) player.tl.moveBy(0,-config.tileSize,5) ;
	    			break;
	    		}
	    		case 'down':{
	    			//if (bear.y % size == 0)  movement = size ; else movement = size - bear.y % size;
	    			//if (map.hitTest(bear.x,bear.y+size) !== true ) bear.tl.moveBy(0,size,4) ;
	    			if (map.eMap.hitTest(player.x,player.y+config.tileSize) !== true ) player.tl.moveBy(0,config.tileSize,5) ;
	    			break;
	    		}
	    		case 'left':{
	    			//if (bear.x % size == 0)  movement = size ; else movement = size - bear.x % size;
	    			//if (map.hitTest(bear.x-size,bear.y) !== true ) bear.tl.scaleTo(-1, 1, 1).moveBy(-size,0,4) ;
	    			if (map.eMap.hitTest(player.x-config.tileSize,player.y) !== true ) player.tl.scaleTo(-1, 1, 1).moveBy(-config.tileSize,0,5) ;
	    			break;
	    		}
	    		case 'right':{
	    			//if (bear.x % size == 0)  movement = size ; else movement = size - bear.x % size;
	    			//if (map.hitTest(bear.x+size,bear.y) !== true ) bear.tl.scaleTo(1, 1, 1).moveBy(size,0,4) ;
	    			if (map.eMap.hitTest(player.x+config.tileSize,player.y) !== true ) player.tl.scaleTo(1, 1, 1).moveBy(config.tileSize,0,5) ;
	    			break;
	    		}
	    		case 'stop':{
	    			player.tl.clear();
	    			break;
	    		}
	    	}
	    	//console.log(player);
	    	//console.log(config);
	    }
	    
	    function move_finish(direction){
	    	
	    	var movement = config.tileSize;
	    	switch (direction){
	    		case 'up':{
	    			if (player.y % config.tileSize == 0)  movement = config.tileSize ; else movement = config.tileSize - player.y % config.tileSize;
	    			if (map.eMap.hitTest(player.x,player.y-config.tileSize) !== true ) player.tl.moveBy(0,- movement,0) ;
	    			break;
	    		}
	    		case 'down':{
	    			if (player.y % config.tileSize == 0)  movement = config.tileSize ; else movement = config.tileSize - player.y % config.tileSize;
	    			if (map.eMap.hitTest(player.x,player.y+config.tileSize) !== true ) player.tl.moveBy(0,movement,0) ;
	    			break;
	    		}
	    		case 'left':{
	    			if (player.x % config.tileSize == 0)  movement = config.tileSize ; else movement = config.tileSize - player.x % config.tileSize;
	    			if (map.eMap.eMap.hitTest(player.x-config.tileSize,player.y) !== true ) player.tl.scaleTo(-1, 1, 1).moveBy(-movement,0,0) ;
	    			break;
	    		}
	    		case 'right':{
	    			if (player.x % config.tileSize == 0)  movement = config.tileSize ; else movement = config.tileSize - player.x % config.tileSize;
	    			if (map.eMap.hitTest(player.x+config.tileSize,player.y) !== true ) player.tl.scaleTo(1, 1, 1).moveBy(movement,0,0) ;
	    			break;
	    		}
	    		
	    	}
	    }
	    
  }
  
