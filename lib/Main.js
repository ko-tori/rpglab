let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let camera = new Camera(canvas);

let map = new Map();

let SPRITE_SIZE = 25;
let sprites = [];

let player = new Sprite(
	new Vec2(0, 0),
	new Vec2(0, 0),
	new Vec2(SPRITE_SIZE, SPRITE_SIZE),
	new RectRenderer(SPRITE_SIZE, SPRITE_SIZE, 'red')
);
camera.follow(player);
sprites.push(player);

for (let i = 0; i < 10; i++) {
	sprites.push(new Sprite(
		new Vec2(Math.random() * 1000 - 500, Math.random() * 1000 - 500),
		new Vec2(0, 0),
		new Vec2(SPRITE_SIZE, SPRITE_SIZE),
		new RectRenderer(SPRITE_SIZE, SPRITE_SIZE, 'blue')
	));
}


let handleInputs = function() {
	if (keyMap.a) player.moveLeft();
	if (keyMap.d) player.moveRight();
	if (keyMap.w) player.moveUp();
	if (keyMap.s) player.moveDown();
};

let update = function() {
	handleInputs();
	camera.update();
	for (let sprite of sprites) {
		sprite.update();
	}
};

let render = function() {
	ctx.clearRect(0, 0, canvas.height, canvas.width);
	ctx.save();
	camera.transform(ctx);
	map.render(ctx, camera);
	for (let sprite of sprites) {
		sprite.render(ctx, camera);
	}
	ctx.restore();
};


let frame = function() {
	update();
	render();
	requestAnimationFrame(frame);
};

requestAnimationFrame(frame);

let keyMap = {};

let keyDownHandler = function(e) {
	keyMap[e.key] = true;
};

let keyUpHandler = function(e) {
	keyMap[e.key] = undefined;
};

window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);
