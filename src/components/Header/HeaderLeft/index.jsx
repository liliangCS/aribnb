import React, {memo} from "react"
import {HeaderLeftWrapper} from "./style"
import IconLogo from "@/assets/svg/IconLogo"

const HeaderLeft = memo(() => {
  return (
    <HeaderLeftWrapper>
      <div className="logo">
        <IconLogo />
      </div>
    </HeaderLeftWrapper>
  )
})

export default HeaderLeft
