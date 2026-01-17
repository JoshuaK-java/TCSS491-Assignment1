const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

const GAME_WIDTH = 1344;
const GAME_HEIGHT = 768;

ASSET_MANAGER.queueDownload("./res/map/Background.png");
ASSET_MANAGER.queueDownload("./res/Player/Soldier1_Spritesheet.png");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;



	function resizeCanvas() {
		const scale = Math.min(
			window.innerWidth / GAME_WIDTH,
			window.innerHeight / GAME_HEIGHT
		);
		canvas.width = GAME_WIDTH * scale;
		canvas.height = GAME_HEIGHT * scale;

		ctx.setTransform(scale, 0, 0, scale, 0, 0);
		ctx.resetTransform();
	}

	window.addEventListener("resize", resizeCanvas);
	resizeCanvas();

	gameEngine.addEntity(new Soldier(gameEngine));
	//gameEngine.addEntity(new Zombie(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
