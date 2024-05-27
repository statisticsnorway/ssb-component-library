import React, { ReactNode } from 'react'

interface TableCellProps {
  type: 'th' | 'td',
  className?: string,
  children: ReactNode,
  rowSpan?: number,
  colSpan?: number,
  scope?: 'col' | 'colgroup' | 'row' | 'rowgroup',
  align?: 'left' | 'center' | 'right',
  level?: '1' | '2' | '3'
  headers?: string,
}

const TableCell = ({ className, children, type, rowSpan, colSpan, scope, headers, align, level }: TableCellProps) => {
  const tableCellProps = {
    className: `${className ?? ''}${level ? ` level${level}`: ''}${align ? ` align-${align}` : ''}`,
    rowSpan,
    colSpan,
    scope,
    headers
  }

  if (type === 'th') return <th {...tableCellProps}>{children}</th>
  if (type === 'td') return <td {...tableCellProps}>{children}</td>
};

TableCell.defaultProps = {
  type: 'td',
}

export default TableCell