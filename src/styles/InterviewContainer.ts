import styled from "styled-components";

const InterviewContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;

  .question-box {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 720px;
    height: 96px;

    .question {
      font-weight: 500;
      font-size: 24px;
    }

    .next-arrow-btn {
      position: absolute;
      top: 38%;
      right: -52px;

      width: 24px;
      height: 24px;

      transition: 0.25s;

      img {
        width: 100%;
        height: 100%;
      }

      &:hover {
        letter-spacing: 2px;
        transform: scale(1.25);
        cursor: pointer;
      }
    }
  }
`;

export default InterviewContainer;
