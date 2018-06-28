
const initialState = []

export default function reducer(state=initialState, action){
    switch(action.type){
        case 'FETCH_CATEGORIES_SUCCESS':
            return Object.assign([], state, action.categories)
        default:
            return state
    }
}