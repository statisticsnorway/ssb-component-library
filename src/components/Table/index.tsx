import React, { forwardRef, useRef, useState, useEffect, ReactNode } from 'react';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

export interface TableProps {
	className?: string,
	caption?: string,
	children: ReactNode,
	tabIndex?: number,
	ariaLabelScrollLeftIcon?: string,
	ariaLabelScrollRightIcon?: string,
	statistics?: boolean,
};

interface TableCellProps {
  type?: 'th' | 'td',
  className?: string,
  children: ReactNode,
  rowSpan?: number,
  colSpan?: number,
  headers?: string,
  scope?: 'col' | 'colgroup' | 'row' | 'rowgroup',
  align?: 'left' | 'center' | 'right',
  level?: '1' | '2' | '3'
};

interface TableElementProps {
	className?: string,
  children:  ReactNode
}

export const TableHead = ({ className, children }: TableElementProps) => <thead className={className}>{children}</thead>;

export const TableBody = ({ className, children }: TableElementProps) => <tbody className={className}>{children}</tbody>;

export const TableFooter = ({ className, children }: TableElementProps) => <tfoot className={className}>{children}</tfoot>;

export const TableRow = ({ className, children }: TableElementProps) => <tr className={className}>{children}</tr>;

export const TableCell = ({ className, children, type, rowSpan, colSpan, scope, headers, align, level }: TableCellProps) => {
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
  type: 'td'
}

const Table = forwardRef<HTMLTableElement, TableProps>(({
	className,
	caption,
	children,
	tabIndex,
	ariaLabelScrollLeftIcon,
	ariaLabelScrollRightIcon,
	statistics
	}, ref) => {
	const [prevClientWidth, setPrevClientWidth] = useState(0)
	const [hideScrollIcons, setHideScrollIcons] = useState(false)
	const [disableLeftScrollIcon, setDisableLeftScrollIcon] = useState(false)
	const [disableRightScrollIcon, setDisableRightScrollIcon] = useState(false)

	const tableWrapperRef = useRef<HTMLDivElement>(null)
	const captionRef = useRef<HTMLTableCaptionElement>(null)
	const tableControlsRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		updateTableControlsDesktop()

		const widthCheckInterval = setInterval(() => {
      widthCheck()
    }, 250)
    window.addEventListener('resize', updateTableControlsDesktop)
    return () => {
      clearInterval(widthCheckInterval)
      window.removeEventListener('resize', updateTableControlsDesktop)
    }
	}, []);

	const widthCheck = () => {
		if (tableWrapperRef.current?.clientWidth !== prevClientWidth) {
      setPrevClientWidth(tableWrapperRef.current!.clientWidth)
      updateTableControlsDesktop()
    }
	};

	const updateTableControlsDesktop = () => {
    if (
      !tableWrapperRef.current ||
      !tableControlsRef.current ||
      !captionRef.current
    )
    return

    const controls = tableControlsRef.current
    const tableWrapper = tableWrapperRef.current
    const left = controls.children.item(0)! as HTMLElement
    const right = controls.children.item(1)! as HTMLElement

    // hide controlls if there is no scrollbar
    if (tableWrapper.scrollWidth > tableWrapper.clientWidth || tableWrapper.clientWidth === 0) {
			setHideScrollIcons(true)
      // disable left
      if (tableWrapper.scrollLeft <= 0) {
				setDisableLeftScrollIcon(true)
      } else {
				setDisableLeftScrollIcon(false)
      }

      // disable right
      if (tableWrapper.scrollLeft + tableWrapper.clientWidth >= tableWrapper.scrollWidth) {
				setDisableRightScrollIcon(true)
      } else {
				setDisableRightScrollIcon(false)
      }

      // move desktop controls to correct pos
      const captionHalfHeight = captionRef.current.offsetHeight / 2
      const controlsHalfHeight = left.scrollHeight / 2
      left.style.marginTop = `${captionHalfHeight - controlsHalfHeight}px`
      right.style.marginTop = `${captionHalfHeight - controlsHalfHeight}px`
    } else {
			setHideScrollIcons(true)
    }
  }; 

	const scrollLeft = () => {
		tableWrapperRef.current!.scrollLeft -= 100
		updateTableControlsDesktop()
	};
	const scrollRight = () => {
		tableWrapperRef.current!.scrollLeft += 100
		updateTableControlsDesktop()
	};

	return (
		<div className="ssb-table-wrapper" onScroll={updateTableControlsDesktop} ref={tableWrapperRef}>
			<table className={`ssb-table${statistics ? ' statistics' : ''}${className ? ` ${className}` : ''}`} ref={ref}>
				{caption && (
					<caption ref={captionRef}>
						<div className="caption-wrapper">
							<div className="caption-text-wrapper">
								{caption}
							</div>
							{hideScrollIcons && (
								<div className="scoll-icons-wrapper" ref={tableControlsRef}>
									<button className={`scroll-icon-left${disableLeftScrollIcon ? ' disabled' : ''}`} aria-label={ariaLabelScrollLeftIcon} tabIndex={tabIndex} onClick={scrollLeft}>
										<ArrowLeftCircle size={32} aria-hidden="true" />
									</button>
									<button className={`scroll-icon-right${disableRightScrollIcon ? ' disabled' : ''}`} aria-label={ariaLabelScrollRightIcon} tabIndex={tabIndex} onClick={scrollRight}>
										<ArrowRightCircle size={32} aria-hidden="true" />
									</button>
								</div>
						)}
						</div>
					</caption>
				)}
				{children}
			</table>
		</div>
	);
});

Table.defaultProps = {
	tabIndex: 0,
	ariaLabelScrollLeftIcon: 'Scroll left',
	ariaLabelScrollRightIcon: 'Scroll right',
};

export default Table;
