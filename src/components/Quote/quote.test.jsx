import React from 'react'
import { render } from '../../utils/test'
import Quote from './index'

describe('Quote component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Quote>«Quote»</Quote>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Toggles classNames correctly', () => {
    const { asFragment } = render(<Quote negative>«Quote»</Quote>)
    expect(asFragment()).toMatchSnapshot()
  })
})
