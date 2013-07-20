


 

$(document).ready(function() {
	//$.getScript("/assets/javascripts/bombbear/config.js");
	//$.getScript("/assets/javascripts/bombbear/gamemap.js");
	//$.getScript("/assets/javascripts/bombbear/player.js");
	
	


	
	game.start();
	  
	  
    /*
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
    
    
    
    
    var bear = new Sprite(32, 32);  
    
    var player = new Player();
    
   // game.rootScene.on('touchmove', function(evt){
    //    player.y = evt.localY;    // set position to touch-y position
   // });
    */
	//$("button#testclick").html("Blubb").click(function(){
		//enchant();
		
		
		   
		  
		  //game.currentScene.addChild(bear);
		   // start your game!
		//game.currentScene.addChild(c);
	//	});
});
