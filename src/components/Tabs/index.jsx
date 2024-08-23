import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Tabs = ({ activeOnInit = '', className, items, onClick = () => {}, id }) => {
  const [activeItem, changeActive] = useState(activeOnInit)

  const handleClick = (e) => {
    onClick(e)
    changeActive(e)
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

Tabs.propTypes = {
  activeOnInit: PropTypes.string,
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
  id: PropTypes.string,
}

export default Tabs
