import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import classNames from '../../utils/utils'

interface Item {
  text: string
  path: string
}
interface PaginationProps {
  className?: string
  items: Item[]
  labelNext?: string
  labelPrevious?: string
  onSelect?: (selected: Item) => void
  selectedPage?: Item
}

const Pagination: React.FC<PaginationProps> = ({
  className,
  items,
  labelNext = 'Next',
  labelPrevious = 'Previous',
  onSelect = () => {},
  selectedPage,
}) => {
  const [selected, setSelected] = useState(selectedPage || items[0])
  const [currentButtons, setCurrentButtons] = useState([{}])
  const [showLeftDots, setShowLeftDots] = useState(false)
  const [showRightDots, setShowRightDots] = useState(true)

  useEffect(() => {
    const showItems = items
    if (items.length < 8) {
      setShowLeftDots(false)
      setShowRightDots(false)
      setCurrentButtons(items)
    } else if (items.indexOf(selected) < 7) {
      setShowLeftDots(false)
      setCurrentButtons(showItems.slice(0, 8))
      if (items.length > currentButtons.length) {
        setShowRightDots(true)
      }
    } else if (items.indexOf(selected) > items.length - 7) {
      setCurrentButtons(showItems.slice(showItems.length - 8, showItems.length))
      setShowRightDots(false)
      setShowLeftDots(true)
    } else {
      setCurrentButtons(showItems.slice(showItems.indexOf(selected) - 3, showItems.indexOf(selected) + 3))
      setShowLeftDots(true)
      setShowRightDots(true)
    }
  }, [selected])

  const handleSelection = (sel: Item) => {
    setSelected(sel)
    onSelect(sel)
  }

  return (
    <nav className={classNames('ssb-pagination', className)}>
      <button
        className='direction-button previous'
        onClick={() => handleSelection(items[items.indexOf(selected) - 1])}
        disabled={selected === items[0]}
      >
        {' '}
        <ChevronLeft size={16} className='chevron-icon' />
        <span>{labelPrevious}</span>
      </button>
      <button
        className={`nav-button-square${items[0] === selected ? ' selected' : ''}`}
        onClick={() => handleSelection(items[0])}
      >
        {items[0].text}
      </button>
      {showLeftDots && <div className='dotted-indicator'>...</div>}
      {currentButtons?.map(
        (item: Item) =>
          item !== items[0] &&
          item !== items[items.length - 1] && (
            <button
              className={`nav-button-square ${item.text}${item === selected ? ' selected' : ''}`}
              onClick={() => handleSelection(item)}
              key={`${item.path}`}
            >
              {item.text}
            </button>
          )
      )}
      {showRightDots && <div className='dotted-indicator'>...</div>}
      <button
        className={`nav-button-square${items[items.length - 1] === selected ? ' selected' : ''}`}
        onClick={() => handleSelection(items[items.length - 1])}
      >
        {items[items.length - 1].text}
      </button>
      <button
        className='direction-button next'
        onClick={() => handleSelection(items[items.indexOf(selected) + 1])}
        disabled={selected === items[items.length - 1]}
      >
        {' '}
        <span>{labelNext}</span>
        <ChevronRight size={16} className='chevron-icon' />
      </button>
    </nav>
  )
}

export default Pagination
