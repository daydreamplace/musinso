import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Table from './Table';
import Footer from './Footer';
import { categoryList } from '../../constant';

const List = () => {
  return (
    <Container>
      <h3>일반 요청 목록</h3>
      <div className='category'>
        {categoryList.map(category => (
          <NavLink key={category.id} end={category.id === 1} to={category.path} className={({ isActive }) => (isActive ? ' active' : '')}>
            {category.title} {category.count}
          </NavLink>
        ))}
      </div>
      <Table />
      <Footer />
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
