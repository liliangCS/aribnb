import React, {memo, useRef, useEffect, useState} from "react"
import {ScrollViewWrapper} from "./style"
import IconArrowRight from "@/assets/svg/IconArrowRight"
import IconArrowLeft from "@/assets/svg/IconArrowLeft"

const ScoreView = memo((props) => {
  // 组件状态
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [posIndex, setPosIndex] = useState(0)

  const totalDistance = useRef()
  const scrollContentRef = useRef()

  // 组件渲染逻辑
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth
    const clientWidth = scrollContentRef.current.clientWidth
    const distance = scrollWidth - clientWidth
    setShowRight(distance > 0)
    totalDistance.current = distance
  }, [props.children])

  // 事件处理逻辑
  const controlClickHandle = (isRight, event) => {
    event.stopPropagation()
    const newIndex = posIndex + (isRight ? 1 : -1)
    const newEl = scrollContentRef.current.children[newIndex]
    scrollContentRef.current.style.transform = `translate(-${newEl.offsetLeft}px)`
    setPosIndex(newIndex)
    setShowLeft(newEl.offsetLeft > 0)
    setShowRight(totalDistance.current > newEl.offsetLeft)
  }

  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className="btn-left" onClick={(e) => controlClickHandle(false, e)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="btn-right" onClick={(e) => controlClickHandle(true, e)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

export default ScoreView
