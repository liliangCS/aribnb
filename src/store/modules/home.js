import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {
  getDiscountData,
  getGoodPriceData,
  getHighScoreData,
  getHotReCommendDestData
} from "@/service"

export const fetchHomeDataAction = createAsyncThunk(
  "fetchHomeDataAction",
  (payload, {dispatch}) => {
    getGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    })
    getHighScoreData().then((res) => {
      dispatch(changeHighScoreAction(res))
    })
    getDiscountData().then((res) => {
      dispatch(changeDiscountAction(res))
    })
    getHotReCommendDestData().then((res) => {
      dispatch(changeHotRecommendDestAction(res))
    })
  }
)

const homeSlice = createSlice({
  name: "homeSlice",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendDestInfo: {},
    longForInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, {payload}) {
      state.goodPriceInfo = payload
    },
    changeHighScoreAction(state, {payload}) {
      state.highScoreInfo = payload
    },
    changeDiscountAction(state, {payload}) {
      state.discountInfo = payload
    },
    changeHotRecommendDestAction(state, {payload}) {
      state.hotRecommendDestInfo = payload
    }
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreAction,
  changeDiscountAction,
  changeHotRecommendDestAction
} = homeSlice.actions
export default homeSlice.reducer
