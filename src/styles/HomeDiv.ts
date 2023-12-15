import styled from "styled-components";

const HomeDiv = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .home-title {
    text-align: center;
    height: 120px;

    .title-txt {
      font-size: 48px;

      background: linear-gradient(-45deg, #33ccff 0%, #ff99cc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .description {
      margin-top: 12px;
      font-size: 16px;
    }
  }

  .navigation-container {
    display: flex;
    align-items: center;

    .w-btn {
      margin: 20px;

      position: relative;
      border: none;
      display: inline-block;
      padding: 15px 30px;
      border-radius: 15px;
      font-family: "paybooc-Light", sans-serif;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
      text-decoration: none;
      font-weight: 600;
      transition: 0.25s;

      &:hover {
        letter-spacing: 2px;
        transform: scale(1.2);
        cursor: pointer;
      }

      &:active {
        transform: scale(1.5);
      }
    }

    .w-btn-blue {
      background-color: #6aafe6;
      color: #fff;
    }

    .navigation-info {
      width: 360px;
      font-size: 16px;
    }
  }
`;

export default HomeDiv;