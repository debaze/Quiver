function init(isLoaded) {
	// var COLLISIONS = [];
	document.querySelector("#player").changePos = changePos;

	function generate(map) {
		var part, slot;
		for (i = 0; i < map.length; i++) {
			part = document.createElement("div");
			part.className = "part " + map[i][0];
			// COLLISIONS[i] = [];
			for (j = 0; j < map[i][1].length; j++) {
				slot = document.createElement("div");
				slot.className = "slot";
				setRandomBg(part, slot, "brick", ["brick.png", "brick.png", "brick.png", "brick2.png"]);
				slot.setSlotPos = setSlotPos;
				slot.setSlotPos(map[i][1][j][0], map[i][1][j][1]);
				// COLLISIONS[i][j] = [];
				// COLLISIONS[i][j] += map[i][1][j];
				part.append(slot)
			}
			document.querySelector(".game .map").append(part)
		}
		show(document.querySelector(".game .map"), "flex");
		isLoaded = true
	}

	function setRandomBg(part, slot, find, bg) {
		// applyies a random background image only if the class is found in the list of classes of the object
		if (part.className.split(" ")[1] === find) {
			slot.style.backgroundImage = "url(assets/map/textures/" + bg[Math.floor(bg.length * Math.random())] + ")"
		}
	}

	function setSlotPos(x, y) {
		this.style.transform = "translateX(" + x * slot.w + "px) translateY(" + -y * slot.w + "px)"
	}

	function changePos(x, y) {
		map.x = x;
		map.y = y;
		document.querySelector(".game .map").style.transform = "translateX(" + -map.x * slot.w + "px) translateY(" + map.y * slot.w + "px)"
	}



	generate(lvl_01);
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