import styled from 'styled-components';
import Nav from '../../components/Nav';
import List from '../../components/List';

const Main = () => {
  return (
    <Container>
      <div className='default-width main-wrapper'>
        <div className='positioner'>
          <Nav />
          <List />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .main-wrapper {
    padding: 5rem 0;

    .positioner {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
  }
`;

export default Main;
