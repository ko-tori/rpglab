class Vec2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	add(other) { // return the sum of this and other
		return new Vec2(this.x + other.x, this.y + other.y);
	}

	increment(other) { // add other to this (modifies this and does not return anything)
		this.x += other.x;
		this.y += other.y;
	}

	dot(other) { // return the dot product of this and other
		return this.x * other.x + this.y + other.y;
	}

	m() { // return the magnitude
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}

	scale(k) {
		return new Vec2(k * this.x, k * this.y);
	}

	neg() {
		return new Vec2(-this.x, -this.y);
	}

	*[Symbol.iterator]() { // makes the vector iterable
		yield this.x;
		yield this.y;
	}
}

Math._abs = Math.abs;
Math.abs = function(n) {
	if (n instanceof Vec2) return n.m();
	return Math._abs(n);
}