import React, {memo} from "react"
import {HeaderCenterWrapper} from "./style"
import IconSearch from "@/assets/svg/IconSearch"

const HeaderCenter = memo(() => {
  return (
    <HeaderCenterWrapper>
      <div className="search">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearch />
        </div>
      </div>
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter
