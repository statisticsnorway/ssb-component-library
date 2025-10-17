import React from 'react'
import userEvent from '@testing-library/user-event'

import { screen, render } from '../../utils/test'
import Tag from './index'

describe('Tag component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Tag>Tag</Tag>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Toggles classNames correctly', () => {
    const { asFragment } = render(<Tag className='mr-4'>Tag</Tag>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Renders icon', () => {
    const { asFragment } = render(<Tag icon={<i />}>Tag</Tag>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Sends callback', async () => {
    const onClick = jest.fn()
    const user = userEvent.setup()

    render(<Tag onClick={onClick}>Tests</Tag>)
    const button = screen.getByText('Tests')
    await user.click(button)
    expect(onClick).toHaveBeenCalled()
    await user.click(button)
    expect(onClick).toHaveBeenCalledTimes(2)
  })
})
