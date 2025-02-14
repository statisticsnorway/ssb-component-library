import React, { type ReactNode } from 'react'
import classNames from '../../utils/utils'

interface TitleProps {
  children: ReactNode
  className?: string
  negative?: boolean
  size?: 1 | 2 | 3 | 4 | 5 | 6
}

const Title: React.FC<TitleProps> = ({ children, className, negative = false, size = 1 }) => {
  const classNameStr = classNames('ssb-title', className, negative && 'negative')
  switch (size) {
    case 1:
      return <h1 className={classNameStr}>{children}</h1>
    case 2:
      return <h2 className={classNameStr}>{children}</h2>
    case 3:
      return <h3 className={classNameStr}>{children}</h3>
    case 4:
      return <h4 className={classNameStr}>{children}</h4>
    case 5:
      return <h5 className={classNameStr}>{children}</h5>
    case 6:
      return <h6 className={classNameStr}>{children}</h6>
    default:
      return <h1 className={classNameStr}>{children}</h1>
  }
}

export default Title
