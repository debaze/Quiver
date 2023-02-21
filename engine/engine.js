function init(isLoaded) {
	var MAP = select(".map"),
		PLAYER = select(".game #player"),
		COLLISIONS = [];
	PLAYER.changePos = changePos;

	player.enableMoving = function() {
		var moveTo = {
				top: false,
				bottom: false,
				left: false,
				right: false
			},
			x = 0,
			y = 0,
			speed = 0.1;
		document.onkeydown = function(e) {
			switch (e.keyCode) {
				case 90: // z key
					moveTo.top = true;
					break;
				case 83: // s key
					moveTo.bottom = true;
					break;
				case 81: // q arrow
					moveTo.left = true;
					break;
				case 68: // d arrow
					moveTo.right = true;
					break
			}
		}
		document.onkeyup = function(e) {
			switch (e.keyCode) {
				case 90: // z key
					moveTo.top = false;
					break;
				case 83: // s key
					moveTo.bottom = false;
					break;
				case 81: // q arrow
					moveTo.left = false;
					break;
				case 68: // d arrow
					moveTo.right = false;
					break
			}
		}
		function move() {
			if (moveTo.top) {
				if (y >= -0.1 && x >= -1 && x <= 10) {
					select("debug .tres").innerHTML = "touche le bord"
				} else {
					select("debug .tres").innerHTML = "";
					y += speed
				}
			}

			if (moveTo.bottom) {
				if (y <= -0.9 && x >= -1 && x <= 10) {
					select("debug .tres").innerHTML = "touche le bord"
				} else {
					select("debug .tres").innerHTML = "";
					y -= speed
				}
			}

			if (moveTo.left) {
				// that's weird but left collisions don't need 0.1
				// idk why lmao
				// ¯\_(ツ)_/¯
				if (x <= 0 && y >= -2 && y <= 1) {
					select("debug .tres").innerHTML = "touche le bord"
				} else {
					select("debug .tres").innerHTML = "";
					x -= speed
				}
			}

			if (moveTo.right) {
				// if (x >= 8.9 && y >= -2 && y <= 1) {
					// select("debug .tres").innerHTML = "touche le bord"
				// } else {
					// select("debug .tres").innerHTML = "";
					x += speed
				// }
			}

			PLAYER.changePos(x.toFixed(1), y.toFixed(1));
			select("debug .uno").innerHTML = "pos.x = " + player.pos[0];
			select("debug .dos").innerHTML = "pos.y = " + player.pos[1];
			window.requestAnimationFrame(move)
		}
		window.requestAnimationFrame(move)
	}

	player.enableMoving();

	function setPos(x, y, h) {
		var transform;
		if (h === undefined) transform = "translateX(" + x * slot.width + "px) translateY(" + -y * slot.width + "px)";
		else transform = "translateX(" + x * slot.width + "px) translateY(" + -y * slot.width + "px) translateZ(" + h + "px)";
		this.style.transform = transform
	}

	function changePos(x, y) {
		player.pos[0] = x;
		player.pos[1] = y;
		terrain.x = x;
		terrain.y = y;
		MAP.style.transform = "translateX(" + -terrain.x * slot.width + "px) translateY(" + terrain.y * slot.width + "px)"
	}

	function createMap(map) {
		var part, slot;
		for (i = 0; i < map.length; i++) {
			part = document.createElement("div");
			part.className = "part " + map[i][0];
			COLLISIONS[i] = [];
			for (j = 0; j < map[i][1].length; j++) {
				slot = document.createElement("div");
				slot.className = "slot";
				slot.setPos = setPos;
				slot.setPos(map[i][1][j][0], map[i][1][j][1]);
				COLLISIONS[i][j] = [];
				COLLISIONS[i][j] += map[i][1][j];
				part.append(slot)
			}
			select(".map").append(part)
		}
		isLoaded = true
	}

	createMap(lvl_01)
	return isLoaded
}

/*
var status = "keydown" == char.type;
		switch (char.keyCode) {
			case 90: // Z key
				E.up = status;
				break;
			case 83: // S key
				E.down = status;
				break;
			case 81: // Q key
				E.left = status;
				break;
			case 68: // D key
				E.right = status
		}
		if (E.up) {
			player.test[1] = player.pos[1] + 1;
			for (i = 0; i < COLLISIONS.length; i++) {
				for (j = 0; j < COLLISIONS[i].length; j++) {
					if (COLLISIONS[i][j] == player.test) {
						PLAYER.changePos(0, 1);
					}
					else PLAYER.changePos(0, 0)
				}
			}
			player.test[1] = player.pos[1]
		}
		if (E.down) {
			player.test[1] = player.pos[1] - 1;
			for (i = 0; i < COLLISIONS.length; i++) {
				for (j = 0; j < COLLISIONS[i].length; j++) {
					if (COLLISIONS[i][j] == player.test) {
						PLAYER.changePos(0, -1);
					}
					else PLAYER.changePos(0, 0)
				}
			}
			player.test[1] = player.pos[1]
		}
		if (E.right) {
			player.test[0] = player.pos[0] + 1;
			for (i = 0; i < COLLISIONS.length; i++) {
				for (j = 0; j < COLLISIONS[i].length; j++) {
					if (COLLISIONS[i][j] == player.test) {
						PLAYER.changePos(1, 0);
					}
					else PLAYER.changePos(0, 0)
				}
			}
			player.test[0] = player.pos[0]
		}
		if (E.left) {
			player.test[0] = player.pos[0] - 1;
			for (i = 0; i < COLLISIONS.length; i++) {
				for (j = 0; j < COLLISIONS[i].length; j++) {
					if (COLLISIONS[i][j] == player.test) {
						PLAYER.changePos(-1, 0);
					}
					else PLAYER.changePos(0, 0)
				}
			}
			player.test[0] = player.pos[0]
		}
*/