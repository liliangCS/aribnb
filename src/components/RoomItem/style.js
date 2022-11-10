import styled from "styled-components"

export const RoomItemWrapper = styled.div`
  width: ${props => props.itemWidth ?? "25%"};
  padding: 8px;
  box-sizing: border-box;

  .inner {
    width: 100%;
    cursor: pointer;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 0 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%; 
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.descColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .score {
    .ant-rate-star:not(:last-child) {
      margin-right: 0px;
    }

    span {
      font-size: 12px;
      font-weight: 600;
      vertical-align: top;
    }
  }
`
