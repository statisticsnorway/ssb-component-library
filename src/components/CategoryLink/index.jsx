import React from 'react'
import { ArrowRight } from 'react-feather'
import PropTypes from 'prop-types'

const CategoryLink = ({ ariaLabel, titleText, subText, className, href, tabIndex, title }) => {
  const classNames = `ssb-category-link${className ? ` ${className}` : ''}`

  return (
    <a className={classNames} href={href} tabIndex={tabIndex} aria-label={ariaLabel} title={title}>
      {titleText && (
        <div className='div-wrapper'>
          <div className='text-divs title-wrapper'>
            <span className='link-title-text'>{titleText}</span>
          </div>
          <div className='text-divs sub-wrapper'>
            <span className='link-sub-text'>{subText}</span>
          </div>
          <div className='icon-wrapper'>
            <ArrowRight className='arrow-icon' size={24} />
          </div>
        </div>
      )}
    </a>
  )
}

CategoryLink.propTypes = {
  ariaLabel: PropTypes.string,
  titleText: PropTypes.string,
  subText: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
}

export default CategoryLink
