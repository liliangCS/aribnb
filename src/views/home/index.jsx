import React, {memo, useEffect} from "react"
import {HomeWrapper} from "./style"
import Banner from "./Banner"
import {useSelector, useDispatch, shallowEqual} from "react-redux"
import {fetchHomeDataAction} from "@/store/modules/home"
import SectionHeader from "@/components/SectionHeader"
import SectionRooms from "@/components/SectionRooms"

const Home = memo(() => {
  const dispatch = useDispatch()
  const {goodPriceInfo} = useSelector((state) => {
    return {
      goodPriceInfo: state.homeState.goodPriceInfo
    }
  }, shallowEqual)
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <Banner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <SectionRooms roomList={goodPriceInfo.list}></SectionRooms>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
