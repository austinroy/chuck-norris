
const initialState = {}

export default function reducer(state=initialState, action){
    switch(action.type){
        case 'FETCH_CATEGORIES_SUCCESS':
            return Object.assign({}, state, {
                data : action.categories,
                loading : action.loading,
                error : action.error,
            })
        case 'FETCH_CATEGORIES_FAILURE':
            return Object.assign({}, state, {
                data : [],
                loading : action.loading,
                error : action.error,
            })
        default:
            return state
    }
}