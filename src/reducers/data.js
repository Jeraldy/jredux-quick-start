import { createReducer } from "jeddy/jredux";

var initialState = {
    data: [],
    isLoading: false
}

const dataSlice = createReducer({
    name: 'data',
    initialState,
    reducers: {
        fetchUsersStart: state => {
            return {
                ...state,
                isLoading: true
            }
        },
        fetchUsersSuccess: (state, action) => {
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        },
        fetchUsersFail: state => {
            return {
                ...state,
                isLoading: false
            }
        }
    }
})

export const { reducer, actions } = dataSlice;

