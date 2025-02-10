import React from 'react'
import { ArrowLeft } from 'react-feather'
import Link from '../Link'
import classNames from '../../utils/utils'

interface Item {
  link: string
  text: string
}
interface BreadcrumbProps {
  className?: string
  items: Item[]
  mobileCompressedView?: boolean
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className, items, mobileCompressedView = false }) => {
  const shouldShowCompressed = mobileCompressedView && items.length > 1

  return (
    <div className={classNames('ssb-breadcrumbs', className)}>
      {shouldShowCompressed ? (
        <Link href={items[items.length - 2].link} icon={<ArrowLeft size={20} />}>
          {items[items.length - 2].text}
        </Link>
      ) : (
        <>
          {items.slice(0, -1).map((item) => (
            <div key={item.text}>
              <Link href={item.link}>{item.text}</Link>
              &nbsp;/&nbsp;
            </div>
          ))}
          <span>{items[items.length - 1].text}</span>
        </>
      )}
    </div>
  )
}

export default Breadcrumb
