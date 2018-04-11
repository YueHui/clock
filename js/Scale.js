const Graphics = PIXI.Graphics;


export default class extends Graphics {

	/**
	 * 
	 * @param {number} radius 圆的半径
	 * @param {number} index 序号
	 */
	constructor(radius, index) {
		super();

		this.beginFill(0x000);
		this.drawRoundedRect(0, 0, 10, 30, 3);
		this.endFill();
		this.pivot.set(5, 15);
		let angle = 360 / 12 * index - 90;
		this.rotation = Math.PI / 180 * (angle + 90);
		this.x = radius + radius * Math.cos(Math.PI / 180 * angle);
		this.y = radius + radius * Math.sin(Math.PI / 180 * angle);
	}
}

