function set_width(e, w) {e.style.width = w + "px"}

function set_height(e, h) {e.style.height = h + "px"}

function set_scale() {
	w = window.innerWidth;
	h = window.innerHeight;
	if ((w / 16) < (h / 9)) {
		w_new = w;
		h_new = ((w / 16) * 9).toFixed(0);
		// scaling .menu-main
		set_width(select(".menu-main"), w_new);
		set_height(select(".menu-main"), h_new);
		// scaling .section-new_game
		set_width(select(".section-new_game"), w_new);
		set_height(select(".section-new_game"), h_new);
		// scaling .section-launch_backup
		set_width(select(".section-launch_backup"), w_new);
		set_height(select(".section-launch_backup"), h_new);
		// scaling .credits
		set_width(select(".credits"), w_new);
		set_height(select(".credits"), h_new);
		// scaling .menu-pause
		set_width(select(".menu-pause"), w_new);
		set_height(select(".menu-pause"), h_new);
		// scaling .game
		set_width(select(".game"), w_new);
		set_height(select(".game"), h_new);
		// scaling .game-loading
		set_width(select(".game-loading"), w_new);
		set_height(select(".game-loading"), h_new);
		// random changes
		set_height(select(".border.border-top"), (h - h_new) / 2);
		set_height(select(".border.border-bottom"), (h - h_new) / 2);
		set_width(select(".border.border-left"), (w - w_new) / 2);
		set_width(select(".border.border-right"), (w - w_new) / 2)
	} else if ((w / 16) >= (h / 9)) {
		w_new = ((h / 9) * 16).toFixed(0);
		h_new = h;
		// scaling .menu-main
		set_width(select(".menu-main"), w_new);
		set_height(select(".menu-main"), h_new);
		// scaling .section-new_game
		set_width(select(".section-new_game"), w_new);
		set_height(select(".section-new_game"), h_new);
		// scaling .section-launch_backup
		set_width(select(".section-launch_backup"), w_new);
		set_height(select(".section-launch_backup"), h_new);
		// scaling .credits
		set_width(select(".credits"), w_new);
		set_height(select(".credits"), h_new);
		// scaling .menu-pause
		set_width(select(".menu-pause"), w_new);
		set_height(select(".menu-pause"), h_new);
		// scaling .game
		set_width(select(".game"), w_new);
		set_height(select(".game"), h_new);
		// scaling .game-loading
		set_width(select(".game-loading"), w_new);
		set_height(select(".game-loading"), h_new);
		// random changes
		set_height(select(".border.border-top"), (h - h_new) / 2);
		set_height(select(".border.border-bottom"), (h - h_new) / 2);
		set_width(select(".border.border-left"), (w - w_new) / 2);
		set_width(select(".border.border-right"), (w - w_new) / 2)
	}
	document.querySelectorAll(".display").forEach(function(e) {e.innerHTML = "Display: " + w_new + "x" + h_new + " (" + Game.aspectRatio + ")"})
}



Game.scale = function() {
	var w,
		h,
		w_new,
		h_new;
	set_scale();
	window.onresize = function() {set_scale()}
}