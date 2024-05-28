import React, { ReactNode } from 'react';

interface TableHead {
  className?: string,
  children:  ReactNode
}

const TableHead = ({ className, children }: TableHead) => <thead className={className}>{children}</thead>;

export default TableHead;