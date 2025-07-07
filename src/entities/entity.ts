import type { Container, Point, Rectangle } from "pixi.js";

class Entity<State> {
    id: number;
    position: Point;
    boundingBox: Rectangle;
    sprite: Container;
    constructor(id: number, position: Point, boundingBox: Rectangle, sprite: Container) {
        this.id = id;
        this.position = position;
        this.boundingBox = boundingBox;
        this.sprite = sprite;
    }
    updateSprite() {

    }
}