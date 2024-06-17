import React from 'react'
import { render } from '../../utils/test'
import Text from './index'

describe('Text component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Text>Text</Text>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Toggles className correctly', () => {
    const { asFragment } = render(
      <Text small negative>
        Text
      </Text>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
