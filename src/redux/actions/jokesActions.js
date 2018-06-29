
export const fetchJokes = category => dispatch => (
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(res => {
        if(!res.ok){
            Promise.reject.bind(Promise);
        } else {
            return res.json()
        }
    })
    .then(categories => {
        dispatch(fetchJokesSuccess(categories))
    })
    .catch(err => {
        dispatch(fetchJokesSuccess(err))
    })
)

export const fetchJokesSuccess = (joke) => {
    return {
        type : 'FETCH_JOKES_SUCCESS',
        joke,
        loading : false,
        error : false,
    }
}

export const fetchJokesFailure = (err) => {
    return {
        type : 'FETCH_JOKES_FAILURE',
        loading : false,
        error : true,
        err
    }
}