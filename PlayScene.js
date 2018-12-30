class PlayScene extends Phaser.Scene{

    constructor(){
        super({key : "play",
        physics : {
            system : "impact",
            gravity : 100}
        });
    }

    preload(){
        this.load.image("tile_image", 'jungle tileset.png');
        this.load.tilemapTiledJSON("map", "game_map.json");
        this.load.spritesheet('run_sheet','run.png',{frameWidth : 21, frameHeight : 33});
    }

    create(){
        this.player = this.add.sprite(100, 100, 'run_sheet');
        var map = this.add.tilemap("map");
        var tileset = map.addTilesetImage("jungle_Tiles", "tile_image");
        var layer = map.createStaticLayer("main", tileset);
        console.log(map);
        var items = map.createFromObjects("items", 3 ,{}, this);
        console.log(items);
        
    }
}