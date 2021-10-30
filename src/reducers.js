const initialState = { favorites: [], cart: [] }
export default function reducer(state = initialState, action) {
    if (action.type === 'addToWishList') {
        return { ...state, favorites: state.favorites.concat(action.product) }
    }
    if (action.type === 'addToCart') {
        return { ...state, cart: state.cart.concat(action.product) }
    }

    return state
}
