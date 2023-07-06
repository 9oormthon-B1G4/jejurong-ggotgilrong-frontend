import BottomSheet from 'src/components/main/BottomSheet';
import { styled } from 'styled-components';

export const MainPage = () => {
  return (
    <MainContainer>
      <BottomSheet />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
