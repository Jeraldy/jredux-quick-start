import { createReducer } from "jeddy/jredux";

const counterSlice = createReducer({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: state => {
            return {
                value: state.value + 1
            }
        },
        decrement: state => {
            return {
                value: state.value - 1
            }
           
        }
    }
})

export const { reducer , actions } = counterSlice;

