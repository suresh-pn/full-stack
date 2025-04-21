const initialState = {
  cartItems: [],    
  cartCounter: 0,
  totalPrice: 0,
  deliveryCharges:60,
  taxes: 0,
  grandTotal: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const exitingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (exitingItemIndex !== -1) {
                const updatedCartItems = state.cartItems.map((item, index) => {
                    if (index === exitingItemIndex) {
                        return {
                            ...item,
                            quantity: item.quantity + 1, total_item_price:(item.quantity + 1) * item.price};
                        }
                    
                    return item;
                });

                return {
                    ...state,
                    cartItems: updatedCartItems,
                    cartCounter: state.cartCounter + 1,
                    totalPrice: state.totalPrice + action.payload.price,
                    taxes:(state.totalPrice + action.payload.price) * 0.18,
                    grandTotal: state.totalPrice + state.taxes +action.payload.price
                };
            } else{
            return{
                ...state,
                cartItems: [...state.cartItems, {...action.payload, quantity: 1, total_item_price: action.payload.price}],
                cartCounter: state.cartCounter + 1,
                totalPrice: state.totalPrice + action.payload.price,
                taxes:(state.totalPrice + action.payload.price) * 0.18,
                grandTotal: state.totalPrice + state.taxes +action.payload.price
            };
        }
        case "REMOVE_FROM_CART":
            const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            const removedItem = state.cartItems.find(item => item.id === action.payload.id);
            return {
                ...state,
                cartItems: updatedCartItems,
                cartCounter: state.cartCounter - 1,
                totalPrice: state.totalPrice - removedItem.price,
                taxes:(state.totalPrice - removedItem.price) * 0.18,
                grandTotal: state.totalPrice + state.taxes - removedItem.price
            };
            default:
                return state;
        }

        };
        
        export default cartReducer;