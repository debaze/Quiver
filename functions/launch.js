function launch(backup) {
	var isLoaded = false;

	// opening loading screen
	show(Game.UI.wrapper.loading);

	// init
	if (Backup.player.level === 0) isLoaded = init(isLoaded, lvl_0);
	else if (Backup.player.level === 1) isLoaded = init(isLoaded, lvl_1);
	else if (Backup.player.level === 2) isLoaded = init(isLoaded, lvl_2);
	// opening the game when fully loaded
	if (isLoaded) {
		show(Game.UI.wrapper.game, "flex");
		hide(Game.UI.wrapper.main);
		setTimeout(function() {hide(Game.UI.wrapper.loading)}, 1000);
		pause() // enabling pause menu
	}
}