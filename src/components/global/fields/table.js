"use client"
import { Table, Pagination } from 'rsuite';
import { useState } from 'react';

const { Column, HeaderCell, Cell } = Table;

const ReusableTable = ({ data, columns, height = 420, defaultLimit = 10,actionRenderer }) => {
  console.log(data);
  
  const [limit, setLimit] = useState(defaultLimit);
  const [page, setPage] = useState(1);

  const handleChangeLimit = dataKey => {
    setPage(1);
    setLimit(dataKey);
  };

  const paginatedData = data?.results?.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  return (
    <div>
      <Table height={height} data={paginatedData}>
        {columns.map((col, index) => (
          <Column key={index} width={col.width} align={col.align} fixed={col.fixed} flexGrow={col.flexGrow}>
            <HeaderCell>{col.header}</HeaderCell>
            <Cell dataKey={col.dataKey} className='' />
          </Column>
        ))}
         {actionRenderer && (
          <Column width={150} align="center">
            <HeaderCell>Actions</HeaderCell>
            <Cell>
              {rowData => (
                <div>
                  {actionRenderer(rowData)}
                </div>
              )}
            </Cell>
          </Column>
        )}
      </Table>
      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={['total', '-', 'limit', '|', 'pager', 'skip']}
          total={data?.total}
          limitOptions={[10, 30, 50]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
  );
};

export default ReusableTable;
