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
	with (player) {
		test_collide(x, y, canMove);
		if (direction.top && canMove.top) y += speed;
		if (direction.bottom && canMove.bottom) y -= speed;
		if (direction.left && canMove.left) {
			x -= speed;
			document.querySelector("#player").style.transform = "rotateY(180deg)"
		}
		if (direction.right && canMove.right) {
			x += speed;
			document.querySelector("#player").style.transform = "rotateY(0)"
		}

		// moving the player
		document.querySelector("#player").tp(x.toFixed(1), y.toFixed(1));
		document.querySelector("#debug1").innerHTML = "X: " + x.toFixed(1);
		document.querySelector("#debug2").innerHTML = "Y: " + y.toFixed(1)
	}
	window.requestAnimationFrame(player.movement.move)
}