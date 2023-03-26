import styled from 'styled-components';

const Box = ({ icon }) => {
  return <Container>{icon}</Container>;
};

const Container = styled.div`
  width: 30px;
  height: 30px;
  margin: auto;
  border: 0.5px solid lightgray;
  font-size: 20px;
`;

export default Box;
