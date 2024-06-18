import React from 'react'
import { render } from '../../utils/test'
import Paragraph from './index'

describe('Paragraph component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Paragraph>Paragraph</Paragraph>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Toggles classNames correctly', () => {
    const { asFragment } = render(
      <Paragraph className='mt-3' negative>
        Paragraph
      </Paragraph>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
