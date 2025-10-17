import React from 'react'
import userEvent from '@testing-library/user-event'

import { screen, render } from '../../utils/test'
import CheckboxGroup from './index'

const items = [
  {
    label: 'Item 1',
    value: 'item1',
  },
  {
    label: 'Item 2',
    value: 'item2',
  },
  {
    label: 'Item 3',
    value: 'item3',
    disabled: true,
  },
]

describe('CheckboxGroup component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<CheckboxGroup header='Header' items={items} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('OnChange in child triggers parent', async () => {
    const onChange = jest.fn()
    const user = userEvent.setup()

    render(<CheckboxGroup header='Header' onChange={onChange} items={items} />)
    const checkbox = await screen.findByRole('checkbox', { name: 'Item 1' })

    await user.click(checkbox)
    expect(onChange).toHaveBeenCalled()
  })
})
