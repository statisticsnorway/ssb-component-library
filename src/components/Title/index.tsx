import React, { type ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
  className?: string
  negative?: boolean
  size?: 1 | 2 | 3 | 4 | 5 | 6
}

const Title: React.FC<TitleProps> = ({ children, className, negative = false, size = 1 }) => {
  switch (size) {
    case 1:
      return (
        <h1 className={`ssb-title${className ? ` ${className}` : ''}${negative ? ' negative' : ''}`}>{children}</h1>
      )
    case 2:
      return (
        <h2 className={`ssb-title${className ? ` ${className}` : ''}${negative ? ' negative' : ''}`}>{children}</h2>
      )
    case 3:
      return (
        <h3 className={`ssb-title${className ? ` ${className}` : ''}${negative ? ' negative' : ''}`}>{children}</h3>
      )
    case 4:
      return (
        <h4 className={`ssb-title${className ? ` ${className}` : ''}${negative ? ' negative' : ''}`}>{children}</h4>
      )
    case 5:
      return (
        <h5 className={`ssb-title${className ? ` ${className}` : ''}${negative ? ' negative' : ''}`}>{children}</h5>
      )
    case 6:
      return (
        <h6 className={`ssb-title${className ? ` ${className}` : ''}${negative ? ' negative' : ''}`}>{children}</h6>
      )
    default:
      return (
        <h1 className={`ssb-title${className ? ` ${className}` : ''}${negative ? ' negative' : ''}`}>{children}</h1>
      )
  }
}

export default Title
