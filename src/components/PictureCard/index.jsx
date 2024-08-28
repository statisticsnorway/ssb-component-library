import React, { forwardRef, useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ArrowRight, ArrowRightCircle } from 'react-feather'

export function useHover() {
  const [value, setValue] = useState(false)

  const hoverRef = useRef(null)
  useEffect(
    // eslint-disable-next-line consistent-return
    () => {
      const handleMouseOver = () => setValue(true)
      const handleMouseOut = () => setValue(false)
      const element = hoverRef && hoverRef.current

      if (element) {
        element.addEventListener('mouseover', handleMouseOver)
        element.addEventListener('mouseout', handleMouseOut)
        return () => {
          element.removeEventListener('mouseover', handleMouseOver)
          element.removeEventListener('mouseout', handleMouseOut)
        }
      }
    },
    [hoverRef]
  )

  return [hoverRef, value]
}

const PictureCard = forwardRef(
  ({ className, imageSrc, altText, link, onClick = () => {}, orientation = 'vertical', title, type }, ref) => {
    const [hoverRef, hovered] = useHover()
    return (
      <a
        className={`ssb-picture-card ${orientation} ${className || ''}`}
        href={link}
        onClick={onClick}
        ref={(element) => {
          // Using ref for multiple purposes, so need to set it manually
          if (typeof ref === 'function') ref(element)
          else if (ref) {
            // eslint-disable-next-line no-param-reassign
            ref.current = element
          }
          hoverRef.current = element
        }}
      >
        <div className='image-background'>
          <img src={imageSrc} alt={altText} />
        </div>
        <div className='overlay'>
          <span className='il-type'>{type}</span>
          <span className='il-title'>{title}</span>
          {hovered ? (
            <ArrowRightCircle className='arrow-icon' size={32} />
          ) : (
            <ArrowRight className='arrow-icon' size={32} />
          )}
        </div>
      </a>
    )
  }
)

PictureCard.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  title: PropTypes.string,
  type: PropTypes.string,
}

export default PictureCard

/*
ref={element => {
	// Using ref for multiple purposes, so need to set it manually
	if (typeof ref === 'function') ref(element);
	// eslint-disable-next-line no-param-reassign
	else if (ref) { ref.current = element; }
	hoverRef.current = element;
}}

The ref is set in this way so it can be both used by a parent component with useRef and the internal hoverRef hook.
The 'if (typeof ref === 'function')'  is used so a parent can use the two commonly used syntaxes for setting refs

Both of these will now work:
 <PictureCard ref={(element) => (cards.current[index] = element)}
 <PictureCard ref={myRef}
The first example is the most used way to set refs on components in .map functions.
*/
