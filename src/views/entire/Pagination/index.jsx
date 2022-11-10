import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PaginationWrapper } from "./style"

const Pagination = memo((props) => {
  return (
    <PaginationWrapper>Pagination</PaginationWrapper>
  )
})

Pagination.propTypes = {}

export default Pagination