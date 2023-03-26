import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineKeyboardDoubleArrowLeft, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import SelectBox from './SelectBox';
import Box from './Box';
import { criteriaList, selectList } from '../../../constant';

const Footer = () => {
  return (
    <Container>
      <div className='criteria'>
        <span className='title'>번호</span>
        <span>1-3 of 3</span>
        <GiHamburgerMenu />
        <SelectBox list={criteriaList} />
      </div>
      <div className='pages'>
        <Box icon={<MdOutlineKeyboardDoubleArrowLeft />} />
        <Box icon={<MdKeyboardArrowLeft />} />
        <span className='title'>페이지</span>
        <SelectBox list={selectList} />
        <Box icon={<MdKeyboardArrowRight />} />
        <Box icon={<MdKeyboardDoubleArrowRight />} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
  border-radius: 3px;

  font-size: 13px;

  svg,
  .title {
    color: gray;
  }

  .criteria {
    svg {
      padding-top: 2px;
    }

    span + span,
    span + svg,
    svg + select {
      margin-left: 10px;
    }
  }

  .pages {
    display: flex;
    flex-direction: row;

    .title {
      margin-top: 7px;
    }

    svg {
      padding-top: 3px;
      padding-left: 5px;
      font-size: 25px;
    }

    div + div,
    div + span,
    span + select,
    select + div {
      margin-left: 10px;
    }
  }
`;

export default Footer;
