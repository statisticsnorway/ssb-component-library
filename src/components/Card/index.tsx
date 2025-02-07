import React, { type ReactNode } from 'react'
import { ArrowRight, Download, ExternalLink } from 'react-feather'

interface CardProps {
  ariaLabel?: string
  children?: ReactNode
  className?: string
  downloadText?: string
  external?: boolean
  fileLocation: string
  href: string
  hrefText?: string
  icon?: ReactNode
  image?: ReactNode
  imagePlacement?: 'left' | 'top'
  profiled?: boolean
  subTitle?: string
  title?: string
}

const Card: React.FC<CardProps> = ({
  ariaLabel,
  children,
  className,
  external,
  downloadText = 'Last ned',
  fileLocation,
  href,
  hrefText,
  icon,
  image,
  imagePlacement = 'top',
  profiled = false,
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

export default Card
