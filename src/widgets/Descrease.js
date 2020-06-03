import { actions } from '../reducers/counter';
import Button from 'jeddy/dom/Button';
import { dispatch, connect } from 'jeddy/jredux';
const { decrement } = actions

const Decrease = ({ value }) => {
    return Button({
        children: ['decrement ' + value],
        onclick: () => dispatch(decrement())
    })
}

function mapStoreToState(store) {
    return { ...store.counter }
}

export default connect(mapStoreToState)(Decrease);

