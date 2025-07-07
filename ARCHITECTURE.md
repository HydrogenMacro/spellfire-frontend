# Architecture

All paths are assumed to be relative to `src`

## Structure

Initially, the app :

The game uses a pseudo-TEA-MVC + pub/sub like structure:

- `/state` contains the game state
- `/ui` and `/multiplayer` contains publishers that send events to `/game`
- `/entities` contains render info and drivers of every entity
- `/engine` contains drivers for systems like physics and audio
- `/game` contains the driving render loop and subscribes to events to delegate to drivers
