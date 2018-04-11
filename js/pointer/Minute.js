import Pointer from './Pointer';

export default class Minute extends Pointer {

	/**
	 * @param {number} width 宽
	 * @param {number} height 高
	 */
	constructor(width, height) {
		super(width, height);
		this.pivot.set(width / 2, height - 10);
		this.run();
	}

	run(){
		const ticker = new PIXI.ticker.Ticker();
		ticker.add((deltaTime) => {
			// do something every frame
			let second = new Date().getMinutes();
			let angle = 360 / 60 * second - 90;
			this.rotation = Math.PI / 180 * (angle + 90);
		});
		ticker.start();
	}
}