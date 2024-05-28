import React, { ReactNode } from 'react';

interface TableBodyProps {
  className?: string,
  children:  ReactNode
};

const TableBody = ({ className, children }: TableBodyProps) => <tbody className={className}>{children}</tbody>;

export default TableBody;