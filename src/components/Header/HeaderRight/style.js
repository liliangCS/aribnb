import styled from "styled-components"

export const HeaderRightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;
  color: ${props => props.theme.textColor.primaryColor};

  .btns {
    display: flex;
    align-items: center;
    margin-right: 12px;

    span {
      height: 18px;
      line-height: 18px;
      padding: 12px;
      cursor: pointer;
      border-radius: 22px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    color: #666;
    background-color: #fff;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};

    .panel {
      position: absolute;
      right: 0;
      top: 60px;
      width: 240px;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, .2);
      border-radius: 10px;

      .top {
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        border-bottom: 1px solid #ddd;

        span {
          padding: 10px 15px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .bottom {
        display: flex;
        flex-direction: column;
        padding: 10px 15px;

        span {
          padding: 10px 0;
        }
      }
      
    }
  }
`
