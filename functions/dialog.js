function dialog(name, text, cooldown) {
	var window = document.querySelector(".game .dialog"),
		dialog = name + " : <i>" + text + "</i>";

	window.innerHTML = dialog;
	show(window);
	window.style.animation = "open_dialog 0.75s linear";
	window.style.bottom = "50px";

	setTimeout(function() {
		window.style.animation = "close_dialog 1s linear";
		window.style.bottom = "-100px";
		setTimeout(function() {hide(window)}, 750);
	}, cooldown + 750)
}