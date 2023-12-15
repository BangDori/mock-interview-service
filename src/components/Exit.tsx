import { Link } from "react-router-dom";

import HomeDiv from "../styles/HomeDiv";

const Exit = () => {
  return (
    <HomeDiv>
      <div className="home-title">
        <h1 className="title-txt">
          인터뷰가 모두 종료되었습니다! 고생하셨습니다.
        </h1>
      </div>
      <div className="navigation-container">
        <Link to="/" className="w-btn w-btn-blue">
          홈페이지로 이동하기
        </Link>
      </div>
    </HomeDiv>
  );
};

export default Exit;
