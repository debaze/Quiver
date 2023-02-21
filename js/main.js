window.onload = function() {
	// deleting old backup when refreshing
	document.querySelector(".menu #backup_content").value = "";

	// showing backup view when opening a file
	document.querySelector(".menu #launch_backup").onchange = launch_backup;

	// opening credit page
	document.querySelector(".menu #btn-open_credits").onclick = function() {
		document.querySelector(".credits").style["display"] = "block"
	}

	// closing credit page
	document.querySelector(".credits #btn-close_credits").onclick = function() {
		this.parentNode.style.display = "none"
	}
}