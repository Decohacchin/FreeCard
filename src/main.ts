import * as PIXI from "pixi.js";
const app = new PIXI.Application({ backgroundColor: 0xffffff });
document.body.appendChild(app.view);

const txt = new PIXI.Text("Hello World");
app.stage.addChild(txt);
