$.getScript("/assets/javascripts/bombbear/config.js");
$.getScript("/assets/javascripts/bombbear/map.js");
$.getScript("/assets/javascripts/bombbear/player.js");

var game = new Core(800, 600); // game stage

$(document).ready(function() {
	
	enchant(); // initialize
    
    game.preload('/assets/images/chara1.png'); // preload image
    game.preload('/assets/images/map0.png'); // preload image
    game.fps = 20;
    
    
    game.rootScene.on('downbuttondown', function(evt){
    	move_direction=('down');
    	move();
    });
    game.rootScene.on('downbuttonup', function(evt){
    	move_direction='stop';
    	move();
    	//move_finish('down');
    });
    game.rootScene.on('upbuttondown', function(evt){
    	
    	move_direction=('up'); 
    	move();
    });
    game.rootScene.on('upbuttonup', function(evt){
    	move_direction='stop';
    	move();
    	//move_finish('up');
    });
    
    
    game.rootScene.on('leftbuttondown', function(evt){
    	move_direction=('left');
    	move(size);
    });
    game.rootScene.on('leftbuttonup', function(evt){
    	move_direction='stop';
    	move(size);
    	//move_finish('left');
    });
    game.rootScene.on('rightbuttondown', function(evt){
    	
    	move_direction=('right');
    	move(size);
    	
    });
    game.rootScene.on('rightbuttonup', function(evt){
    	move_direction='stop';
    	move(size);
    	//move_finish('right');
    });
    
    function move(movement){
    	
    	bear.tl.resume();
    	switch (move_direction){
    		case 'up':{
    			//if (bear.y % size == 0)  movement = size ; else movement = size - bear.y % size;
    			//if (map.hitTest(bear.x,bear.y-size) !== true ) bear.tl.moveBy(0,- size,4) ;
    			if (map.hitTest(bear.x,bear.y-size) !== true ) bear.tl.moveY(- size,4) ;
    			break;
    		}
    		case 'down':{
    			//if (bear.y % size == 0)  movement = size ; else movement = size - bear.y % size;
    			//if (map.hitTest(bear.x,bear.y+size) !== true ) bear.tl.moveBy(0,size,4) ;
    			if (map.hitTest(bear.x,bear.y+size) !== true ) bear.tl.moveY(size,4) ;
    			break;
    		}
    		case 'left':{
    			//if (bear.x % size == 0)  movement = size ; else movement = size - bear.x % size;
    			//if (map.hitTest(bear.x-size,bear.y) !== true ) bear.tl.scaleTo(-1, 1, 1).moveBy(-size,0,4) ;
    			if (map.hitTest(bear.offsetX-size,bear.y) !== true ) bear.tl.scaleTo(-1, 1, 1).moveX(-size+bear.offsetX,5) ;
    			break;
    		}
    		case 'right':{
    			//if (bear.x % size == 0)  movement = size ; else movement = size - bear.x % size;
    			//if (map.hitTest(bear.x+size,bear.y) !== true ) bear.tl.scaleTo(1, 1, 1).moveBy(size,0,4) ;
    			if (map.hitTest(bear.offsetX+size,bear.y) !== true ) bear.tl.scaleTo(1, 1, 1).moveX(size+bear.offsetX,5) ;
    			break;
    		}
    		case 'stop':{
    			//bear.tl.clear();
    			break;
    		}
    	}
    	console.log(bear);
    }
    
    function move_finish(direction){
    	
    	var movement = size;
    	switch (direction){
    		case 'up':{
    			if (bear.y % size == 0)  movement = size ; else movement = size - bear.y % size;
    			if (map.hitTest(bear.x,bear.y-size) !== true ) bear.tl.moveBy(0,- movement,0) ;
    			break;
    		}
    		case 'down':{
    			if (bear.y % size == 0)  movement = size ; else movement = size - bear.y % size;
    			if (map.hitTest(bear.x,bear.y+size) !== true ) bear.tl.moveBy(0,movement,0) ;
    			break;
    		}
    		case 'left':{
    			if (bear.x % size == 0)  movement = size ; else movement = size - bear.x % size;
    			if (map.hitTest(bear.x-size,bear.y) !== true ) bear.tl.scaleTo(-1, 1, 1).moveBy(-movement,0,0) ;
    			break;
    		}
    		case 'right':{
    			if (bear.x % size == 0)  movement = size ; else movement = size - bear.x % size;
    			if (map.hitTest(bear.x+size,bear.y) !== true ) bear.tl.scaleTo(1, 1, 1).moveBy(movement,0,0) ;
    			break;
    		}
    		
    	}
    }
    
    
    
    game.start(); // start your game!
    var bear = new Sprite(32, 32);  
    
    var player = new Player();
    
   // game.rootScene.on('touchmove', function(evt){
    //    player.y = evt.localY;    // set position to touch-y position
   // });
    function buttonclick(){
    	console.log("ububbu");
    	var map = new Map(32, 32);
    	map.image = game.assets['/assets/images/map0.png'];
    	  var map2 = [
    	  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    	  [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    	  [  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,  0],
    	  [  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0],
    	  [  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0],
    	  [  0,  2,  2,  1,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0],
    	  [  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0],
    	  [  0,  2,  2,  1,  2,  2,  2,  2,  1,  1,  2,  2,  2,  2,  2,  0],
    	  [  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0],
    	  [  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0],
    	  [  0,  2,  2,  1,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0],
    	  [  0,  2,  2,  2,  2,  2,  1,  2,  2,  2,  1,  2,  2,  2,  0,  0],
    	  [  0,  2,  2,  1,  2,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    	  [  0,  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    	  [  0,  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    	  [  0,  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
    	];
    	map.loadData(map2);
    	 var scene = new Scene();
    	  scene.addChild(map);
    	  
    	   game.currentScene.removeChild(map);
    	  game.currentScene.addChild(map);
    	  game.currentScene.addChild(bear);
    	//game.currentScene.addChild(c);
    	}
});