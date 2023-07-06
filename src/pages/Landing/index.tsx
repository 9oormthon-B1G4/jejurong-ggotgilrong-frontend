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
  margin: 120px auto 0;
`;

const ExplainText = styled.div`
  margin: 20px auto;

  font-family: 'NanumSquare';
  font-weight: 700;
  font-size: 14px;
  color: #616161;
  text-align: center;
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
