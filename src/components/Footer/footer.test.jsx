import React from 'react'
import { render } from '../../utils/test'
import Footer from './index'

describe('Footer', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(
      <Footer>
        <div>Content</div>
      </Footer>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
