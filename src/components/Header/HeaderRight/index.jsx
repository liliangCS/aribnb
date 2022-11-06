import React, {memo, useState, useEffect} from "react"
import {HeaderRightWrapper} from "./style"
import IconGlobal from "@/assets/svg/IconGlobal"
import IconMenu from "@/assets/svg/IconMenu"
import IconAvatar from "@/assets/svg/IconAvatar"

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)
  const showPanelClick = (event) => {
    event.stopPropagation()
    setShowPanel(true)
  }
  const windowListener = () => {
    setShowPanel(false)
  }

  useEffect(() => {
    window.addEventListener("click", windowListener)
    return () => {
      windowListener.removeListener("click", windowListener)
    }
  }, [])
  return (
    <HeaderRightWrapper>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={showPanelClick}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <span>注册</span>
              <span>登录</span>
            </div>
            <div className="bottom">
              <span>出租房源</span>
              <span>开展体检</span>
              <span>帮助</span>
            </div>
          </div>
        )}
      </div>
    </HeaderRightWrapper>
  )
})

export default HeaderRight
