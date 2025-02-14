import React, { type ReactNode } from 'react'
import classNames from '../../utils/utils'

interface TagProps {
  children: ReactNode
  className?: string
  icon?: ReactNode
  onClick?: () => void
}

const Tag: React.FC<TagProps> = ({ children, className, icon, onClick = () => {} }) => (
  <button className={classNames('ssb-tag', className)} onClick={onClick}>
    {icon && <div className='st-icon'>{icon}</div>}
    {children}
  </button>
)

export default Tag
