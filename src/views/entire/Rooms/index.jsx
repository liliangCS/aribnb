import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomsWrapper } from "./style"

const Rooms = memo((props) => {
  return (
    <RoomsWrapper>Rooms</RoomsWrapper>
  )
})

Rooms.propTypes = {}

export default Rooms