class MenuScene extends Phaser.Scene{


    constructor(){
        super({key : "menu"});
    }

    preload(){
        
    }

    create(){
        this.scene.switch('play');
    }
}