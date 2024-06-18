import React from 'react'
import { render } from '../../utils/test'
import { ArrowRight } from 'react-feather'
import Link from './index'

describe('Link component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Link href=''>A regular link</Link>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Toggles classNames correctly', () => {
    const { asFragment } = render(
      <Link className='mt-3' isExternal href='' negative linkType='profiled'>
        Profile link
      </Link>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('render icon', () => {
    const { asFragment } = render(
      <Link href=' ' linkType='profiled' icon={<ArrowRight />}>
        A profiled link with icon
      </Link>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
