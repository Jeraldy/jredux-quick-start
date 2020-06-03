import { actions } from '../reducers/counter';
import Button from 'jeddy/dom/Button';
import { dispatch, connect } from 'jeddy/jredux';
const { increment } = actions

const Increase = ({ value }) => {
    return Button({
        children: ['Increment ' + value],
        onclick: () => dispatch(increment())
    })
}

function mapStoreToState(store) {
    return { ...store.counter }
}

export default connect(mapStoreToState)(Increase);

