import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getHomePriceData } from "@/service"

export const fetchHomeDataAction = createAsyncThunk("fetchHomeDataAction", async () => {
  const res = await getHomePriceData()
  return res
})

const homeSlice = createSlice({
  name: "homeSlice",
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload
    }
  }
})

export const { changeGoodPriceInfo } = homeSlice.actions
export default homeSlice.reducer