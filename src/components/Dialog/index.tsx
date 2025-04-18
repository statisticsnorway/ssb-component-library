import React, { type ReactNode } from 'react'
import { AlertTriangle, Info } from 'react-feather'
import classNames from '../../utils/utils'

interface DialogProps {
  children: ReactNode
  className?: string
  title: string
  type?: 'info' | 'warning'
}

const Dialog: React.FC<DialogProps> = ({ children, className, title, type = 'info' }) => (
  <div className={classNames('ssb-dialog', type, className)}>
    <div className='icon-panel'>
      {type === 'warning' && <AlertTriangle size={45} className='icon' />}
      {type === 'info' && <Info size={45} className='icon' />}
    </div>
    <div className='dialog-content'>
      <span className='dialog-title'>{title}</span>
      <div className='content'>{children}</div>
    </div>
  </div>
)

export default Dialog
