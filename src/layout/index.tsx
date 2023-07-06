import styled from 'styled-components';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  max-width: 460px;
  height: 100vh;
  margin: 0px auto;
`;
