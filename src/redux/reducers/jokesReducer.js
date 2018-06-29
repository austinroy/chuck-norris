
const initialState = {}

export default function reducer(state=initialState, action){
    switch(action.type){
        case 'FETCH_JOKES_SUCCESS':
            return Object.assign({}, state, {
                data : action.joke,
                loading : action.loading,
                error : action.error,

            })
        case 'FETCH_JOKES_FAILURE':
            return Object.assign({}, state, {
                data : [],
                loading : action.loading,
                error : action.error,
            })
        default:
            return state
    }
}