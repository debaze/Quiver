function pause() {
	var pause = select(".menu-pause"),
		pauseMenu = pause.querySelector(".menu");

	// opening/closing menu
	window.addEventListener("keydown", function(e) {
		switch (e.keyCode) {
			case 27: // echap
				if (pause.style.display == "block") hide(pause);
				else show(pause);
				break
		}
	}, false);

	pauseMenu.querySelector("#btn-continue").onclick = function() {hide(pause)};
	pauseMenu.querySelector("#btn-save").onclick = save;
	pauseMenu.querySelector(".btn-options").onclick = options;
	pauseMenu.querySelector("#btn-quit_game").onclick = quit_game
}