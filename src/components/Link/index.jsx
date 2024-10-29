import React, { createElement, forwardRef } from 'react'
import PropTypes from 'prop-types'

const renderLinkText = (children, linkType, headerSize) => {
  if (children) {
    if (linkType === 'header' && headerSize) {
      return createElement(`h${headerSize}`, { className: 'link-text' }, children)
    }
    return <span className='link-text'>{children}</span>
  }
  return null
}

const Link = forwardRef(
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
      headerSize,
    },
    ref
  ) => {
    const classNames = `ssb-link${linkType ? ` ${linkType}` : ''}${standAlone ? ' stand-alone' : ''}
    ${negative ? ' negative' : ''}${icon ? ' with-icon' : ''}${className ? ` ${className}` : ''}`

    return (
      // eslint-disable-next-line react/jsx-no-target-blank
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
        {renderLinkText(children, linkType, headerSize)}
      </a>
    )
  }
)

Link.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  icon: PropTypes.node,
  isExternal: PropTypes.bool,
  linkType: PropTypes.oneOf(['regular', 'profiled', 'header']),
  negative: PropTypes.bool,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  onClick: PropTypes.func,
  standAlone: PropTypes.bool,
  headerSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
}

export default Link
