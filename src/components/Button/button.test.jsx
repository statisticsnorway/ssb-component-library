import React from 'react'
import userEvent from '@testing-library/user-event'
import { screen, render } from '../../utils/test'
import Button from './index'

describe('Button component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Button>Button</Button>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Toggles classNames correctly', () => {
    const { asFragment } = render(
      <Button primary negative>
        Button
      </Button>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('Sets aria-label correctly', async () => {
    render(
      <Button primary ariaLabel={'test text'}>
        Button
      </Button>
    )
    expect(await screen.findByLabelText('test text')).toBeVisible()
  })
  test('Renders icon', () => {
    const { asFragment } = render(<Button icon={<i />}>Button</Button>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Sends callback', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Tests</Button>)
    const button = await screen.findByRole('button', { name: 'Tests' })
    await user.click(button)
    await user.click(button)
    expect(onClick).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalledTimes(2)
  })
})
