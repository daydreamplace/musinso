import styled from 'styled-components';
import User from './User';

const Header = () => {
  return (
    <>
      <Container>
        <div className='default-width header-wrapper'>
          <h1>MUSINSO</h1>
          <span>로그아웃</span>
        </div>
      </Container>
      <User />
    </>
  );
};

const Container = styled.div`
  height: 6rem;
  border-bottom: 1px solid #e9ecef;

  .header-wrapper {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 100%;

    h1 {
      font-size: 1.5rem;
      /* font-weight: 700; */
    }

    span:hover {
      opacity: 0.5;
    }
  }
`;

export default Header;
