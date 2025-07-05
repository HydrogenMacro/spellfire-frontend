import { Application } from "pixi.js";
import "./style.css"
const app = new Application();

await app.init({
    background: "red",
    resizeTo: window,
    autoDensity: true,
    antialias: true,
    canvas: document.getElementById("game")! as HTMLCanvasElement
});

document.body.appendChild(app.canvas);

const StartScreen = {
    start() {},
};
let ui = {
    startScreen: document.getElementById("start-screen-ui"),
};
