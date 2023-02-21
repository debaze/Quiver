function new_game() {
	var new_game = select(".section-new_game"),
		new_gameContent = select(".section-new_game content"),
		step_01 = select(".section-new_game content .step_01"),
		step_02 = select(".section-new_game content .step_02");

	// opening window
	show(new_game);
	show(new_gameContent);

	// steap 1 initializing
	show(step_01);

	// step 1 info collect & step 2 initializing
	select(".section-new_game content .step_01 .btn-next").onclick = function() {
		// recovering step 1 data
		Backup.name = select(".section-new_game content .step_01 #game_name").value;
		Backup.player.nickname = select(".section-new_game content .step_01 #player_nickname").value;
		// hiding step 1 & showing step 2
		hide(step_01);
		show(step_02);
		// selecting a class
		step_02.querySelectorAll(".btn-class").forEach(function(e) {
			e.onclick = function() {
				Backup.player.class = this.innerHTML;
				step_02.querySelectorAll(".btn-class").forEach(function(e) {e.style.backgroundImage = "url(assets/ui/btn/btn-normal.png)"});
				this.style.backgroundImage = "url(assets/ui/btn/btn-normal_press.png)"
			}
		})
		// creating new game
		select(".section-new_game content .step_02 .btn-create_game").onclick = function() {
			Backup.date.creation = get_date();
			Backup.date.lastConnection = Backup.date.creation;
			// clearing all data
			clear(select(".section-new_game content .step_01 #game_name"));
			clear(select(".section-new_game content .step_01 #player_nickname"));
			// closing
			hide(new_gameContent);
			hide(step_02);
			hide(new_game);
			launch()
		}
	}

	// closing with echap key
	window.onkeydown = function(e) {
		switch (e.keyCode) {
			case 27: // echap
				if (new_game.style.display == "block") {
					// clearing all data
					clear(select(".section-new_game content .step_01 #game_name"));
					clear(select(".section-new_game content .step_01 #player_nickname"));
					// closing
					hide(new_gameContent);
					hide(step_02);
					hide(new_game)
				}
				break
		}
	}

	// closing with button
	select(".section-new_game content .btn-close").onclick = function() {
		// clearing all data
		clear(select(".section-new_game content .step_01 #game_name"));
		clear(select(".section-new_game content .step_01 #player_nickname"));
		// closing
		hide(new_gameContent);
		hide(step_02);
		hide(new_game)
	}
}