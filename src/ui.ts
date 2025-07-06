class UI {
    constructor() {

    }
    createUI(gameState: GameState) {
        gameState.reactLive(["abc", "def"], ([abc, def]) => {
            
        });
    }
}
function createUIDriver<D>(screenElId: string, initialState: D, initializer: (state: D) => void): UIFactory {

}
const StartScreen = createUIDriver("start-screen", {}, (state) => {
    document.getElementById("start-screen-name-input")!.addEventListener("input", () => {

    });
})
let ui = {
    startScreen: document.getElementById("start-screen-ui"),
};

export ui;