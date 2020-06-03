import Div from "jeddy/dom/Div";
import Increase from "./widgets/Increase";
import Descrease from "./widgets/Descrease";

export default () => {
    return Div({
        children: [
            Increase(),
            Descrease()
        ]
    })
}

