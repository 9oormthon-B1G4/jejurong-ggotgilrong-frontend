import styled from 'styled-components';

export const Post = () => {
  return <PostContainer></PostContainer>;
};

const PostContainer = styled.div`
  width: 45%;
  padding-bottom: 40%;
  border-radius: 10px;
  margin: 10px 0;

  background-color: ${({ theme }) => theme.colors.gray_100};
`;
