import PropTypes from "prop-types"
import React, {memo} from "react"
import {SectionFooterWrapper} from "./style"
import IconMoreArrow from "@/assets/svg/IconMoreArrow"
import {classes} from "leaf-lib"
import { useNavigate } from "react-router-dom"

const SectionFooter = memo((props) => {
  const {name} = props

  // 事件处理逻辑
  const navigate = useNavigate()
  const routeClickHandle = () => {
    navigate("/entire")
  }

  return (
    <SectionFooterWrapper onClick={routeClickHandle}>
      <div className={classes("info", {active: !!name})}>
        {!!name ? (
          <div className="text">查看更多{name}房源</div>
        ) : (
          <div className="text">显示全部</div>
        )}
        <IconMoreArrow />
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter
