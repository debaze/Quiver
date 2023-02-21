function pause() {
	var pause_menu = Game.UI.wrapper.pause.querySelector(".menu");

	// opening/closing menu
	window.addEventListener("keydown", function(e) {
		switch (e.keyCode) {
			case 27: // echap
				if (Game.UI.wrapper.pause.style.display === "block") hide(Game.UI.wrapper.pause);
				else show(Game.UI.wrapper.pause);
				break
		}
	}, false);

	pause_menu.querySelector("#btn-continue").onclick = function() {hide(Game.UI.wrapper.pause)};
	pause_menu.querySelector("#btn-save").onclick = save;
	pause_menu.querySelector(".btn-options").onclick = options;
	pause_menu.querySelector("#btn-quit_game").onclick = quit_game
}