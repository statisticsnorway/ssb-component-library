import React, { forwardRef, ReactNode } from 'react';

interface TableElementProps {
	className?: string,
  children:  ReactNode
}
interface TableCellProps extends TableElementProps {
	type?: 'th' | 'td',
	rowSpan?: number,
	colSpan?: number,
	headers?: string,
	scope?: 'col' | 'colgroup' | 'row' | 'rowgroup',
	align?: 'left' | 'center' | 'right',
	level?: '1' | '2' | '3'
	children: ReactNode | string | number
};

export interface TableProps extends TableElementProps {
	caption?: string,
	dataNoteRefs?: string,
};

export const TableHead = forwardRef<HTMLTableSectionElement, TableElementProps>(({ className, children }, ref) => <thead className={className} ref={ref}>{children}</thead>);

export const TableBody = forwardRef<HTMLTableSectionElement, TableElementProps>(({ className, children }, ref) => <tbody className={className} ref={ref}>{children}</tbody>);

export const TableFooter = forwardRef<HTMLTableSectionElement, TableElementProps>(({ className, children }, ref) => <tfoot className={className} ref={ref}>{children}</tfoot>);

export const TableRow = forwardRef<HTMLTableRowElement, TableElementProps>(({ className, children }, ref) => <tr className={className} ref={ref}>{children}</tr>);

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(({ className, children, type, rowSpan, colSpan, scope, headers, align, level }, ref) => {
	const tableCellProps = {
    className: `${className ?? ''}${level ? ` level${level}`: ''}${align ? ` align-${align}` : ''}`,
    rowSpan,
    colSpan,
    scope,
    headers,
		ref
  }

  if (type === 'th') return <th {...tableCellProps}>{children}</th>
  if (type === 'td') return <td {...tableCellProps}>{children}</td>
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
