let clientTickNum = 0;
let lastTickTimestamp = Date.now();
let tickRate = 30;
let tickMs = 1000 / tickRate;

function gameLoop(timestamp: number) {
    if (timestamp - lastTickTimestamp > tickMs) {
        lastTickTimestamp = timestamp;
        
    }
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);