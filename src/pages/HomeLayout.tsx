import { Link } from 'react-router-dom';

import '@styles/HomeLayout.scss';

const HomeLayout = () => {
  return (
    <div className='home-layout'>
      <div className='home-title'>
        <h1 className='title-txt'>모의 면접</h1>
        <p className='description'>
          해당 모의 면접은 <strong>노트북 혹은 데스크탑</strong>을 이용하여
          <br />캠 녹화를 키시고 응시하시는 것을 <strong>권장</strong>드립니다.
        </p>
      </div>
      <div className='navigation-container'>
        <Link to='interview?type=personality' className='w-btn w-btn-blue'>
          인성 면접
        </Link>
        <Link to='interview?type=cs' className='w-btn w-btn-blue'>
          CS 면접
        </Link>
        <p className='navigation-info'>
          인성 면접 (<strong>15분 가량</strong> 소요 예정)
          <br />
          CS 면접 (<strong>30분 가량</strong> 소요 예정)
        </p>
      </div>
      <div className='navigation-container'>
        <Link to='/' className='w-btn w-btn-blue'>
          프론트엔드
        </Link>
        <Link to='/' className='w-btn w-btn-blue'>
          백엔드
        </Link>
        <p className='navigation-info'>
          <strong>인성, CS 및 해당 직무에 대한 면접</strong>을 진행합니다.
          <br />(<strong>1시간 가량</strong> 소요 예정)
        </p>
      </div>
    </div>
  );
};

export default HomeLayout;
