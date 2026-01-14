const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Walk.png");
ASSET_MANAGER.queueDownload("./Run.png");
ASSET_MANAGER.queueDownload("./Dead.png");
ASSET_MANAGER.queueDownload("./Shot_2.png");
ASSET_MANAGER.queueDownload("./Grenade.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Soldier(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
