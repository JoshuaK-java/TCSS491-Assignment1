const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

const DEFAULT_X = 500;
const DEFAULT_Y = 470;
const GAME_WIDTH = 1344;
const GAME_HEIGHT = 768;

ASSET_MANAGER.queueDownload("./res/map/Background.png");
ASSET_MANAGER.queueDownload("./res/Player/Soldier1_Spritesheet.png");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	

	// entities
	player = new Soldier(gameEngine, DEFAULT_X, DEFAULT_Y);
	gameEngine.addEntity(player);

	function resizeCanvas() {
		 const scale = Math.min(
			window.innerWidth / GAME_WIDTH,
			window.innerHeight / GAME_HEIGHT
		);
		console.log("resizing window. scale is: " + scale);
		canvas.width = GAME_WIDTH * scale;
		canvas.height = GAME_HEIGHT * scale;
		// player.x = DEFAULT_X * scale;
		// player.y = DEFAULT_Y * scale;
		// player.animations[0][0].scale = scale;
		// player.animations[0][0].resize = true;
		

		ctx.setTransform(scale, 0, 0, scale, 0, 0);
		player.x = DEFAULT_X;
		player.y = DEFAULT_Y;
		player.scale = scale;
		//ctx.resetTransform();
	}

	window.addEventListener("resize", resizeCanvas);
	resizeCanvas();
	// canvas.width = GAME_WIDTH;
	// canvas.height = GAME_HEIGHT;
	ctx.fillStyle = "white";
	ctx.font = "20px Arial";
	ctx.fillText("hellow world", 1300, 500);

	gameEngine.init(ctx);

	gameEngine.start();
});
