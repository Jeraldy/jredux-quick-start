import { createReducer } from "jeddy/jredux";

const counterReducer = createReducer({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        handleIncrement: (state) => {
            return {
                counter: state.counter + 1
            }
        },
        handleDecrement: (state) => {
            return {
                counter: state.counter - 1
            }
        }
    }
})

export const { reducer, actions } = counterReducer;

