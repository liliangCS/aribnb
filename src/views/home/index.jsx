import React, {memo, useEffect} from "react"
import {HomeWrapper} from "./style"
import Banner from "./Banner"
import {useSelector, useDispatch, shallowEqual} from "react-redux"
import {fetchHomeDataAction} from "@/store/modules/home"
import Section1 from "./Section1"
import Section2 from "./Section2"
import {isEmptyObject} from "leaf-lib"

const Home = memo(() => {
  const dispatch = useDispatch()
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotRecommendDestInfo,
  } = useSelector((state) => {
    return {
      goodPriceInfo: state.homeState.goodPriceInfo,
      highScoreInfo: state.homeState.highScoreInfo,
      discountInfo: state.homeState.discountInfo,
      hotRecommendDestInfo: state.homeState.hotRecommendDestInfo
    }
  }, shallowEqual)
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <Banner />
      <div className="content">
        {isEmptyObject(discountInfo) || <Section2 dataInfo={discountInfo} />}
        {isEmptyObject(hotRecommendDestInfo) || (
          <Section2 dataInfo={hotRecommendDestInfo} />
        )}

        {isEmptyObject(goodPriceInfo) || <Section1 dataInfo={goodPriceInfo} />}
        {isEmptyObject(highScoreInfo) || <Section1 dataInfo={highScoreInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
