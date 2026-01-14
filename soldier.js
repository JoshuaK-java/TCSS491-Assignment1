class Soldier {
    constructor(game) {
        this.game = game;
        this.animator1 = new Animator(ASSET_MANAGER.getAsset("./Walk.png"), 0, 60, 128, 128, 7, 0.2);
        this.animator2 = new Animator(ASSET_MANAGER.getAsset("./Run.png"), 0, 60, 128, 128, 8, 0.07);
        this.animator3 = new Animator(ASSET_MANAGER.getAsset("./Dead.png"), 0, 60, 128, 128, 4, 0.2);
        this.animator4 = new Animator(ASSET_MANAGER.getAsset("./Shot_2.png"), 0, 60, 128, 128, 4, 0.16);
        this.animator5 = new Animator(ASSET_MANAGER.getAsset("./Grenade.png"), 0, 0, 128, 128, 16, 0.2);

        this.x = 0;
        this.y = 0;
        this.speed = 100

        // testing 
        this.x2 = 0;
        this.y2 = 200;
        this.x3 = 500;
        this.y3 = 400;
        this.x4 = 100;
        this.y4 = 400;
        this.x5 = 100;
        this.y5 = 600;
        // testing ^^^
        
    };

    update() {
        this.x += this.speed*this.game.clockTick;
        if(this.x > 1024) this.x = 0;

        this.x2 += this.speed*2*this.game.clockTick;
        if(this.x2 > 1024) this.x2 = 0;

        // this.c += this.speed*this.game.clockTick;
        // if(this.c > 1024) this.c = 0;
    };

    draw(ctx) {
        this.animator1.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        this.animator2.drawFrame(this.game.clockTick, ctx, this.x2, this.y2);
        this.animator3.drawFrame(this.game.clockTick, ctx, this.x3, this.y3);
        this.animator4.drawFrame(this.game.clockTick, ctx, this.x4, this.y4);
        this.animator5.drawFrame(this.game.clockTick, ctx, this.x5, this.y5);
    };
};