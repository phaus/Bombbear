var Player = enchant.Class.create(enchant.Sprite, {
    initialize: function(){
        enchant.Sprite.call(this, config.tileSize, config.tileSize);
        this.image = game.assets['/assets/images/chara1.png'];
        this.frame = [6, 6, 7, 7];                   // set image data
        scene.addChild(this);     // add to canvas
    },

	move_direction : null
});