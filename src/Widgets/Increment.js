import { actions } from '../reducers/counter';
import Button from 'jeddy/dom/Button';
import { dispatch } from 'jeddy/jredux';
const { handleIncrement } = actions

const Increment = () => {
    return Button({
        class: 'btn',
        children: ['Increment'],
        onclick: () => dispatch(handleIncrement())
    })
}

export default Increment;

