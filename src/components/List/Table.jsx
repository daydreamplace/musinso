import styled from 'styled-components';
import { tableHeadList, elemnetList } from '../../constant';

const Table = () => {
  return (
    <Container>
      <thead>
        <tr>
          {tableHeadList.map(el => (
            <th key={el.title}>{el.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {elemnetList.map(el => (
          <tr key={el.id} className={el.state === '완료' && 'restricted'}>
            {Object.values(el)
              .slice(1)
              .map((value, index) => (
                <td key={index}>{value}</td>
              ))}
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

const Container = styled.table`
  width: 100%;
  font-size: 0.875rem;

  thead {
    border-top: 3px solid black;

    tr {
      th {
        height: 3.5rem;
        border-bottom: 1px solid #000000;
        vertical-align: middle;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 20px 0;
        border-bottom: 1px solid #f5f5f5;
        text-align: center;
        vertical-align: middle;
      }
    }

    tr:hover {
      background-color: #f7f7f7;
      cursor: pointer;
    }

    .restricted {
      opacity: 0.3;
    }
  }
`;

export default Table;
