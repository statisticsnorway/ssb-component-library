import React from 'react'
import userEvent from '@testing-library/user-event'

import { screen, render } from '../../utils/test'
import Checkbox from './index'

describe('Checkbox component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Checkbox value='item'>Item</Checkbox>)
    expect(asFragment()).toMatchSnapshot()
  })

  test('Sets selected state by default prop', async () => {
    render(
      <Checkbox value='item' selected>
        Item
      </Checkbox>
    )
    expect(await screen.getByRole('checkbox')).toBeChecked()
  })

  test('Sends callback', async () => {
    const onClick = jest.fn()
    const user = userEvent.setup()

    render(
      <Checkbox callback={onClick} value='item'>
        Item
      </Checkbox>
    )

    const checkbox = await screen.getByRole('checkbox')
    await user.click(checkbox)
    expect(onClick).toHaveBeenCalled()
  })
})
