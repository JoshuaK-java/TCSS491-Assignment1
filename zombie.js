class Zombie {
    constructor(game) {
        this.game = game;

        this.x = 100
        this.y = 100
        this.speed = 100

        // zombie state variables
        this.action = 0; // 0 = Idle, 1 = walk, 2 = sprint, 3 = meelee, 4 = accurate fire, 5 = rapid fire, 6 = reload, 7 = hurt, 8 = grenade, 9 = explosion, 10 = dead
        this.facing = 0; // 0 = right, 1 = left
        this.dead = false;

        // dk what to use this for yet
        this.velocity = {x:0, y:0};
        this.fallAcc = 562.5

        // the zombie's animations
        this.animations = [];
        this.loadAnimations();

        // testing 
        this.x2 = 0;
        this.y2 = 200;

        this.x3 = 500;
        this.y3 = 400;

        this.x4 = 100;
        this.y4 = 400;

        this.x5 = 100;
        this.y5 = 600;

        this.x6 = 600;
        this.y6 = 600;

        this.x7 = 700;
        this.y7 = 600;

        this.x8 = 600;
        this.y8 = 700;

        this.x9 = 800;
        this.y9 = 600;

        this.x10 = 900;
        this.y10 = 600;

        this.x11 = 950;
        this.y11 = 700;

        this.x12 = 800;
        this.y12 = 800;
        // testing ^^^
        
    };

    loadAnimations() {
        for (var i = 0; i < 11; i ++) { // 11 states
            this.animations.push([]);
            for (var j = 0; j < 2; j++) { // 2 directions
                this.animations[i].push([]);
            }
        }
        //0 = Idle, 1 = walk, 2 = sprint, 3 = meelee, 4 = accurate fire, 5 = rapid fire, 6 = reload, 7 = hurt, 8 = grenade, 9 = explosion, 10 = dead

        // ############### Idle animations for state = 0 ########################
        this.animations[0][0] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 1152, 128, 128, 128, 7, 0.2); // Facing right
        this.animations[0][1] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 1152, 128, 128, 128, 7, 0.2); // Facing left

        // ############### Walk animations for state = 1 ########################
        this.animations[1][0] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 1152, 256, 128, 128, 7, 0.2); // Facing right
        this.animations[1][1] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 1152, 128, 128, 128, 7, 0.2); // Facing left

        // ############### Sprint animations for state = 2 ########################
        this.animations[2][0] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 0, 384, 128, 128, 8, 0.07); // Facing right
        this.animations[2][1] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 1152, 128, 128, 128, 7, 0.2); // Facing left

        // ############### meelee animations for state = 3 ########################
        this.animations[3][0] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 1664, 0, 128, 128, 3, 0.15); // Facing right
        this.animations[3][1] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 1152, 128, 128, 128, 7, 0.2); // Facing left

        // ############### accurate fire animations for state = 4 ########################
        this.animations[4][0] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 0, 512, 128, 128, 4, 0.06); // Facing right
        this.animations[4][1] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 1152, 128, 128, 128, 7, 0.2); // Facing left

        // ############### rapid fire animations for state = 5 ########################
        this.animations[5][0] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 512, 512, 128, 128, 4, 0.16); // Facing right
        this.animations[5][1] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 1152, 128, 128, 128, 7, 0.2); // Facing left

        // ############### reload animations for state = 6 ########################
        this.animations[6][0] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 0, 0, 128, 128, 13, 0.2);     // Facing right
        this.animations[6][1] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 1152, 128, 128, 128, 7, 0.2); // Facing left

        // ############### hurt animations for state = 7 ########################
        this.animations[7][0] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 1543, 384, 128, 128, 3, 0.4); // Facing right
        this.animations[7][1] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 1152, 128, 128, 128, 7, 0.2); // Facing left

        // ############### grenade animations for state = 8 ########################
        this.animations[8][0] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 0, 256, 128, 128, 9, 0.2);    // Facing right
        this.animations[8][1] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 1152, 128, 128, 128, 7, 0.2); // Facing left

        // ############### explosion animations for state = 9 ########################
        this.animations[9][0] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 0, 128, 128, 128, 9, 0.15);   // Facing right
        this.animations[9][1] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 1152, 128, 128, 128, 7, 0.2); // Facing left

        // ############### dead animations for state = 10 ########################
        this.animations[10][0] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 1031, 384, 128, 128, 4, 0.2); // Facing right
        this.animations[10][1] = new Animator(ASSET_MANAGER.getAsset("./res/Player/Soldier1_Spritesheet.png"), 1152, 128, 128, 128, 7, 0.2); // Facing left

    };

    update(keys) {
        this.action = 0; // default to idle
        
        if (keys["ShiftLeft"] && keys["KeyA"]) {
            this.x -= 4;
            this.facing = 1;
            this.action = 1; // walking
        } else if (keys["KeyA"]) {
            this.x -= 2;
            this.facing = 1;
            this.action = 2; // sprinting
        }
        if (keys["ShiftLeft"] && keys["KeyD"]) {
            this.x += 4;
            this.facing = 0;
            this.action = 2; // walking
        } else if (keys["KeyD"]) {
            this.x += 2;
            this.facing = 0;
            this.action = 1; // sprinting
        }
        if (keys["KeyQ"]) {
            this.action = 3; // meelee
        }
        if (keys["KeyR"]) {
            this.action = 6; // reload
        }
        if (keys["KeyG"]) {
            this.action = 8; // meelee
        }
        
        // if (keys["ArrowUp"]) {
        //     this.y -= 5;
        // }
        // if (keys["ArrowDown"]) {
        //     this.y += 5;
        // }

        //put this in html later
        // background-image: url(res/map/SmashBrosBackground.png);
        // background-size: cover;
        // background-repeat: no-repeat;
        // background-position: center;
    };

    draw(ctx) {
        if (this.dead) {
            this.animations[10][0].drawFrame(this.game.clockTick, ctx, this.x, this.y);
        } else {
            this.animations[this.action][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y);
        }

        // ############################## testing ##################################
        // this.animations[0][0].drawFrame(this.game.clockTick, ctx, this.x, this.y);
        // this.animations[1][0].drawFrame(this.game.clockTick, ctx, this.x2, this.y2);
        // this.animations[2][0].drawFrame(this.game.clockTick, ctx, this.x3, this.y3);
        // this.animations[3][0].drawFrame(this.game.clockTick, ctx, this.x4, this.y4);
        // this.animations[4][0].drawFrame(this.game.clockTick, ctx, this.x6, this.y6);
        // this.animations[5][0].drawFrame(this.game.clockTick, ctx, this.x7, this.y7);
        // this.animations[6][0].drawFrame(this.game.clockTick, ctx, this.x8, this.y8);
        // this.animations[7][0].drawFrame(this.game.clockTick, ctx, this.x9, this.y9);
        // this.animations[8][0].drawFrame(this.game.clockTick, ctx, this.x10, this.y10);
        // this.animations[9][0].drawFrame(this.game.clockTick, ctx, this.x11, this.y11);
        // this.animations[10][0].drawFrame(this.game.clockTick, ctx, this.x12, this.y12);
        // ############################## testing ##################################
    };
};