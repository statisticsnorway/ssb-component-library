import React from 'react'
import classNames from '../../utils/utils'

interface DividerProps {
  className?: string
  dark?: boolean
  light?: boolean
}

const Divider: React.FC<DividerProps> = ({ className, dark = false, light = false }) => (
  <hr className={classNames('ssb-divider', className, dark && 'type-dark', light && 'type-light')} aria-hidden='true' />
)

export default Divider
