import React from 'react'
import userEvent from '@testing-library/user-event'

import { screen, render } from '../../utils/test'
import NestedAccordion from './index'

describe('NestedAccordion component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(
      <NestedAccordion header='A nested accordion header'>Nestet accordion</NestedAccordion>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('Change to open on click', async () => {
    const user = userEvent.setup()
    const headerText = 'A nested accordion header'
    const bodyText = 'Nestet accordion'
    render(<NestedAccordion header={headerText}>{bodyText}</NestedAccordion>)
    const wrapper = screen.getByText(headerText)

    await user.click(wrapper.parentElement)

    expect(await screen.findByText(bodyText)).toBeVisible()
  })
})
