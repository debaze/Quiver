var Game = {
		aspectRatio: "16/9",
		currentVersion: "Early Access/210125",
		options: {
			controls: [
				90, // forward
				83, // backward
				81, // left
				68, // right
				72 // abilities help
			]
		},
		scale: null,
		UI: {
			tooltip: {
				display: null,
				version: null,
				class1: null,
				class2: null,
				class3: null
			},
			section: {
				__nojs__: null,
				__window__: null,
				new_game: null,
				new_game_content: null,
				new_game_step1: null,
				new_game_step2: null,
				launch_backup: null,
				launch_backup_content: null,
				options: null,
				options_content: null,
				credits: null,
				save: null,
				save_content: null,
				quit_game: null,
				quit_game_content: null
			},
			wrapper: {
				main: null,
				pause: null,
				loading: null,
				game: null,
				options: null
			}
		}
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
			level: 0
		}
	};

function show(e, value) {
	var display = (value === undefined) ? "block" : value;
	return e.style.display = display
}

function hide(e) {return e.style.display = "none"}

function close() {hide(this.parentNode)}

function clear(e) {return e.value = ""}



window.onload = function() {
	// dom init
	with (Game.UI) {
		tooltip.display = document.querySelectorAll(".display");
		tooltip.version = document.querySelectorAll(".version");
		section.__nojs__ = document.querySelector(".nojs");
		section.__window__ = document.querySelector(".windowtoosmall");
		section.new_game = document.querySelector(".section-new_game");
		section.new_game_content = section.new_game.querySelector("content");
		section.new_game_step1 = section.new_game_content.querySelector(".step1");
		section.new_game_step2 = section.new_game_content.querySelector(".step2");
		section.launch_backup = document.querySelector(".section-launch_backup");
		section.launch_backup_content = section.launch_backup.querySelector("content");
		section.options = document.querySelector(".section-options");
		section.options_content = section.options.querySelector("content");
		section.credits = document.querySelector(".credits");
		section.credits_overlay = section.credits.querySelector(".overlay-credits");
		section.save = document.querySelector(".section-save");
		section.save_content = section.save.querySelector("content");
		section.quit_game = document.querySelector(".section-quit_game");
		section.quit_game_content = section.quit_game.querySelector("content");
		wrapper.main = document.querySelector(".menu-main");
		wrapper.pause = document.querySelector(".menu-pause");
		wrapper.loading = document.querySelector(".game-loading");
		wrapper.game = document.querySelector(".game");
		wrapper.options = document.querySelector(".overlay-options")
	}

	// hidn' red scren of da deth coz it go brrr
	hide(Game.UI.section.__nojs__);

	// game update
	document.querySelector("title").innerHTML = "Quiver (" + Game.currentVersion + ")";
	Game.UI.tooltip.version.forEach(function(e) {e.innerHTML = Game.currentVersion});

	// scaling window (16/9)
	Game.scale();

	// clearing all old data
	clear(Game.UI.section.new_game_step1.querySelector("#game_name"));
	clear(Game.UI.section.new_game_step1.querySelector("#player_nickname"));

	// applying functions to buttons
	document.querySelector("#btn-new_game").onclick = new_game;
	document.querySelector("#btn-launch_backup").onchange = launch_backup;
	document.querySelector("#btn-open_credits").onclick = credits;
	document.querySelector(".menu-main .menu .btn-options").onclick = options
}