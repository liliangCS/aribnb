import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  .info {
    display: flex;
    align-items: center;
    cursor: pointer;

    font-size: 17px;
    font-weight: 700;
    color: #000;

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }

    &.active {
      color: ${props => props.theme.color.secondaryColor};
    }
  }
`