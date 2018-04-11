import Clock from '../Clock';
const Graphics = PIXI.Graphics;

export default class Pointer extends Graphics{
	
	/**
	 * 指针
	 * @param {number} width 宽
	 * @param {number} height 高
	 */
	constructor(width,height){
		super();
		this.beginFill(0x000);
		this.drawRoundedRect(0, 0, width, height, 1);
		this.endFill();
	}

}