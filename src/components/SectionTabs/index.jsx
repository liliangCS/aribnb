import PropTypes from "prop-types"
import React, {memo, useState} from "react"
import {SectionTabsWrapper} from "./style"
import {classes} from "leaf-lib"
import ScrollView from "@/base-ui/ScrollView"

const SectionTabs = memo((props) => {
  const {tabNames = [], tabClick} = props
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemClickHandle = (index, tabName) => {
    setCurrentIndex(index)
    tabClick(index, tabName)
  }

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              className={classes("item", {active: index === currentIndex})}
              key={index}
              onClick={() => itemClickHandle(index, item)}
            >
              {item}
            </div>
          )
        })}
      </ScrollView>
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
}

export default SectionTabs
