
export const fetchCategories = () => dispatch => (
    fetch('https://api.chucknorris.io/jokes/categories')
    .then(res => {
        if(!res.ok){
            Promise.reject.bind(Promise);
        } else {
            return res.json()
        }
    })
    .then(categories => {
        return dispatch(fetchCategoriesSuccess(categories))
    })
    .catch(err => {
        console.log(err)
        return dispatch(fetchCategoriesFailure(err))
    })
)

export const fetchCategoriesSuccess = (categories) => {
    return {
        type : 'FETCH_CATEGORIES_SUCCESS',
        categories,
        loading : false,
        error : false,
    }
}

export const fetchCategoriesFailure = (err) => {
    return {
        type : 'FETCH_CATEGORIES_FAILURE',
        loading : false,
        error : true,
        err
    }
}