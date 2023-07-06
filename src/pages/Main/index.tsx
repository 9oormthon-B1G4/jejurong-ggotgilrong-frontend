import MapView from '@components/map/MapView';
import BottomSheet from 'src/components/main/BottomSheet';
import { ThemeContextProvider } from 'src/hooks/useTheme';
import { styled } from 'styled-components';

export const MainPage = () => {
  return (
    <MainContainer>
      <ThemeContextProvider>
        <MapView />
        <BottomSheet />
      </ThemeContextProvider>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
