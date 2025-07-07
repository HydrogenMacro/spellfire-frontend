function createClientPacket(packetType: string) {
    return JSON.stringify({
        timestamp: Date.now(),
    });
}
/*
{
timestamp: number,
playerMoveDir: [0, Math.PI * 2],
playerShootDir: [0, Math.PI * 2],
playerIsMoving: boolean,
playerIsShooting: string
}
*/
