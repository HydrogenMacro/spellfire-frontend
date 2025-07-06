import type { Point, Rectangle } from "pixi.js";

class Entity {
    position: Point;
    boundingBox: Rectangle;
    constructor(position: Point) {
        this.position = position;
    }
    
}