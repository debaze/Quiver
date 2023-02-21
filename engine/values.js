var	player = {
		movement: {
			on: null,
			off: null,
			keydown: null,
			keyup: null,
			move: null
		},
		direction: {
			top: false,
			bottom: false,
			left: false,
			right: false
		},
		canMove: {
			top: false,
			bottom: false,
			left: false,
			right: false
		},
		x: 0,
		y: 0,
		newx: 0,
		newy: 0,
		speed: 0.1
	},
	map = {
		structure: [],
		x: 0,
		y: 0,
		slotWidth: 64
	},
	lvl_0 = [],
	lvl_1 = [],
	lvl_2 = [],
	lvl_3 = []