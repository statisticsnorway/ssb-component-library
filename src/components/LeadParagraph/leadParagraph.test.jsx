import React from 'react'
import { render } from '../../utils/test'
import LeadParagraph from './index'

describe('LeadParagraph component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<LeadParagraph>Leading paragraph</LeadParagraph>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Toggles className correctly', () => {
    const { asFragment } = render(<LeadParagraph negative>Leading paragraph</LeadParagraph>)
    expect(asFragment()).toMatchSnapshot()
  })
})
