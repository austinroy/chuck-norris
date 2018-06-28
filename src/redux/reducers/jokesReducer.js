
const initialState = []

export default function reducer(state=initialState, action){
    switch(action.type){
        case 'FETCH_JOKES_SUCCESS':
            return Object.assign([], state, action.jokes)
        default:
            return state
    }
}