function launch_backup(e) {
	var launch_backup = select(".section-launch_backup"),
		launch_backupContent = select(".section-launch_backup content"),
		pause_menu = select(".menu-pause"),
		isLoaded = false;

	var file = e.target.files[0];
	if (!file) return;
	var reader = new FileReader();
	reader.onload = function(e) {
		// opening
		show(launch_backup);
		show(launch_backupContent);

		// closing with echap key
		window.onkeydown = function(e) {
			switch (e.keyCode) {
				case 27: // echap
					if (launch_backup.style.display == "block") {
						hide(launch_backupContent);
						hide(launch_backup)
					}
					break
			}
		}

		// closing with button
		select(".section-launch_backup content .btn-close").onclick = function() {
			hide(launch_backupContent);
			hide(launch_backup)
		}

		// showing backup content/global info
		select(".section-launch_backup content .backup_content#old_content").value = e.target.result;
		var script_backup = document.createElement("script");
		script_backup.setAttribute("type", "text/javascript");
		script_backup.innerHTML = e.target.result;
		document.head.append(script_backup);
		select(".section-launch_backup content .backup_info").innerHTML =
			"\"" + Backup.name + "\"<br>" +
			Backup.player.nickname +
			" (" + Backup.player.class + ")"
	}
	reader.readAsText(file);

	// confirmation
	select(".section-launch_backup content #btn-confirm_backup").onclick = function() {
		// closing
		hide(launch_backupContent);
		hide(launch_backup);
		launch(Backup)
	}
}