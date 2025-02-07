import React from 'react'
import Link from '../Link'
import Text from '../Text'

interface Item {
  href: string
  label: string
  plainText?: string
}
interface ReferencesProps {
  className?: string
  referenceList: Item[]
  title?: string
}

const References: React.FC<ReferencesProps> = ({ className, referenceList, title = 'Kilder' }) => (
  <div className={`ssb-references${className ? ` ${className}` : ''}`}>
    <span className='reference-header'>{title}</span>
    {referenceList.map((ref, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={index}>
        {ref.plainText && <Text className='no-margin'>{ref.plainText}&nbsp;</Text>}
        <Link href={ref.href}>{ref.label}</Link>
        <br />
      </div>
    ))}
  </div>
)

export default References
