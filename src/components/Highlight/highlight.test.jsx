import React from 'react'
import { render } from '../../utils/test'
import Highlight from './index'

describe('Highlight component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Highlight>«Highlight»</Highlight>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Toggles classNames correctly', () => {
    const { asFragment } = render(<Highlight negative>«Highlight»</Highlight>)
    expect(asFragment()).toMatchSnapshot()
  })
})
