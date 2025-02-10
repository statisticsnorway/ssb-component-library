import React from 'react'
import { ArrowRight } from 'react-feather'
import classNames from '../../utils/utils'

interface CategoryLinkProps {
  ariaLabel?: string
  titleText?: string
  subText?: string
  className?: string
  href: string
  tabIndex?: number
  title?: string
}

const CategoryLink: React.FC<CategoryLinkProps> = ({
  ariaLabel,
  titleText,
  subText,
  className,
  href,
  tabIndex,
  title,
}) => (
  <a
    className={classNames('ssb-category-link', className)}
    href={href}
    tabIndex={tabIndex}
    aria-label={ariaLabel}
    title={title}
  >
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

export default CategoryLink
