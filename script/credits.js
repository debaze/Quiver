function credits() {
	var credits = select(".credits"),
		creditsOverlay = credits.querySelector(".overlay-credits"),
		donut = 0;

	// mmh donut
	donut = Math.floor(6 * Math.random() + 1);
	if (donut === 1) select(".credits #copyright").innerHTML = "Copyright (C) 2021<br>Donut distribute!";
	else select(".credits #copyright").innerHTML = "Copyright (C) 2021<br>Do not distribute!";

	// opening
	show(credits);
	show(creditsOverlay);
	// fade out
	setTimeout(function() {hide(creditsOverlay)}, 2000);

	// closing with echap key
	window.onkeydown = function(e) {
		switch (e.keyCode) {
			case 27: // echap
				if (credits.style.display == "block") hide(credits);
				break
		}
	}

	// closing with button
	select(".credits .btn-close").onclick = close
}