function launch(backup) {
	var isLoaded = false,
		menu_main = select(".menu-main"),
		loading = select(".game-loading"),
		game = select(".game");

	// opening loading screen
	show(loading);

	// init
	isLoaded = init(isLoaded);
	// opening the game when fully loaded
	if (isLoaded) {
		show(game, "flex");
		hide(menu_main);
		hide(loading);
		// enabling pause menu
		pause()
	}
}