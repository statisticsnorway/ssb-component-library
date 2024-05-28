import React, { ReactNode } from 'react';

interface TableRowProps {
  className?: string,
  children:  ReactNode
};

const TableRow = ({ className, children }: TableRowProps) => <tr className={className}>{children}</tr>;

export default TableRow;