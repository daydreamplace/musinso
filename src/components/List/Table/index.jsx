import styled from 'styled-components';

const tableHeadList = [{ title: '상태' }, { title: '요청일' }, { title: '대분류' }, { title: '소분류' }, { title: '품목' }, { title: '장소' }, { title: '요청사이트' }, { title: '담당자' }];

const list = [
  { id: 1, state: '확인', date: '2023-01-24', large_category: '전산', small_category: '전산 장비 이용 문의', item: '고장 신청', place: '-', site: '뚝섬 sp', responsibility: 'A팀 홍길동' },
  { id: 2, state: '확인', date: '2023-01-24', large_category: '전산', small_category: '전산 장비 이용 문의', item: '고장 신청', place: '-', site: '뚝섬 sp', responsibility: 'A팀 홍길동' },
  { id: 3, state: '확인', date: '2023-01-24', large_category: '전산', small_category: '전산 장비 이용 문의', item: '고장 신청', place: '-', site: '뚝섬 sp', responsibility: 'A팀 홍길동' },
  { id: 4, state: '확인', date: '2023-01-24', large_category: '전산', small_category: '전산 장비 이용 문의', item: '고장 신청', place: '-', site: '뚝섬 sp', responsibility: 'A팀 홍길동' },
];

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
        {list.map(el => (
          <tr key={el.id}>
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
    }
  }
`;

export default Table;
