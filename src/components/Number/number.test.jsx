import React from 'react'

import { render } from '../../utils/test'
import Number from './index'

describe('Number component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Number>599 246 391</Number>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Toggles classNames correctly', () => {
    const { asFragment } = render(<Number size='small'>599 246 391</Number>)
    expect(asFragment()).toMatchSnapshot()
  })
})
