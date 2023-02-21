function credits() {
	var copyright = Game.UI.section.credits.querySelector("#copyright"),
		donut = 0;

	// mmh donut
	donut = Math.floor(6 * Math.random() + 1);
	if (donut === 1) copyright.innerHTML = "Copyright (C) 2021<br>Donut distribute!";
	else copyright.innerHTML = "Copyright (C) 2021<br>Do not distribute!";

	// opening
	show(Game.UI.section.credits_overlay);
	show(Game.UI.section.credits);
	// fade out
	setTimeout(function() {hide(Game.UI.section.credits_overlay)}, 2000);

	// closing with echap key
	window.onkeydown = function(e) {
		switch (e.keyCode) {
			case 27: // echap
				if (Game.UI.section.credits.style.display === "block") hide(Game.UI.section.credits);
				break
		}
	}

	// closing with button
	Game.UI.section.credits.querySelector(".btn-close").onclick = close
}