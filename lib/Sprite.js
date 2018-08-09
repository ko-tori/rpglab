class Sprite {
	constructor(position, velocity, dimensions, renderer) {
		this.pos = position;
		this.vel = velocity;
		[this.width, this.height] = dimensions;
		this.renderer = renderer;
		this.speed = 1.5;
	}

	update(sprite) {
		this.pos.increment(this.vel);
	}

	render(ctx, camera) {
		this.renderer.render(ctx, camera, ...this.pos);
	}

	moveLeft() {
		this.pos.x -= this.speed;
	}

	moveRight() {
		this.pos.x += this.speed;
	}

	moveUp() {
		this.pos.y -= this.speed;
	}

	moveDown() {
		this.pos.y += this.speed;
	}
}