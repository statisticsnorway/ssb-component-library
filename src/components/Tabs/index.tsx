import React, { useState } from 'react'
import classNames from '../../utils/utils'

interface TabItem {
  title: string
  path: string
}

interface TabsProps {
  activeOnInit?: string
  className?: string
  items: TabItem[]
  onClick?: (path: string) => void
  id?: string
}

const Tabs: React.FC<TabsProps> = ({ activeOnInit = '', className, items, onClick = () => {}, id }) => {
  const [activeItem, setActiveItem] = useState(activeOnInit)

  const handleClick = (path: string) => {
    onClick(path)
    setActiveItem(path)
  }

  return (
    <div className={classNames('ssb-tabs', className)} role='tablist'>
      {items.map((item, i) => (
        <button
          className={`navigation-item ${activeItem === item.path ? 'active' : ''}`}
          onClick={() => handleClick(item.path)}
          key={item.path}
          role='tab'
          aria-selected={activeItem === item.path}
          aria-controls={`tabpanel-${i}-${id || ''}`}
        >
          <span>{item.title}</span>
        </button>
      ))}
    </div>
  )
}

export default Tabs
