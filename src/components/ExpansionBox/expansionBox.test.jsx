import React from 'react'
import userEvent from '@testing-library/user-event'
import { screen, render } from '../../utils/test'
import ExpansionBox from './ExpansionBox'

const headerText = 'This is a ExpansionBox title'
const bodyText = 'This is paragraph text'

describe('ExpansionBox component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<ExpansionBox header={headerText} text={bodyText} />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Starts closed', async () => {
    const { container } = render(<ExpansionBox header={headerText} text={bodyText} />)
    const element = container.querySelector('.content')
    expect(element).toHaveClass('closed')
  })
  test('Open on click when starting closed', async () => {
    const user = userEvent.setup()
    render(<ExpansionBox header={headerText} text={bodyText} />)
    const button = await screen.findByText(headerText)
    await user.click(button.parentElement)
    expect(await screen.findByText(bodyText)).toBeVisible()
  })
  test('set openByDefault', async () => {
    const text = 'ExpansionBox Text'
    render(<ExpansionBox header={headerText} text={bodyText} openByDefault />)
    expect(await screen.findByText(bodyText)).toBeVisible()
  })
})
