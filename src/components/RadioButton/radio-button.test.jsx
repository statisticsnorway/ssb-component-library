import React from 'react'
import userEvent from '@testing-library/user-event'

import { screen, render } from '../../utils/test'
import RadioButton from './index'

describe('RadioButton component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<RadioButton value='item'>Item</RadioButton>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Callback is triggered', async () => {
    const callback = jest.fn()
    const user = userEvent.setup()

    render(
      <RadioButton callback={callback} value='item'>
        Item
      </RadioButton>
    )
    const input = screen.getByRole('radio')
    await user.click(input)

    expect(callback).toBeCalled()
  })
})
