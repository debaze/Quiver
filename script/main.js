var Game = {
		aspectRatio: "16/9",
		currentVersion: "Early Access/210118",
		options: {
			controls: {
				forward: 90,
				backward: 83,
				strafeLeft: 81,
				strafeRight: 68,
				abilitiesHelp: 72
			}
		},
		scale: null
	},
	Backup = {
		name: null,
		date: {
			creation: null,
			lastConnection: null
		},
		player: {
			nickname: null,
			class: null,
			level: null
		}
	};

function select(e) {return document.querySelector(e)}

function show(e, value) {
	var display = (value === undefined) ? "block" : value;
	return e.style.display = display
}

function hide(e) {return e.style.display = "none"}

function close() {hide(this.parentNode)}

function clear(e) {return e.value = ""}



window.onload = function() {
	// hidn' red scren of da deth coz it go brrr
	hide(select(".nojs"));

	// writing game version
	select(".menu-main .version").innerHTML = Game.currentVersion;
	select(".menu-pause .version").innerHTML = Game.currentVersion;

	// scaling window
	Game.scale();

	// clearing all old data
	clear(select(".section-new_game content .step_01 #game_name"));
	clear(select(".section-new_game content .step_01 #player_nickname"));

	// applying functions to buttons
	select("#btn-new_game").onclick = new_game;
	select("#btn-launch_backup").onchange = launch_backup;
	select("#btn-open_credits").onclick = credits;
	select(".menu-main .menu .btn-options").onclick = options
}