import React, { forwardRef, ReactNode } from 'react';

export interface TableElementProps {
	className?: string,
  children: ReactNode
}

export interface TableProps extends TableElementProps {
	caption?: string,
	dataNoteRefs?: string,
}

export interface TableCellProps {
	className?: string,
	type?: 'th' | 'td',
	rowSpan?: number,
	colSpan?: number,
	headers?: string,
	scope?: 'col' | 'colgroup' | 'row' | 'rowgroup',
	align?: 'left' | 'center' | 'right',
	indentationLevel?: '1' | '2' | '3'
	children?: ReactNode | string | number,
}

const Table = forwardRef<HTMLTableElement, TableProps>(({
	className,
	caption,
	dataNoteRefs,
	children,
}, ref) => {
	if (children) {
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
	}
	return null;
});

export default Table;

export const TableHead = forwardRef<HTMLTableSectionElement, TableElementProps>(({ className, children }, ref) => {
	if (children) {
		return (
			<thead
				className={className}
				ref={ref}
			>
				{children}
			</thead>
		);
	}
	return null;
});

export const TableBody = forwardRef<HTMLTableSectionElement, TableElementProps>(({ className, children }, ref) => {
	if (children) {
		return (
			<tbody
				className={className}
				ref={ref}
			>
				{children}
			</tbody>
		);
	}
	return null;
});

export const TableFooter = forwardRef<HTMLTableSectionElement, TableElementProps>(({ className, children }, ref) => {
	if (children) {
		return (
			<tfoot
				className={className}
				ref={ref}
			>
				{children}
			</tfoot>
		);
	}
	return null;
});

export const TableRow = forwardRef<HTMLTableRowElement, TableElementProps>(({ className, children }, ref) => {
	if (children) {
		return (
			<tr
				className={className}
				ref={ref}
			>
				{children}
			</tr>
		);
	}
	return null;
});

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(({ className, children, type, rowSpan, colSpan, scope, headers, align, indentationLevel }, ref) => {
	const tableCellClasses: string = `${className ?? ''}${indentationLevel ? ` level${indentationLevel}` : ''}${align ? ` align-${align}` : ''}`;

	if (type === 'th') {
		return (
			<th
				className={tableCellClasses}
				colSpan={colSpan}
				rowSpan={rowSpan}
				scope={scope}
				headers={headers}
				ref={ref}
			>
				{children}
			</th>
		);
	}

	if (type === 'td') {
		return (
			<td
				className={tableCellClasses}
				colSpan={colSpan}
				rowSpan={rowSpan}
				headers={headers}
				ref={ref}
			>
				{children}
			</td>
		);
	}
	return null;
});

TableCell.defaultProps = {
	type: 'td',
};
