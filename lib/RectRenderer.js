class RectRenderer {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}

	render(ctx, camera, x, y) {
		let bounds = camera.getViewport();
		if (x - this.width / 2 > bounds.right || x + this.width / 2 < bounds.left
			|| y - this.height / 2 > bounds.bottom || y + this.height / 2 < bounds.top) {
			return false;
		}
		ctx.save();
		ctx.fillStyle = this.color;
		ctx.fillRect(x - this.width / 2, y - this.height / 2, this.width, this.height);
		ctx.restore();
		return true;
	}
}