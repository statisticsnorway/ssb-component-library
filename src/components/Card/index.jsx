import React from 'react'
import PropTypes from 'prop-types'
import { ArrowRight, Download, ExternalLink } from 'react-feather'

const Card = ({
  ariaLabel,
  children,
  className,
  external,
  downloadText,
  fileLocation,
  href,
  hrefText,
  icon,
  image,
  imagePlacement,
  profiled,
  subTitle,
  title,
}) => (
  <div className={`ssb-card${className ? ` ${className}` : ''}`}>
    <div
      className={`clickable ${imagePlacement === 'left' ? 'left-orientation' : 'top-orientation'}`}
      aria-label={ariaLabel}
    >
      {image && <div className='card-image'>{image}</div>}

      <div
        className={`card-content${image ? ' with-image' : ''}${profiled ? ' profiled' : ''}${external ? ' external' : ''}`}
      >
        {icon && <div className='card-icon'>{icon}</div>}
        {subTitle && <div className='card-subtitle'>{subTitle}</div>}
        {title && (
          <a
            href={href}
            className='card-title'
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
          >
            {title}
          </a>
        )}

        {children && <div className='card-text'>{children}</div>}

        {!image &&
          !hrefText &&
          (external ? (
            <ExternalLink className='arrow-icon' size={22} aria-hidden='true' />
          ) : (
            <ArrowRight className='arrow-icon' size={22} aria-hidden='true' />
          ))}

        {!title && !image && hrefText && (
          <a
            className='card-action'
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
          >
            {external ? (
              <ExternalLink className='arrow-icon' size={16} aria-hidden='true' />
            ) : (
              <ArrowRight className='arrow-icon' size={16} aria-hidden='true' />
            )}
            <div className='href-text'>{hrefText}</div>
          </a>
        )}

        {title && !image && hrefText && (
          <div className='card-action'>
            {external ? (
              <ExternalLink className='arrow-icon' size={16} aria-hidden='true' />
            ) : (
              <ArrowRight className='arrow-icon' size={16} aria-hidden='true' />
            )}
            <div className='href-text'>{hrefText}</div>
          </div>
        )}
      </div>
    </div>
    {fileLocation && (
      <a download href={fileLocation} className='download-section'>
        <Download className='download-icon' size={22} />
        <span>{downloadText}</span>
      </a>
    )}
  </div>
)

Card.defaultProps = {
  downloadText: 'Last ned',
  imagePlacement: 'top',
  profiled: false,
}

Card.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  downloadText: PropTypes.string,
  external: PropTypes.bool,
  fileLocation: PropTypes.string,
  href: PropTypes.string.isRequired,
  hrefText: PropTypes.string,
  icon: PropTypes.element,
  image: PropTypes.element,
  imagePlacement: PropTypes.oneOf(['left', 'top']),
  profiled: PropTypes.bool,
  subTitle: PropTypes.string,
  title: PropTypes.string,
}

export default Card
