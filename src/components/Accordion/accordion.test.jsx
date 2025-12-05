import React from 'react'
import userEvent from '@testing-library/user-event'

import { screen, render } from '../../utils/test'
import Accordion from './index'

const headerText = 'This is a accordion title'
const bodyText = 'This is paragraph text'

describe('Accordion component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Accordion header={headerText}>Accordion</Accordion>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Starts closed', async () => {
    render(<Accordion header={headerText}>{bodyText}</Accordion>)
    const button = await screen.findByRole('button', { name: headerText })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    const bodyNode = screen.getByText(bodyText)
    const bodyWrapper = bodyNode.closest('.accordion-body')
    expect(bodyWrapper).toHaveClass('closed')
  })
  test('Open on click when starting closed', async () => {
    const user = userEvent.setup()
    render(<Accordion header={headerText}>{bodyText}</Accordion>)

    const button = await screen.findByRole('button', { name: headerText })
    const bodyNode = screen.getByText(bodyText)
    const bodyWrapper = bodyNode.closest('.accordion-body')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(bodyWrapper).toHaveClass('closed')
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(bodyWrapper).toHaveClass('open')
  })
  test('Accordion with sub-header', async () => {
    const subheader = 'Subheader'
    render(
      <Accordion header={headerText} subHeader={subheader}>
        {bodyText}
      </Accordion>
    )
    expect(await screen.findByText(subheader)).toBeVisible()
  })
})
