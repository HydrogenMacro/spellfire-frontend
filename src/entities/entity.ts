import type { Container, Point, Rectangle } from "pixi.js";

type Attributes = {
    doCSP: boolean;
};
export abstract class Entity {
    id: number;

    boundingBox: Rectangle;
    sprite: Container;
    constructor(
        id: number,
        position: Point,
        boundingBox: Rectangle,
        sprite: Container,
    ) {
        this.id = id;
        this.position = position;
        this.boundingBox = boundingBox;
        this.sprite = sprite;
    }
    updateSprite();
    velocity: StatefulCalculation<Vec2>;
    position: Vec2;
    rotation: number;
    //static attributes: Attributes;
}

export type EasingFunc: (n: number) => number;
export const easing: { [fn: string]: EasingFunc } = {
	linear: (n) => n,
	quadratic: (n) => n * n,
	sqrt: (n) => Math.sqrt(n)
};

interface StatefulCalculation<T> {
	calculate(): T;
}

class AccelVelocity implements StatefulCalculation<Vec2> {
	initialVelocity: Vec2;
	currentAccelTick: number;
	accelTickDuration: number;
	targetVelocity: Vec2;
	easingFunc: EasingFunc;
	calculate(): Vec2 {
		let velocityDiffProgress = (this.accelTickDuration - this.currentAccelTick) / this.accelTickDuration;
		 return add(scale(subtract(this.targetVelocity, this.initialVelocity), velocityDiffProgress), this.targetVelocity)
	}
}
class StaticVelocity implements StatefulCalculation<Vec2>  {
	velocity: Vec2
	calculate(): Vec2 {
		return this.velocity;
	}
}
export type Vec2 = [number, number];

export function vec2(point: { x: number, y: number }): Vec2;
export function vec2(x: number, y?: number): Vec2;
export function vec2(xOrPoint: { x: number, y: number } | number, y?: number): Vec2 {
	if (typeof xOrPoint === "object") {
		let { x, y } = xOrPoint;
		return [x, y];
	}
    return [xOrPoint, y ?? xOrPoint];
}

export function vecFromAngle(angle: number, length = 1): Vec2 {
    return [Math.cos(angle) * length, Math.sin(angle) * length];
}
export function vecToPoint([x, y]: Vec2): { x: number; y: number } {
    {
        (x, y);
    }
}
export function add(a: Vec2, b: Vec2): Vec2 {
    return [a[0] + b[0], a[1] + b[1]];
}

export function subtract(a: Vec2, b: Vec2): Vec2 {
    return [a[0] - b[0], a[1] - b[1]];
}

export function multiply(a: Vec2, b: Vec2): Vec2 {
    return [a[0] * b[0], a[1] * b[1]];
}
export function scale(a: Vec2, scalar: number): Vec2 {
    return [a[0] * scalar, a[1] * scalar];
}

export function divide(a: Vec2, b: Vec2): Vec2 {
    return [a[0] / b[0], a[1] / b[1]];
}

export function angle(v: Vec2): number {
    return Math.atan2(v[1], v[0]);
}

export function normalize(v: Vec2): Vec2 {
    const length = Math.hypot(v[0], v[1]);
    return length === 0 ? [0, 0] : [v[0] / length, v[1] / length];
}

export function distance(a: Vec2, b: Vec2): number {
    return Math.hypot(b[0] - a[0], b[1] - a[1]);
}
export function dot(a: Vec2, b: Vec2): number {
    return a[0] * b[0] + a[1] * b[1];
}

export function length(v: Vec2): number {
    return Math.hypot(v[0], v[1]);
}

export function scale(v: Vec2, scalar: number): Vec2 {
    return [v[0] * scalar, v[1] * scalar];
}

export function rotate(v: Vec2, radians: number): Vec2 {
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    return [v[0] * cos - v[1] * sin, v[0] * sin + v[1] * cos];
}

export function reflect(v: Vec2, normal: Vec2): Vec2 {
    const d = dot(v, normal);
    return subtract(v, scale(normal, 2 * d));
}

export function perpendicular(v: Vec2): Vec2 {
    return [-v[1], v[0]];
}

function project(v: Vec2, onto: Vec2): Vec2 {
    const ontoNorm = normalize(onto);
    const dotProd = dot(v, ontoNorm);
    return scale(ontoNorm, dotProd);
}

export function lerp(a: Vec2, b: Vec2, t: number): Vec2 {
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}

interface PhysicsObject {
    onHit();
}
