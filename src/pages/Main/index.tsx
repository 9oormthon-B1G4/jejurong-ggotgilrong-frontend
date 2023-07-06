import { Layout } from '@layout/index';
import styled from 'styled-components';

export const MainPage = () => {
  return (
    <Layout>
      <BoxContainer>메인페이지</BoxContainer>
      <Container>나눔네오</Container>
    </Layout>
  );
};

const BoxContainer = styled.div`
  font-family: 'Pretendard';
  font-weight: 700;
`;

const Container = styled.div`
  font-family: 'NanumSquare';
  font-weight: 400;
`;
