const reducer = (state, action) => {
    console.log(state, action)
    if (action.type === "ADD_ITEM") {
        if (state.itemCount >= 10) {
            return {
                ...state,
                itemCount: state.itemCount = 10
            }
        } else {
            return {
                ...state,
                itemCount: state.itemCount + 1
            }
        }
    }
    if (action.type === "REMOVE_ITEM") {
        if (state.itemCount <= 0) {
            return {
                ...state,
                itemCount: state.itemCount = 0
            }
        } else {
            return {
                ...state,
                itemCount: state.itemCount - 1
            }
        }
    }
    if (action.type === "ADD_TO_CART") {
        if (state.itemCount >= 1) {
            return {
                ...state,
                addedToCart: state.addedToCart = true,
                cartTotal: state.cartTotal + state.itemCount,
            }
        }
    }
    if (action.type === "DELETE_FROM_CART") {
        if (state.itemCount <= 1) {
            return {
                ...state,
                addedToCart: state.addedToCart = false,
            }
        } else {
            return {
                ...state,
                cartTotal: state.cartTotal - 1
            }
        }
    }
    if (action.type === "CHECKOUT") {
        return {
            ...state,
            addedToCart: state.addedToCart = false,
            cartTotal: state.cartTotal = 0,
            itemCount: state.itemCount = 1
        }
    }
    return state
}

export default reducer