import { configureStore } from "@reduxjs/toolkit"
import detailReducer from "./modules/detail"
import entireReducer from "./modules/entire"
import homeReducer from "./modules/home"


const store = configureStore({
  reducer: {
    detailState: detailReducer,
    entireState: entireReducer,
    homeState: homeReducer
  }
})

export default store