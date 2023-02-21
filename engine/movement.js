player.movement.on = function() {
	// allowing player movement
	player.canMove.top = true;
	player.canMove.bottom = true;
	player.canMove.left = true;
	player.canMove.right = true;
	window.addEventListener("keydown", player.movement.keydown);
	window.addEventListener("keyup", player.movement.keyup)
}

player.movement.off = function() {
	// disallowing player movement
	player.canMove.top = false;
	player.canMove.bottom = false;
	player.canMove.left = false;
	player.canMove.right = false
}

player.movement.keydown = function(e) {
	switch (e.keyCode) {
		case 90: // z key
			(player.canMove.top) ? player.direction.top = true : player.direction.top = false;
			break;
		case 83: // s key
			(player.canMove.bottom) ? player.direction.bottom = true : player.direction.bottom = false;
			break;
		case 81: // q key
			(player.canMove.left) ? player.direction.left = true : player.direction.left = false;
			break;
		case 68: // d key
			(player.canMove.right) ? player.direction.right = true : player.direction.right = false;
			break
	}
}

player.movement.keyup = function(e) {
	switch (e.keyCode) {
		case 90: // z key
			player.direction.top = false;
			break;
		case 83: // s key
			player.direction.bottom = false;
			break;
		case 81: // q key
			player.direction.left = false;
			break;
		case 68: // d key
			player.direction.right = false;
			break
	}
}

player.movement.move = function() {
	console.log("ok")
	with (player) {
		// left collisions
		/*if (x <= 0 && y >= -2 && y <= 1) {
			canMove.left = false;
			x = 0;
			debug5.innerHTML = "left collide"
		} else {
			canMove.left = true;
			debug5.innerHTML = ""
		}*/

		// right collisions
		/*if (x >= 11 && y >= -2 && y <= 2) {
			canMove.right = false;
			x = 11;
			debug5.innerHTML = "right collide"
		} else {
			canMove.right = true;
			debug5.innerHTML = ""
		}*/

		if (canMove.top && direction.top) y += speed;
		if (canMove.bottom && direction.bottom) y -= speed;
		if (canMove.left && direction.left) x -= speed;
		if (canMove.right && direction.right) x += speed;

		// moving the player
		document.querySelector("#player").changePos(x.toFixed(1), y.toFixed(1));
		document.querySelector("#debug1").innerHTML = "X: " + x.toFixed(1);
		document.querySelector("#debug2").innerHTML = "Y: " + y.toFixed(1)
	}
	window.requestAnimationFrame(player.movement.move)
}