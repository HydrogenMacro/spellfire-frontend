import { getTokenFromDiscordSdk } from "./auth/discordActivities";
import { Game } from "./state/game";

const startScreen = document.getElementById("start-screen")!;
const enterGameBtn = document.getElementById("start-screen-play-btn")!;

enterGameBtn.addEventListener("click", async () => {
    startScreen.remove();
    Game.init();
});
