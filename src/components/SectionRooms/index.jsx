import PropTypes from "prop-types"
import React, {memo} from "react"
import {SectionRoomsWrapper} from "./style"
import RoomItem from "../RoomItem"


const SectionRooms = memo((props) => {
  const {roomList} = props
  return (
    <SectionRoomsWrapper className="room-list">
      {roomList?.slice(0, 8).map((item) => {
        return <RoomItem itemData={item} key={item.id} />
      })}
    </SectionRoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms
