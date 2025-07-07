class Connection {
    ws: WebSocket;
    constructor(wsURL: string) {
        this.ws = new WebSocket(wsURL);
        this.ws.onopen = (ev) => {

        }
        this.ws.onmessage = ({ data }) => {

        }
        this.ws.onclose = ({ reason }) => {

        }
    }

}