function launch(backup) {
	var isLoaded = false;

	// opening loading screen
	show(Game.UI.wrapper.loading);

	// init
	isLoaded = init(isLoaded);
	// opening the game when fully loaded
	if (isLoaded) {
		show(Game.UI.wrapper.game, "flex");
		hide(Game.UI.wrapper.main);
		hide(Game.UI.wrapper.loading);
		// enabling pause menu
		pause()
	}
}