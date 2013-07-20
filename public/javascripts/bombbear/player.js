var Player = enchant.Class.create(enchant.Sprite, {
    initialize: function(){
        enchant.Sprite.call(this, size, size);
        this.image = game.assets['/assets/images/chara1.png'];
        this.frame = [6, 6, 7, 7];                   // set image data
        game.rootScene.addChild(this);     // add to canvas
    },

	move_direction : null
});