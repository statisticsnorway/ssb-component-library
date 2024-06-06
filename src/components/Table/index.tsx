import React, { forwardRef, ReactNode } from 'react';

interface TableElementProps {
	className?: string,
  children:  ReactNode
}

export interface TableProps extends TableElementProps {
	caption?: string,
	dataNoteRefs?: string,
};

interface TableCellProps {
	className?: string,
	type?: 'th' | 'td',
	rowSpan?: number,
	colSpan?: number,
	headers?: string,
	scope?: 'col' | 'colgroup' | 'row' | 'rowgroup',
	align?: 'left' | 'center' | 'right',
	indentationLevel?: '1' | '2' | '3'
	children?: ReactNode | string | number,
};

export const TableHead = forwardRef<HTMLTableSectionElement, TableElementProps>(({ className, children }, ref) => <thead className={className} ref={ref}>{children}</thead>);

export const TableBody = forwardRef<HTMLTableSectionElement, TableElementProps>(({ className, children }, ref) => <tbody className={className} ref={ref}>{children}</tbody>);

export const TableFooter = forwardRef<HTMLTableSectionElement, TableElementProps>(({ className, children }, ref) => <tfoot className={className} ref={ref}>{children}</tfoot>);

export const TableRow = forwardRef<HTMLTableRowElement, TableElementProps>(({ className, children }, ref) => <tr className={className} ref={ref}>{children}</tr>);

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(({ className, children, type, rowSpan, colSpan, scope, headers, align, indentationLevel }, ref) => {
	const tableCellProps: TableCellProps = {
    className: `${className ?? ''}${indentationLevel ? ` level${indentationLevel}`: ''}${align ? ` align-${align}` : ''}`,
    rowSpan,
    colSpan,
    scope,
    headers,
  };

  if (type === 'th') return <th {...tableCellProps} ref={ref}>{children}</th>
  if (type === 'td') return <td {...tableCellProps} ref={ref}>{children}</td>
});

TableCell.defaultProps = {
  type: "td"
}

const Table = forwardRef<HTMLTableElement, TableProps>(({
	className,
	caption,
	dataNoteRefs,
	children,
	}, ref) => {

	return (
		<div className="ssb-table-wrapper">
			<table className={`ssb-table${className ? ` ${className}` : ''}`} ref={ref}>
				{caption && (
					<caption data-noterefs={dataNoteRefs}>
						<div className="caption-wrapper">
							<div className="caption-text-wrapper">
								{caption}
							</div>
						</div>
					</caption>
				)}
				{children}
			</table>
		</div>
	);
});

export default Table;
