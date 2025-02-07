import React, { useState } from 'react'

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
  const [activeItem, changeActive] = useState(activeOnInit)

  const handleClick = (path: string) => {
    onClick(path)
    changeActive(path)
  }

  return (
    <div className={`ssb-tabs${className ? ` ${className}` : ''}`} role='tablist'>
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
