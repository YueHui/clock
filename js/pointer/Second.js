import Pointer from './Pointer';

export default class Second extends Pointer {

	/**
	 * @param {number} width 宽
	 * @param {number} height 高
	 */
	constructor(width, height) {
		super(width, height);
		this.pivot.set(width / 2, height - 20);
		this.run();
		
	}

	run(){
		const ticker = new PIXI.ticker.Ticker();
		ticker.add((deltaTime) => {
			// do something every frame
			let second = new Date().getSeconds();
			let angle = 360 / 60 * second - 90;
			this.rotation = Math.PI / 180 * (angle + 90);
		});
		ticker.start();
	}
}