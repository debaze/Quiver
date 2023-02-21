function save() {
	var save = select(".section-save"),
		saveContent = save.querySelector("content"),
		backup_content = saveContent.querySelector(".backup_content#new_content");

	// backup content
	var backup_to_save =
		"Backup.name = \"" + Backup.name + "\";\n" +
		"Backup.date.creation = \"" + Backup.date.creation + "\";\n" +
		"Backup.date.lastConnection = \"" + Backup.date.lastConnection + "\";\n" +
		"Backup.player.nickname = \"" + Backup.player.nickname + "\";\n" +
		"Backup.player.class = \"" + Backup.player.class + "\";\n" +
		"Backup.player.level = " + Backup.player.level;
	backup_content.innerHTML = backup_to_save;

	// opening window
	show(save);
	show(saveContent);

	// closing with echap key
	window.onkeydown = function(e) {
		switch (e.keyCode) {
			case 27: // echap
				if (save.style.display == "block") {
					hide(saveContent);
					saveContent.querySelector("#btn-copy").innerHTML = "Copier";
					hide(save)
				}
				break
		}
	}

	// closing with button
	saveContent.querySelector(".btn-close").onclick = function() {
		hide(saveContent);
		saveContent.querySelector("#btn-copy").innerHTML = "Copier";
		hide(save)
	}

	// saving
	saveContent.querySelector("#btn-copy").onclick = function() {
		// copying backup content
		backup_content.select();
		backup_content.setSelectionRange(0, backup_content.innerHTML.length);
		document.execCommand("copy");
		this.innerHTML = "Copie avec succes !"
	}
}