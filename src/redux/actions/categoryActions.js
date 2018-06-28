
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
        dispatch(fetchCategoriesSuccess(categories))
    })
    .catch(err => {
        console.log(err)
    })
)

export const fetchCategoriesSuccess = (categories) => {
    return {
        type : 'FETCH_CATEGORIES_SUCCESS',
        categories
    }
}