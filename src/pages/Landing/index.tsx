import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleClickStartBtn = () => {
    navigate('/main');
  };

  return (
    <LandingPageContainer>
      <MainLogo>
        <img src={import.meta.env.BASE_URL + './image/main_title.svg'} />
      </MainLogo>
      <ExplainText>
        <div>정류장 구석구석 꽃을 피워내 보세요.</div>
        <div>화려한 색감으로 덧칠된 꽃 삼월의 제주처럼</div>
      </ExplainText>
      <MainImgContainer>
        <img src={import.meta.env.BASE_URL + './image/main_img.svg'} />
      </MainImgContainer>
      <StartBtn onClick={handleClickStartBtn}>시작하기</StartBtn>
    </LandingPageContainer>
  );
};

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

const MainLogo = styled.div`
  margin: 60px auto 0;
`;

const ExplainText = styled.div`
  margin: 30px auto 0 auto;

  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #616161;
  text-align: center;
`;

const MainImgContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  img {
    width: 83%;
  }
`;

const StartBtn = styled.button`
  width: 350px;
  height: 48px;
  position: absolute;
  bottom: 40px;
  left: 50%;
  margin-left: -175px;

  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 18px;
  color: white;

  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.orange_400};

  @media screen and (max-width: 360px) {
    width: 80%;
    margin: 0;
    transform: translate(-50%, 0);
  }

  &:hover {
    cursor: pointer;
  }
`;
