import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Table from './Table';

const categoryList = [
  { id: 1, title: '전체', path: '' },
  { id: 2, title: '담당자 확인', path: 'confirm' },
  { id: 3, title: '처리 중', path: 'process' },
  { id: 4, title: '완료', path: 'complete' },
  { id: 5, title: '요청취소', path: 'cancle' },
  { id: 6, title: '반납필요', path: 'return' },
];

const List = () => {
  return (
    <Container>
      <h3>일반 요청 목록</h3>
      <div className='category'>
        {categoryList.map(category => (
          <NavLink key={category.id} end={category.id === 1} to={category.path} className={({ isActive }) => (isActive ? ' active' : '')}>
            {category.title} 0
          </NavLink>
        ))}
      </div>
      <Table />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  h3 {
    font-size: 1.75rem;
    font-weight: 700;
  }

  .category {
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    color: rgb(128, 128, 128);

    a + a {
      margin-left: 20px;
    }

    .active {
      color: #000;
    }
  }
`;

export default List;
