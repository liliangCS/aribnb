import React, {memo, useState} from "react"
import {FilterWrapper} from "./style"
import filterData from "@/assets/data/filterData.json"
import { classes } from "leaf-lib"

const Filter = memo(() => {
  // 组件状态
  const [selectItems, setSelectItems] = useState([])

  // 事件处理逻辑
  const itemClickHandle = (item) => {
    if (selectItems.includes(item)) {
      setSelectItems(selectItems.filter(value => value !== item))
    } else {
      setSelectItems([...selectItems, item])
    }
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classes("item", { active: selectItems.includes(item) })}
              key={item}
              onClick={() => itemClickHandle(item)}
            >
              {item}
            </div>
          )
        })}
      </div>
    </FilterWrapper>
  )
})

export default Filter
