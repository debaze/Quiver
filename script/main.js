var Game = {
		aspectRatio: "16/9",
		currentVersion: "Early Access/210220",
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
			level: 0,
			health: 0,
			mana: 0,
			strength: 0,
			resistance: 0,
			attack1: {
				name: null,
				damage: 0,
				cost: 0
			},
			attack2: {
				name: null,
				damage: 0,
				cost: 0
			},
			ultimate: {
				name: null,
				damage: 0,
				cost: 0
			}
		}
	},
	Entity = {
		Mage: {
			name: "Mage",
			type: "player",
			roundActions: ["attack", "flee", "use"],
			health: 20,
			mp: 20,
			strength: 10,
			resistance: 10,
			attack1: {
				name: "Boule de feu",
				mp_cost: 3,
				damage: {
					min: 4,
					max: 8
				}
			},
			attack2: {
				name: "Coup de baguette",
				mp_cost: 0,
				damage: {
					min: 3,
					max: 6
				}
			},
			ultimate: {
				name: "Eclair",
				mp_cost: 10,
				damage: {
					min: 5,
					max: 5
				}
			}
		},
		Rogue: {
			name: "Roublard",
			type: "player",
			roundActions: ["attack", "flee", "use"],
			health: 25,
			mp: 10,
			strength: 13,
			resistance: 8,
			attack1: {
				name: "Doubles dagues",
				mp_cost: 0,
				damage: {
					min: 4,
					max: 8
				}
			},
			attack2: {
				name: "Discrétion",
				mp_cost: 0,
				damage: {
					min: 0,
					max: 0
				},
				scareChanceMultiplier: 2
			},
			ultimate: {
				name: "Attaque furtive",
				mp_cost: 10,
				damage: {
					min: 5,
					max: 5
				}
			}
		},
		Paladin: {
			name: "Paladin",
			type: "player",
			roundActions: ["attack", "flee", "use"],
			health: 20,
			mp: 10,
			strength: 15,
			resistance: 13,
			attack1: {
				name: "Coup d'epee",
				mp_cost: 0,
				damage: {
					min: 5,
					max: 7
				}
			},
			attack2: {
				name: "Parade",
				mp_cost: 0,
				damage: {
					min: 0,
					max: 0
				},
				resistanceAddition: 3
			},
			ultimate: {
				name: "Miracle",
				mp_cost: 10,
				damage: {
					min: 0,
					max: 0
				},
				healthAddition: 5
			}
		},
		Goblin: {
			name: "Gobelin",
			type: "foe",
			roundActions: ["attack", "attack", "attack", "attack", "flee", "help"],
			health: 25,
			mp: 0,
			strength: 13,
			resistance: 8,
			attack1: {
				name: "Coup de dague",
				mp_cost: 0,
				damage: {
					min: 1,
					max: 4
				}
			},
			attack2: {
				name: "Coup de pied",
				mp_cost: 0,
				damage: {
					min: 2,
					max: 2
				}
			}
		},
		Skeleton1: {
			name: "Guerrier squelette",
			type: "foe",
			roundActions: ["attack", "attack", "attack", "attack", "attack", "help"],
			health: 25,
			mp: 0,
			strength: 13,
			resistance: 8,
			attack1: {
				name: "Coup d'epee",
				mp_cost: 0,
				damage: {
					min: 2,
					max: 3
				}
			}
		},
		Skeleton2: {
			name: "Archer squelette",
			type: "foe",
			roundActions: ["attack", "attack", "attack", "attack", "attack", "flee"],
			health: 25,
			mp: 0,
			strength: 13,
			resistance: 8,
			attack1: {
				name: "Tir de fleche",
				mp_cost: 0,
				damage: {
					min: 2,
					max: 3
				}
			}
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