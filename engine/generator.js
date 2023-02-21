function init(isLoaded, lvl) {
	// var COLLISIONS = [];
	document.querySelector("#player").tp = function tp(x, y) {
		map.x = x;
		map.y = y;
		document.querySelector(".game .map").style.transform = "translateX(" + -map.x * 64 + "px) translateY(" + map.y * 64 + "px)"
	}

	function generate(map) {
		var part;
		for (i = 0; i < map.length; i++) {
			part = document.createElement("div");
			part.className = "part " + map[i][0];
			(map[i][1] != "") ? part.style.backgroundImage = "url(assets/map/textures/" + map[i][1] + ".png)" : part.style.backgroundImage = "url(assets/map/textures/error.png)";
			part.style.width = map[i][2][0] * 64 + "px";
			part.style.height = map[i][2][1] * 64 + "px";
			part.setpos = setpos;
			part.setpos(map[i][3][0], map[i][3][1], 0);
			part.style.zIndex = i;
			document.querySelector(".game .map").append(part)
		}
		show(document.querySelector(".game .map"), "flex");
		isLoaded = true
	}

	// not used
	function setRandomBg(part, slot, find, bg) {
		// applyies a random background image (only if the class is found in the list of classes of the object)
		// to increase the chance of getting a certain background, enter its name several times in the background list
		// example: ["brick", "brick", "brick", "mossybrick"] will spawn a mossy brick background once in 4
		if (part.className.split(" ")[1] === find) slot.style.backgroundImage = "url(assets/map/textures/" + bg[Math.floor(bg.length * Math.random())] + ".png)"
	}

	function setpos(x, y, h) {
		// h = slot depth
		(!h) ? h = 0 : h;
		this.style.transform = "translateX(" + x * 64 + "px) translateY(" + (-y * 64 + -h * 64) + "px)"
	}



	generate(lvl);
	// enabling player movement
	player.movement.on();
	window.requestAnimationFrame(player.movement.move);

	// first dialog
	/*setInterval(function() {
		dialog("KitsuneDa", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", 3000)
	}, 5000)*/

	return isLoaded
}

function ungenerate(map) {
	// player.movement.off();
	// window.cancelAnimationFrame(player.movement.move);
	// hide(map);
	// hide(document.querySelector(".game"))
	location.reload()
}