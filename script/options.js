function options() {
	var options_menu = Game.UI.section.options_content.querySelector(".menu");

	// applying keybinds on options menu
	options_menu.querySelector(".btn-key_forward").innerHTML = String.fromCharCode(Game.options.controls.forward);
	options_menu.querySelector(".btn-key_backward").innerHTML = String.fromCharCode(Game.options.controls.backward);
	options_menu.querySelector(".btn-key_strafeLeft").innerHTML = String.fromCharCode(Game.options.controls.strafeLeft);
	options_menu.querySelector(".btn-key_strafeRight").innerHTML = String.fromCharCode(Game.options.controls.strafeRight);
	options_menu.querySelector(".btn-key_abilitiesHelp").innerHTML = String.fromCharCode(Game.options.controls.abilitiesHelp);

	// opening window
	show(Game.UI.section.options);
	show(Game.UI.section.options_content);

	// closing with echap key
	window.onkeydown = function(e) {
		switch (e.keyCode) {
			case 27: // echap
				if (Game.UI.section.options.style.display === "block") {
					hide(Game.UI.section.options_content);
					hide(Game.UI.section.options)
				}
				break
		}
	}

	// closing with button
	Game.UI.section.options_content.querySelector(".btn-close").onclick = function() {
		hide(Game.UI.section.options_content);
		hide(Game.UI.section.options)
	}
}