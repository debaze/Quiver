function quit_game() {
	var quit_game = select(".section-quit_game"),
		quit_gameContent = select(".section-quit_game content");

	// opening window
	show(quit_game);
	show(quit_gameContent);

	// closing with echap key
	window.onkeydown = function(e) {
		switch (e.keyCode) {
			case 27: // echap
				if (quit_game.style.display == "block") {
					hide(quit_gameContent);
					hide(quit_game)
				}
				break
		}
	}

	// closing with button
	select(".section-quit_game content .btn-cancel").onclick = function() {
		// closing
		hide(quit_gameContent);
		hide(quit_game)
	}

	// exiting the game (hmm yeah)
	select(".section-quit_game content .btn-ok").onclick = function() {quit(quit_game, quit_gameContent)}
}