import Scale from './Scale';
import Second from './pointer/Second';
import Minute from './pointer/Minute';
import Hour from './pointer/Hour';

const Container = PIXI.Container;

export default class Clock extends Container{

	/**
	 * @param {number} radius 钟表的半径
	 */
	constructor(radius){
		super();
		this.radius = radius;
		this.time = new Date;
		this.second;
		this.minute;
		this.hour;
		this.addScales();
		this.addPointers();
	}

	addScales(){
		for (let i = 0; i < 12; i++) {
			let scale = new Scale(this.radius, i);
			this.addChild(scale);
		}
	}

	addPointers(){
		this.second = new Second(1,this.radius*0.8);
		this.second.x = this.radius;
		this.second.y = this.radius;
		this.addChild(this.second);

		this.minute = new Minute(5,this.radius*0.65);
		this.minute.x = this.radius;
		this.minute.y = this.radius;
		this.addChild(this.minute);

		this.hour = new Hour(10,this.radius*0.4);
		this.hour.x = this.radius;
		this.hour.y = this.radius;
		this.addChild(this.hour);
	}
}