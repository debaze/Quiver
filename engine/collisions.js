function test_collide(x, y, canMove) {
	// wall collisions
	if (x < -8.9 && y > -5 && y < 11) {
		canMove.left = false
	} else canMove.left = true;
	if (x > 8.9 && y > -5 && y < 11) {
		canMove.right = false
	} else canMove.right = true;
	if (y > 5.9 && x > -10 && x < 10) {
		canMove.top = false
	} else canMove.top = true;
	if (y < -4 && x > -10 && x < 10) {
		canMove.bottom = false
	} else canMove.bottom = true;



	// left table collisions
	if (x < -4 && x > -5 && y > -2 && y < 3) {
		canMove.left = false
	} else canMove.left = true;
	if (x > -8 && x < -7 && y > -2 && y < 3) {
		canMove.right = false
	} else canMove.right = true;
	if (y > -2.1 && y < -1.1 && x > -8 && x < -4) {
		canMove.top = false
	} else canMove.top = true;
	if (y < 3.1 && y > 2.1 && x > -7.9 && x < -4.1) {
		canMove.bottom = false
	} else canMove.bottom = true;



	// right table collisions
	if (x < 8 && x > 7 && y > -2 && y < 3) {
		canMove.left = false
	} else canMove.left = true;
	if (x > 4 && x < 5 && y > -2 && y < 3) {
		canMove.right = false
	} else canMove.right = true;
	if (y > -2.1 && y < -1.1 && x > 4 && x < 8) {
		canMove.top = false
	} else canMove.top = true;
	if (y < 3.1 && y > 2.1 && x > 4.1 && x < 7.9) {
		canMove.bottom = false
	} else canMove.bottom = true
}