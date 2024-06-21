import React from 'react'
import { render } from '../../utils/test'
import StickyMenu from './index'

describe('StickyMenu component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<StickyMenu>StickyMenu</StickyMenu>)
    expect(asFragment()).toMatchSnapshot()
  })
})
