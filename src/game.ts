import { Application } from "pixi.js";

class Game {
    constructor() {}
    static async create() {
        const app = new Application();

        await app.init({
            background: "red",
            resizeTo: window,
            autoDensity: true,
            antialias: true,
            canvas: document.getElementById("game")! as HTMLCanvasElement,
            resolution: window.devicePixelRatio
        });
        
    }
}