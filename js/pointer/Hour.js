import Pointer from './Pointer';

export default class Hour extends Pointer {

	/**
	 * @param {number} width 宽
	 * @param {number} height 高
	 */
	constructor(width, height) {
		super(width, height);
		this.pivot.set(width / 2, height - 5);
		this.run();
	}

	run() {
		const ticker = new PIXI.ticker.Ticker();
		ticker.add((deltaTime) => {
			// do something every frame
			let second = new Date().getHours();
			let angle = 360 / 12 * second - 90;
			this.rotation = Math.PI / 180 * (angle + 90);
		});
		ticker.start();
	}
}