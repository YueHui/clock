import Clock from './js/Clock';
let Application = PIXI.Application,
	Container = PIXI.Container,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	Graphics = PIXI.Graphics,
	Sprite = PIXI.Sprite,
	Rectangle = PIXI.Rectangle;

const radius = 200;

let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
	type = "canvas"
}

PIXI.utils.sayHello(type);

let app = new Application({ width: 600, height: 600, backgroundColor:0xcccccc });
document.body.appendChild(app.view);

let clock = new Clock(radius);
clock.x = 100;
clock.y = 100;
app.stage.addChild(clock);

app.ticker.add(delta => runClock(delta));

function runClock(delta){
	clock.time = new Date();
}
	


