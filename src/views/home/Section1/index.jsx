import PropTypes from "prop-types"
import React, {memo} from "react"
import {Section1Warpper} from "./style"
import SectionHeader from "@/components/SectionHeader"
import SectionRooms from "@/components/SectionRooms"
import SectionFooter from "@/components/SectionFooter"

const Section1 = memo((props) => {
  const { dataInfo } = props
  return (
    <Section1Warpper>
      <SectionHeader title={dataInfo.title} subtitle={dataInfo.subtitle}></SectionHeader>
      <SectionRooms roomList={dataInfo.list}></SectionRooms>
      <SectionFooter />
    </Section1Warpper>
  )
})

Section1.propTypes = {
  dataInfo: PropTypes.object
}

export default Section1
