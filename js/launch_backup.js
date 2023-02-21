function launch_backup(e) {
	var file = e.target.files[0];
	if (!file) return;
	var reader = new FileReader();
	reader.onload = function(e) {
		var backup_content = document.querySelector(".menu #backup_content");
		backup_content.style["display"] = "block";
		backup_content.value = e.target.result
	}
	reader.readAsText(file);

	// showing backup use confirmation button
	var confirm_backup = document.querySelector(".menu #btn-confirm_backup");
	confirm_backup.style["display"] = "block";
	confirm_backup.onclick = function() {
		alert("Chargement de la sauvegarde...")
	}
}