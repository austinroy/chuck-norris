
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
        console.log(err)
    })
)

export const fetchJokesSuccess = (jokes) => {
    return {
        type : 'FETCH_JOKES_SUCCESS',
        jokes
    }
}