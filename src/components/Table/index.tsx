import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

interface TableProps {
	className: string,
	caption: string,
	thead: ReactNode,
	tbody: ReactNode,
	tfoot: ReactNode,
	tabIndex: number,
	ariaLabelScrollLeftIcon: string,
	ariaLabelScrollRightIcon: string,
};

// TODO:
// * WAI-ARIA
// * Take account of custom classes such as bold (sum) and indentation (level)

const Table = ({
	className,
	caption,
	thead,
	tbody,
	tfoot,
	tabIndex,
	ariaLabelScrollLeftIcon,
	ariaLabelScrollRightIcon }: TableProps) => {
	const [prevClientWidth, setPrevClientWidth] = useState(0)

	const tableRef = useRef<HTMLTableElement>(null)
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
	}, [])

	const widthCheck = () => {
		if (tableRef.current?.clientWidth !== prevClientWidth) {
      setPrevClientWidth(tableRef.current!.clientWidth)
      updateTableControlsDesktop()
    }
	}

	const updateTableControlsDesktop = () => {
    if (
      !tableRef.current ||
      !tableControlsRef.current ||
      !captionRef.current
    )
    return

    const controls = tableControlsRef.current
    const tableWrapper = tableRef.current
    const left = controls.children.item(0)! as HTMLElement
    const right = controls.children.item(1)! as HTMLElement

    // hide controlls if there is no scrollbar
    if (tableWrapper.scrollWidth > tableWrapper.clientWidth || tableWrapper.clientWidth === 0) {
      controls.classList.remove('hide')
      // disable left
      if (tableWrapper.scrollLeft <= 0) {
        left.classList.add('disabled')
      } else {
        left.classList.remove('disabled')
      }

      // disable right
      if (tableWrapper.scrollLeft + tableWrapper.clientWidth >= tableWrapper.scrollWidth) {
        right.classList.add('disabled')
      } else {
        right.classList.remove('disabled')
      }

      // move desktop controls to correct pos
      const captionHalfHeight = captionRef.current.offsetHeight / 2
      const controlsHalfHeight = left.scrollHeight / 2
      left.style.marginTop = `${captionHalfHeight - controlsHalfHeight}px`
      right.style.marginTop = `${captionHalfHeight - controlsHalfHeight}px`
    } else {
      controls.classList.add('hide')
    }
  } 

	const scrollLeft = () => {
		tableRef.current!.scrollLeft -= 100
		updateTableControlsDesktop()
	};
	const scrollRight = () => {
		tableRef.current!.scrollLeft += 100
		updateTableControlsDesktop()
	};

	return (
		<table className={`ssb-table ${className ?? ''}`} onScroll={updateTableControlsDesktop} ref={tableRef}>
			{caption && (
				<caption ref={captionRef}>
					<div className="caption-wrapper">
						<div className="caption-text-wrapper">
							{caption}
						</div>
						{/* TODO:
							* Re-evaluate tabIndex and aria-label. Should these be overriden?
							* Conditional rendering?
						*/}
						<div className="scoll-icons-wrapper" ref={tableControlsRef}>
							<div className="scroll-icon-left" aria-label={ariaLabelScrollLeftIcon} role="button" tabIndex={tabIndex} onClick={scrollLeft}>
								<ArrowLeftCircle size={32} />
							</div>
							<div className="scroll-icon-right" aria-label={ariaLabelScrollRightIcon} role="button" tabIndex={tabIndex} onClick={scrollRight}>
								<ArrowRightCircle size={32} />
							</div>
						</div>
					</div>
				</caption>
			)}
			{thead && <thead>{thead}</thead>}
			{tbody && <tbody>{tbody}</tbody>}
			{tfoot && <tfoot>{tfoot}</tfoot>}
		</table>
	);
};

Table.defaultProps = {
	tabIndex: 0,
	ariaLabelScrollLeftIcon: '', // TODO
	ariaLabelScrollRightIcon: '', // TODO
};

export default Table;
