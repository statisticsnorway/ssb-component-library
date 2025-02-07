import React, { forwardRef, useRef, useState, useEffect, type MutableRefObject } from 'react'
import { ArrowRight, ArrowRightCircle } from 'react-feather'

interface PictureCardProps {
  className?: string
  imageSrc: string
  altText: string
  link?: string
  onClick: () => void
  orientation: 'horizontal' | 'vertical'
  title?: string
  type?: string
}

export function useHover(): [MutableRefObject<HTMLAnchorElement | null>, boolean] {
  const [value, setValue] = useState(false)

  const hoverRef = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    const handleMouseOver = () => setValue(true)
    const handleMouseOut = () => setValue(false)
    const element = hoverRef.current

    if (element) {
      element.addEventListener('mouseover', handleMouseOver)
      element.addEventListener('mouseout', handleMouseOut)
      return () => {
        element.removeEventListener('mouseover', handleMouseOver)
        element.removeEventListener('mouseout', handleMouseOut)
      }
    }

    // Return a no-op function if element is not defined
    return () => {}
  }, [hoverRef])

  return [hoverRef, value]
}

const PictureCard = forwardRef<HTMLAnchorElement, PictureCardProps>(
  ({ className, imageSrc, altText, link, onClick = () => {}, orientation = 'vertical', title, type }, ref) => {
    const [hoverRef, hovered] = useHover()
    const setRefs = (element: HTMLAnchorElement | null) => {
      // Using ref for multiple purposes, so need to set it manually
      const mutableRef = ref as React.MutableRefObject<HTMLAnchorElement | null>
      if (typeof ref === 'function') {
        ref(element)
      } else if (mutableRef) {
        mutableRef.current = element
      }
      hoverRef.current = element
    }

    return (
      <a className={`ssb-picture-card ${orientation} ${className || ''}`} href={link} onClick={onClick} ref={setRefs}>
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
