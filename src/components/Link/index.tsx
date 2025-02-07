import React, { createElement, forwardRef, type ReactNode } from 'react'

interface LinkProps {
  ariaLabel?: string
  children?: ReactNode
  className?: string
  href: string
  icon?: ReactNode
  isExternal?: boolean
  linkType?: 'regular' | 'profiled' | 'header'
  negative?: boolean
  tabIndex?: number
  title?: string
  onClick?: () => void
  standAlone?: boolean
  headingSize?: 1 | 2 | 3 | 4 | 5 | 6
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      ariaLabel,
      children,
      className,
      href,
      icon,
      isExternal = false,
      linkType,
      negative = false,
      tabIndex,
      title,
      onClick = () => {},
      standAlone,
      headingSize,
    },
    ref
  ) => {
    const classNames = `ssb-link${linkType ? ` ${linkType}` : ''}${standAlone ? ' stand-alone' : ''}
    ${negative ? ' negative' : ''}${icon ? ' with-icon' : ''}${className ? ` ${className}` : ''}`

    const renderLinkText = () => {
      if (children) {
        if (linkType === 'header' && headingSize) {
          return createElement(`h${headingSize}`, { className: 'link-text' }, children)
        }
        return <span className='link-text'>{children}</span>
      }
      return null
    }

    return (
      <a
        className={classNames.replace(/\s\s+/g, ' ').trim()}
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        title={title}
        onClick={onClick}
        ref={ref}
      >
        {icon && <div className='icon-wrapper'>{icon}</div>}
        {renderLinkText()}
      </a>
    )
  }
)

Link.displayName = 'Link'

export default Link
