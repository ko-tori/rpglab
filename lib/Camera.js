class Camera {
	constructor(canvas, following) {
		this.zoom = 1;
		this.canvas = canvas;
		this.following = following;
		if (this.following) this.center = following.pos;
		else this.center = new Vec2(0, 0);
	}

	update() {
		if (this.following) this.center = this.following.pos;
	}

	follow(sprite) {
		this.following = sprite;
		this.center = sprite.pos;
	}

	getViewport() {
		return {
			left: this.center.x - this.canvas.width / 2 / this.zoom,
			right: this.center.x + this.canvas.width / 2 / this.zoom,
			top: this.center.y - this.canvas.height / 2 / this.zoom,
			bottom: this.center.y + this.canvas.height / 2 / this.zoom,
			center: this.center
		}
	}

	transform(ctx) {
		ctx.translate(...this.center.neg());
		ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2);
		ctx.scale(this.zoom, this.zoom);
		ctx.translate(this.canvas.width / this.zoom, this.canvas.height / this.zoom);
	}
}