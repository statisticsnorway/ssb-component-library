import React from 'react'

interface DividerProps {
  className?: string
  dark?: boolean
  light?: boolean
}

const Divider: React.FC<DividerProps> = ({ className, dark = false, light = false }) => (
  <hr
    className={`ssb-divider${className ? ` ${className}` : ''}${dark ? ' type-dark' : ''}${light ? ' type-light' : ''}`}
    aria-hidden='true'
  />
)

export default Divider
