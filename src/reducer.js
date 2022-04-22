export const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    user: null,
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_CART': {
            const newCart = [...state.cart, action.item]
            localStorage.setItem('cart', JSON.stringify(newCart))
            return {
                ...state,
                cart: newCart,
            }
        }
        case 'REMOVE_FROM_CART': {
            const index = state.cart.findIndex((item) => item.id === action.id)
            const newCart = [...state.cart]
            if (index >= 0) {
                newCart.splice(index, 1)
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not in cart!`
                )
            }
            localStorage.setItem('cart', JSON.stringify(newCart))
            return {
                ...state,
                cart: newCart,
            }
        }
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        default:
            return state
    }
}

export default reducer
