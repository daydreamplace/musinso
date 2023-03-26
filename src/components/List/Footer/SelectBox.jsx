import styled from 'styled-components';

const SelectBox = ({ list }) => {
  return (
    <Container name='part'>
      {list.map(el => (
        <option key={el.value} value={el.value}>
          {el.value}
        </option>
      ))}
    </Container>
  );
};

const Container = styled.select`
  width: 40px;
  height: 25px;
  border: 0.5px solid lightgray;
  outline: none;
`;

export default SelectBox;
