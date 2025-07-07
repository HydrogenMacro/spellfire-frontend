import { Application } from "pixi.js";

export class Game {
    static async init() {
        const app = new Application();

        await app.init({
            background: "red",
            resizeTo: window,
            autoDensity: true,
            antialias: true,
            canvas: document.getElementById("game")! as HTMLCanvasElement,
            resolution: window.devicePixelRatio,
        });
    }
}
