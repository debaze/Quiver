function options() {
	var options = select(".section-options"),
		optionsContent = select(".section-options content"),
		optionsMenu = select(".section-options content .menu");

	// applying keybinds on options menu
	optionsMenu.querySelector(".btn-key_forward").innerHTML = String.fromCharCode(Game.options.controls.forward);
	optionsMenu.querySelector(".btn-key_backward").innerHTML = String.fromCharCode(Game.options.controls.backward);
	optionsMenu.querySelector(".btn-key_strafeLeft").innerHTML = String.fromCharCode(Game.options.controls.strafeLeft);
	optionsMenu.querySelector(".btn-key_strafeRight").innerHTML = String.fromCharCode(Game.options.controls.strafeRight);
	optionsMenu.querySelector(".btn-key_abilitiesHelp").innerHTML = String.fromCharCode(Game.options.controls.abilitiesHelp);

	// opening window
	show(options);
	show(optionsContent);

	// closing with echap key
	window.onkeydown = function(e) {
		switch (e.keyCode) {
			case 27: // echap
				if (options.style.display == "block") {
					hide(optionsContent);
					hide(options)
				}
				break
		}
	}

	// closing with button
	optionsContent.querySelector(".btn-close").onclick = function() {
		hide(optionsContent);
		hide(options)
	}
}