import React, { ReactNode } from 'react';

interface TableFooterProps {
  className?: string,
  children:  ReactNode
};

const TableFooter = ({ className, children }: TableFooterProps) => <tfoot className={className}>{children}</tfoot>;

export default TableFooter;