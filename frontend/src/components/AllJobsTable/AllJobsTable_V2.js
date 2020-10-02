import React, { useEffect, useState } from 'react';

import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useTable, useSortBy, usePagination, useGlobalFilter, useRowSelect } from 'react-table';
import { Box } from '@material-ui/core';

const PaginationButton = ({ isSelected, ...props }) => (
  <Box
    display='inline-block'
    color='secondary'
    cursor='pointer'
    marginHorizontal='5px'
    width='26px'
    height='26px'
    lineHeight='26px'
    textAlign='center'
    fontSize='12px'
    fontWeight='500'
    borderRadius='2px'
    userSelect='none'
    aria-selected={isSelected}
    _selected={{ borderColor: 'primary', backgroundColor: 'primary', color: 'white' }}
    _hover={{ borderColor: 'primary', backgroundColor: 'primary', color: 'white' }}
    _focus={{
      outline: 'none',
    }}
    _disabled={{
      opacity: 0.65,
      cursor: 'not-allowed',
    }}
    {...props}
  />
);

const AllJobsTable = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow, //  pagination options
    page,
    pageOptions,

    state: { pageIndex, pageSize, globalFilter, selectedRowIds, sortBy },
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    setPageSize,

    // to get data of selected row
    selectedFlatRows,
    setHiddenColumns,

    // filter
    setGlobalFilter,
  } = useTable({
    columns,
    data,
    initialState: { pageSize: 10, pageIndex: 1 },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
  });

  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>;
              })}
            </TableRow>
          );
        })}
      </TableBody>
      <Box marginTop='17px' marginRight='48px'>
        {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
        <div className='pagination'>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>{' '}
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions?.length}
            </strong>{' '}
          </span>
          <span>
            | Go to page:{' '}
            <input
              type='number'
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: '100px' }}
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </Box>
    </MaUTable>
  );
};

export default AllJobsTable;
