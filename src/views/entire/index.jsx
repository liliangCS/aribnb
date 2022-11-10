import React, { memo } from 'react'
import { EntireWrapper } from "./style"
import Filter from './Filter'
import Pagination from './Pagination'
import Rooms from './Rooms'

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <Filter />
      <Rooms />
      <Pagination />
    </EntireWrapper>
  )
})

export default Entire