import PropTypes from "prop-types"
import React, {memo, useCallback, useState} from "react"
import {Section2Wrapper} from "./style"
import SectionHeader from "@/components/SectionHeader"
import SectionRooms from "@/components/SectionRooms"
import SectionTabs from "@/components/SectionTabs"
import SectionFooter from "@/components/SectionFooter"

const Section2 = memo((props) => {
  // props
  const {dataInfo} = props
  // 内部状态
  const initialTab = Object.keys(dataInfo.dest_list)[0]
  const [currentTab, setCurrentTab] = useState(initialTab)

  // 事件处理函数
  const tabClick = useCallback((index, tabName) => {
    console.log(index, tabName)
    setCurrentTab(tabName)
  }, [])

  return (
    <Section2Wrapper>
      <SectionHeader title={dataInfo.title} subtitle={dataInfo.subtitle} />
      <SectionTabs
        tabNames={dataInfo.dest_address?.map((item) => item.name)}
        tabClick={tabClick}
      />
      <SectionRooms
        roomList={dataInfo.dest_list?.[currentTab]}
        itemWidth="33.333333%"
      />
      <SectionFooter name={currentTab} />
    </Section2Wrapper>
  )
})

Section2.propTypes = {
  dataInfo: PropTypes.object
}

export default Section2
