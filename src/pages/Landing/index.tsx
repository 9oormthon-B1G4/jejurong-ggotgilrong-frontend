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
        <div>제주롱</div>
        <div>꽃길롱</div>
      </MainLogo>
      <ExplainText>
        <div>좋았던 장소가 있는 정류장에</div>
        <div>많은 추억이 있는 곳에 꽃길이 생깁니다</div>
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
  font-family: 'NanumSquare';
  font-weight: 700;
  font-size: 28px;
  margin: 80px auto 0;
`;

const ExplainText = styled.div`
  margin: 30px auto;

  font-family: 'NanumSquare';
  font-weight: 700;
  font-size: 14px;
  color: #616161;
  text-align: center;
`;

const MainImgContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  img {
    width: 80%;
  }
`;

const StartBtn = styled.button`
  width: 350px;
  height: 48px;
  position: absolute;
  bottom: 40px;
  left: 50%;
  margin-left: -175px;

  font-family: 'NanumSquare';
  font-weight: 700;
  font-size: 16px;
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
