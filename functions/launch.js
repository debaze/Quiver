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
		setTimeout(function() {hide(Game.UI.wrapper.loading)}, 1000);
		pause() // enabling pause menu
	}
}