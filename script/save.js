function save() {
	var backup_content = Game.UI.section.save_content.querySelector(".backup_content#new_content");

	// backup content
	var backup_to_save =
		"Backup.name = \"" + Backup.name + "\";\n" +
		"Backup.date.creation = \"" + Backup.date.creation + "\";\n" +
		"Backup.date.lastConnection = \"" + Backup.date.lastConnection + "\";\n" +
		"Backup.player.nickname = \"" + Backup.player.nickname + "\";\n" +
		"Backup.player.class = \"" + Backup.player.class + "\";\n" +
		"Backup.player.level = " + Backup.player.level;
	backup_content.value = backup_to_save;

	// opening window
	show(Game.UI.section.save);
	show(Game.UI.section.save_content);

	// closing with echap key
	window.onkeydown = function(e) {
		switch (e.keyCode) {
			case 27: // echap
				if (Game.UI.section.save.style.display === "block") {
					hide(Game.UI.section.save_content);
					Game.UI.section.save_content.querySelector("#btn-copy").innerHTML = "Copier";
					hide(Game.UI.section.save)
				}
				break
		}
	}

	// closing with button
	Game.UI.section.save_content.querySelector(".btn-close").onclick = function() {
		hide(Game.UI.section.save_content);
		Game.UI.section.save_content.querySelector("#btn-copy").innerHTML = "Copier";
		hide(Game.UI.section.save)
	}

	// saving
	Game.UI.section.save_content.querySelector("#btn-copy").onclick = function() {
		// copying backup content
		backup_content.select();
		backup_content.setSelectionRange(0, backup_content.value.length);
		document.execCommand("copy");
		this.innerHTML = "Copie avec succes !"
	}
}