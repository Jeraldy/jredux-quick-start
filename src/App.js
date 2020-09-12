import Div from "jeddy/dom/Div";
import Center from "jeddy/layouts/Center";
import Row from "jeddy/layouts/Row";
import Br from "jeddy/dom/Br";
import RowAlignment from "jeddy/layouts/RowAlignment";
import Increment from "./Widgets/Increment";
import Decrement from "./Widgets/Decrement";
import { connect } from "jeddy/jredux";
import './App.css';


const App = ({ counter }) => {
    return Center({
        child: Div({
            children: [
                Div({
                    children: ['Counter', Br(), `${counter}`],
                    style: {
                        textAlign: 'center',
                        fontSize: '6rem',
                        fontWeight: 'bold'
                    }
                }),
                Row({
                    children: [Increment(), Decrement()],
                    align: RowAlignment.SpaceBetween
                })
            ]
        })
    })
}

const mapStateToProps = (state) => {
    return { ...state.counterReducer }
}

export default connect(mapStateToProps)(App)