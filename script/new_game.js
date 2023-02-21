function new_game() {
	// opening window
	show(Game.UI.section.new_game);
	show(Game.UI.section.new_game_content);

	// steap 1 initializing
	show(Game.UI.section.new_game_step1);

	// step 1 info collect & step 2 initializing
	Game.UI.section.new_game_step1.querySelector(".btn-next").onclick = function() {
		// recovering step 1 data
		Backup.name = Game.UI.section.new_game_step1.querySelector("#game_name").value;
		Backup.player.nickname = Game.UI.section.new_game_step1.querySelector("#player_nickname").value;
		// hiding step 1 & showing step 2
		hide(Game.UI.section.new_game_step1);
		show(Game.UI.section.new_game_step2);
		// selecting a class
		Game.UI.section.new_game_step2.querySelectorAll(".btn-class").forEach(function(e) {
			e.onclick = function() {
				Backup.player.class = this.innerHTML;
				Game.UI.section.new_game_step2.querySelectorAll(".btn-class").forEach(function(e) {e.style.backgroundImage = "url(assets/ui/btn/btn-normal.png)"});
				this.style.backgroundImage = "url(assets/ui/btn/btn-normal_press.png)"
			}
		})
		// creating new game
		Game.UI.section.new_game_step2.querySelector(".btn-create_game").onclick = function() {
			Backup.date.creation = get_date();
			Backup.date.lastConnection = Backup.date.creation;
			// clearing all data
			clear(Game.UI.section.new_game_step1.querySelector("#game_name"));
			clear(Game.UI.section.new_game_step1.querySelector("#player_nickname"));
			// closing
			hide(Game.UI.section.new_game_content);
			hide(Game.UI.section.new_game_step2);
			Game.UI.section.new_game_step2.querySelectorAll(".btn-class").forEach(function(e) {e.style.backgroundImage = "url(assets/ui/btn/btn-normal.png)"});
			hide(Game.UI.section.new_game);
			launch()
		}
	}

	// closing with echap key
	window.onkeydown = function(e) {
		switch (e.keyCode) {
			case 27: // echap
				if (Game.UI.section.new_game.style.display === "block") {
					// clearing all data
					clear(Game.UI.section.new_game_step1.querySelector("#game_name"));
					clear(Game.UI.section.new_game_step1.querySelector("#player_nickname"));
					// closing
					hide(Game.UI.section.new_game_content);
					hide(Game.UI.section.new_game_step2);
					Game.UI.section.new_game_step2.querySelectorAll(".btn-class").forEach(function(e) {e.style.backgroundImage = "url(assets/ui/btn/btn-normal.png)"});
					hide(Game.UI.section.new_game)
				}
				break
		}
	}

	// closing with button
	Game.UI.section.new_game_content.querySelector(".btn-close").onclick = function() {
		// clearing all data
		clear(Game.UI.section.new_game_step1.querySelector("#game_name"));
		clear(Game.UI.section.new_game_step1.querySelector("#player_nickname"));
		// closing
		hide(Game.UI.section.new_game_content);
		hide(Game.UI.section.new_game_step2);
		Game.UI.section.new_game_step2.querySelectorAll(".btn-class").forEach(function(e) {e.style.backgroundImage = "url(assets/ui/btn/btn-normal.png)"});
		hide(Game.UI.section.new_game)
	}
}