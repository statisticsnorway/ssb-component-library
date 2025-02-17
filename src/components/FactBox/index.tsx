import React, { useEffect, type ReactNode } from 'react'
import Accordion from '../Accordion'
import classNames from '../../utils/utils'

interface FactBoxProps {
  className?: string
  header: string
  openByDefault?: boolean
  text: number | ReactNode
}

const FactBox: React.FC<FactBoxProps> = ({ className, header, openByDefault = false, text }) => {
  useEffect(() => {
    console.warn(
      'Warning: FactBox is deprecated and will be removed in a future release. Please use ExpansionBox instead.'
    )
  }, [])

  return (
    <div className={classNames('ssb-fact-box', className)}>
      <Accordion header={header} openByDefault={openByDefault} withoutBorders>
        {text}
      </Accordion>
    </div>
  )
}

export default FactBox
