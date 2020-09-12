import { actions } from '../Reducers/Counter';
import Button from 'jeddy/dom/Button';
import { dispatch } from 'jeddy/jredux';
const { handleDecrement } = actions

const Decrement = () => {
    return Button({
        class: 'btn',
        children: ['Decrement'],
        onclick: () => dispatch(handleDecrement())
    })
}

export default Decrement;

