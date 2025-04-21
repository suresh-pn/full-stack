export const addToCart = (item) => ({
    type: "ADD_TO_CART",
    payload: item
});
export const removeFromCart = (item) => ({
    type: "REMOVE_FROM_CART",
    payload: item
});


export const incrementCartCount = () => ({
    type: "INCREMENT_CART_COUNT"
})  ;

export const decrementCartCount = () => ({
    type: "DECREMENT_CART_COUNT"
});