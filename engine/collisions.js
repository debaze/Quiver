function test_collide(x, y, canMove) {
	// wall collision
	// collision: towards top
	if (y > 10 && x > -10 && x < 10) {
		canMove.top = false;
		y = 10
	} else canMove.top = true;
	// collision: towards bottom
	if (y < -4 && x > -10 && x < 10) {
		canMove.bottom = false;
		y = -4
	} else canMove.bottom = true;
	// collision: towards left
	if (x < -9 && y > -5 && y < 11) {
		canMove.left = false;
		x = -9
	} else canMove.left = true;
	// collision: towards right
	if (x > 9 && y > -5 && y < 11) {
		canMove.right = false;
		x = 9
	} else canMove.right = true
}