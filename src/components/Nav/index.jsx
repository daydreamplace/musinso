import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';

const navList = [
  { id: 1, path: '', title: '일반 요청' },
  { id: 2, path: 'rental', title: '대여 요청' },
  { id: 3, path: 'employee-card', title: '사원증 요청' },
];

const Nav = () => {
  return (
    <Container>
      <FiArrowLeft />
      <h4>요청 현황</h4>
      <ul>
        {navList.map(nav => (
          <li key={nav.id}>
            <NavLink to={nav.path} end={nav.id === 1} className={({ isActive }) => (isActive ? 'active' : '')}>
              {nav.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  width: 20vw;
  line-height: 1.8;
  font-weight: 700;

  svg {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  ul {
    margin-top: 20px;
    margin-left: 20px;
    color: rgb(128, 128, 128);
    font-size: 1rem;
  }

  .active {
    color: #000;
  }
`;

export default Nav;
