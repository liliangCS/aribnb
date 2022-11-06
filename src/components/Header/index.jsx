import React, {memo} from "react"
import {HeaderWrapper} from "./style"
import HeaderLeft from "./HeaderLeft"
import HeaderCenter from "./HeaderCenter"
import HeaderRight from "./HeaderRight"

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default Header
