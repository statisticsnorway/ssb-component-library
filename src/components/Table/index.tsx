import React, { forwardRef, ReactNode, useEffect, useState, useRef } from 'react'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather'

export interface TableElementProps {
  className?: string
  children: ReactNode
}

export interface TableProps extends TableElementProps {
  caption?: string
  dataNoteRefs?: string
}

export interface TableCellProps {
  id?: string
  className?: string
  type?: 'th' | 'td'
  rowSpan?: number
  colSpan?: number
  headers?: string
  scope?: 'col' | 'colgroup' | 'row' | 'rowgroup'
  align?: 'left' | 'center' | 'right'
  indentationLevel?: '1' | '2' | '3'
  children?: ReactNode | string | number
}

const Table = forwardRef<HTMLTableElement, TableProps>(({ className, caption, dataNoteRefs, children }, ref) => {
  const tableWrapperRef = useRef<HTMLDivElement | null>(null)
  const iconWrapperRef = useRef<HTMLDivElement | null>(null)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const [isActive, setIsActive] = useState<{ left: boolean; right: boolean }>({ left: false, right: false })

  type Direction = 'left' | 'right'

  const handleScroll = (direction: Direction) => {
    if (tableWrapperRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380
      tableWrapperRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleMouseClick = (direction: Direction) => {
    handleScroll(direction)
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur() // Force blur to remove hover styles
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>, direction: Direction) => {
    if (event.key === 'Enter') {
      setIsActive((prev) => ({ ...prev, [direction]: true }))
      handleScroll(direction)
      setTimeout(() => {
        setIsActive((prev) => ({ ...prev, [direction]: false }))
      }, 150) // Reset active state after a short delay
    }
  }

  useEffect(() => {
    const checkOverflow = () => {
      if (tableWrapperRef.current) {
        const hasOverflow = tableWrapperRef.current.scrollWidth > tableWrapperRef.current.clientWidth
        setIsOverflowing(hasOverflow)
      }
    }

    checkOverflow()
    window.addEventListener('resize', checkOverflow)

    return () => {
      window.removeEventListener('resize', checkOverflow)
    }
  }, [])

  return (
    <div className={`ssb-table-wrapper${isOverflowing ? ' overflowing' : ''}`} ref={tableWrapperRef}>
      <table className={`ssb-table${className ? ` ${className}` : ''}`} ref={ref}>
        {caption && (
          <caption data-noterefs={dataNoteRefs}>
            <div className='caption-wrapper' style={{ position: 'relative' }}>
              <div className='caption-text-wrapper'>{caption}</div>
              <div className={`scroll-icon-wrapper ${isOverflowing ? 'visible' : ''}`} ref={iconWrapperRef}>
                <div
                  className={`scroll-icon ${isActive.left ? 'scroll-icon-active' : ''}`}
                  role='button'
                  aria-label='Scroll left'
                  tabIndex={isOverflowing ? 0 : -1}
                  onClick={() => handleMouseClick('left')}
                  onKeyDown={(event) => handleKeyPress(event, 'left')}
                >
                  <ArrowLeftCircle />
                </div>
                <div
                  className={`scroll-icon ${isActive.right ? 'scroll-icon-active' : ''}`}
                  role='button'
                  aria-label='Scroll right'
                  tabIndex={isOverflowing ? 0 : -1}
                  onClick={() => handleMouseClick('right')}
                  onKeyDown={(event) => handleKeyPress(event, 'right')}
                >
                  <ArrowRightCircle />
                </div>
              </div>
            </div>
          </caption>
        )}
        {children}
      </table>
    </div>
  )
})

export default Table

export const TableHead = forwardRef<HTMLTableSectionElement, TableElementProps>(({ className, children }, ref) => {
  if (children) {
    return (
      <thead className={className} ref={ref}>
        {children}
      </thead>
    )
  }
  return null
})

export const TableBody = forwardRef<HTMLTableSectionElement, TableElementProps>(({ className, children }, ref) => {
  if (children) {
    return (
      <tbody className={className} ref={ref}>
        {children}
      </tbody>
    )
  }
  return null
})

export const TableFooter = forwardRef<HTMLTableSectionElement, TableElementProps>(({ className, children }, ref) => {
  if (children) {
    return (
      <tfoot className={className} ref={ref}>
        {children}
      </tfoot>
    )
  }
  return null
})

export const TableRow = forwardRef<HTMLTableRowElement, TableElementProps>(({ className, children }, ref) => {
  if (children) {
    return (
      <tr className={className} ref={ref}>
        {children}
      </tr>
    )
  }
  return null
})

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ id, className, children, type = 'td', rowSpan, colSpan, scope, headers, align, indentationLevel }, ref) => {
    const tableCellClasses: string = `${className ?? ''}${indentationLevel && (!align || align === 'left') ? ` level${indentationLevel}` : ''}${align ? ` align-${align}` : ''}`

    if (type === 'th') {
      return (
        <th
          id={id}
          className={tableCellClasses}
          colSpan={colSpan}
          rowSpan={rowSpan}
          scope={scope}
          headers={headers}
          ref={ref}
        >
          {children}
        </th>
      )
    }

    if (type === 'td') {
      return (
        <td className={tableCellClasses} colSpan={colSpan} rowSpan={rowSpan} headers={headers} ref={ref}>
          {children}
        </td>
      )
    }
    return null
  }
)
