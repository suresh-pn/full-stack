import { combineReducers } from "redux";
import userReducer from "./userReducer";
import wishlistReducer from "./wishlistReducer";
import cartReducer from "./cartReducer";
import CurentProductReducer from "./curentProductReducer";

const rootReducer =combineReducers({

    user:userReducer,
    wishlist:wishlistReducer,
    cart:cartReducer,
    currentProduct:CurentProductReducer,
})
export default rootReducer;