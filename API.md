# API.md

## Common Typedefs used

```
Vec2 := {
    x: number,
    y: number
}
EasingFunc := "linear" | "quadratic" | "sqrt"
Velocity := { type: static, velocity: Vec2 } 
    | { type: accel, initialVelocity: Vec2, currentAccelTick: number, accelTickDuration: number, targetVelocity: Vec2, easingFunc: EasingFunc }
Shape := { type: circle, radius: number }
EntityId := number
EntityType := "rock" | "tree" | "player" | "bush"
PlayerShootVariation := "primary" | "secondary" /* LMB or RMB */
PlayerShootMode := "start" | "end"
PlayerState := {
    shoot_state: {
        is_shooting: boolean,
        shoot_mode: PlayerShootMode,
        shoot_variation: PlayerShootVariation
    }
}
BushState := {
    is_shaking: boolean,
    shake_duration: number, // shake stops at modulo of 5 ticks
}
Entity := {
    id: EntityId,
    type: string,
    position: Vec2,
    rotation: number, // radians, 0 to 2pi
    velocity: Velocity,
    shape: Shape,
    attributes: Array<EntityAttributes>,
    state: null | PlayerState | MobState
}
```

## Message Structure
```
{
    timestamp: number, // UNIX
    packets: Array<Packet>
}
```

## Client Packets

```
{
   type: enter_game // sent on initial spawn or death respawn
}
 
PlayerAction := { type: move, direction: Vec2 } 
    | { type: attack, 
        mode: "start" | "end", 
        variation: "primary" | "secondary" /* LMB or RMB */ }
{
    type: player_action
    action: PlayerAction
}
```

## Server Packets
```
{
    type: initialize, // sent in respawn to enter_game
    entities: Array<Entity>,
    player_id: EntityId,
}
{
    type: update,
    entities: Array<Entities> // todo: diffing
}
```
