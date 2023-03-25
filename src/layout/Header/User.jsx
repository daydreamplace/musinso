import styled from 'styled-components';

const User = () => {
  return (
    <Container>
      <div className='default-width user-wrapper'>
        <span className='user'>박유빈 코딩테스트팀</span>
        <span className='affiliation'>주식회사 플랫큐브 - 면접자 - 프론트엔드</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid #e9ecef;

  .user-wrapper {
    .user {
      font-weight: 700;
    }

    .affiliation {
      font-size: 0.85rem;
    }

    span + span {
      margin-left: 20px;
    }
  }
`;

export default User;
