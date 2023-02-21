function keydown(e) {
	switch (e.keyCode) {
		case 27: // echap key
			alert("closing")
			break
	}
}

function enable_keydown() {
	window.addEventListener("keydown", key, false)
}

function disable_keydown() {
	window.removeEventListener("keydown", key, false)
}