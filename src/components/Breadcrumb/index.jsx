import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ArrowLeft } from 'react-feather'
import Link from '../Link'

const Breadcrumb = ({ className, items, mobileCompressedView = false }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 767)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const shouldShowCompressed = isMobile && mobileCompressedView && items.length > 1

  const handleNavigation = (link) => {
    window.location.href = link
  }

  return (
    <div className={`ssb-breadcrumbs${className ? ` ${className}` : ''}`}>
      {shouldShowCompressed ? (
        <div className='breadcrumb-item' style={{ display: 'flex', alignItems: 'center' }}>
          <ArrowLeft style={{ color: '#00824d', marginRight: '10px' }} />
          <button onClick={() => handleNavigation(items[items.length - 2].link)} className='breadcrumb-button'>
            {items[items.length - 2].text}
          </button>
        </div>
      ) : (
        <>
          {items.slice(0, -1).map((item) => (
            <div key={item.text} className='breadcrumb-item'>
              <Link href={item.link} className='breadcrumb-link'>
                {item.text}
              </Link>
              &nbsp;/&nbsp;
            </div>
          ))}
          <span className='breadcrumb-text'>{items[items.length - 1].text}</span>
        </>
      )}
    </div>
  )
}

Breadcrumb.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  mobileCompressedView: PropTypes.bool,
}

export default Breadcrumb
