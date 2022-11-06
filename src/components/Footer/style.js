import styled from "styled-components"

export const FooterWrapper = styled.div`
  border-top: 1px solid #ddd;
  padding: 40px 0;

  .content {
    width: 1032px;
    margin: 0 auto;
    color: #767676;
    font-size: 14px;
    font-weight: 600;

    .top {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      font-weight: 800;
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;

      .top-item {
        h2 {
          color: rgb(72, 72, 72);
          font-size: 14px;
          margin-bottom: 12px;
        }

        ul > li {
          color: #767676;
          line-height: 21px;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }

          .tag {
            font-size: 12px;
            background-color: ${(props) => props.theme.color.secondaryColor};
            color: #fff;
            padding: 2px 4px;
            border-radius: 4px;
            margin-left: 5px;
          }
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      .left {
        display: flex;

        .icon {
          display: flex;
          align-items: center;
          margin-right: 12px;
        }

        .info {
          p {
            line-height: 20px;
          }
          img {
            height: 20px;
            width: 20px;
            vertical-align: bottom;
          }
          a {
            color: #767676;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }

      .right {
        display: flex;
        color: #7e7e7e;
      }
    }
  }
`
