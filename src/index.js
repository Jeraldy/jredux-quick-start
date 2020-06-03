import { Jeddy, StatefulWidget } from "jeddy";
import reducers from './reducers/root';
import { updateState } from "jeddy/jredux";
import App from "./App";

class JReduxApp extends StatefulWidget {
    constructor() {
        super()
        return this.connect()
    }

    componentDidMount() {
        updateState(this)
    }

    render() {
        return App()
    }
}

Jeddy.Init({
    app: new JReduxApp(),
    root: document.getElementById("root")
}).Reducers({ ...reducers });
