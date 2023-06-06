class Intro extends Phaser.Scene {
    constructor(){
        super('intro');
    }

    preload(){

        
    }
    create() {
        this.add.text(610,50, "Cinematic").setFontSize(100);
        this.add.text(0,500, "Cinematic stuff \n goes here").setFontSize(150);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('intro'));
        });
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro],
    title: "cinematics",
});