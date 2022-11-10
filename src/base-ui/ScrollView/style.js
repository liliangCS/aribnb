import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;

  .scroll {
    overflow: hidden;
    .scroll-content {
      display: flex;
      transition: transform .25s ease;
    }
  }

  .btn-left, .btn-right {
    padding: 8px;
    background-color: #fff;
    box-shadow: 0 0 5px #666;
    border-radius: 100%;
    position: absolute;
    z-index: 100;
    top: 50%;
  }

  .btn-left {
    left: 0;
    transform: translate(-50%, -50%);
  }

  .btn-right {
    right: 0;
    transform: translate(50%, -50%);
  }
`