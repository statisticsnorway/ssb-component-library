import React from 'react'
import userEvent from '@testing-library/user-event'
import { expect } from '@jest/globals'
import { screen, render } from '../../utils/test'
import ButtonTertiary from './index'

const header = 'Click Me!'

describe('Button Tertiary component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<ButtonTertiary header={header}>Body</ButtonTertiary>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Applies negative class correctly', () => {
    const { asFragment } = render(
      <ButtonTertiary header={header} negative={true}>
        Body
      </ButtonTertiary>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('Disables button when prop is true', async () => {
    render(
      <ButtonTertiary id={'1'} disabled={true} header={header}>
        Body
      </ButtonTertiary>
    )
    const button = await screen.findByRole('button', { text: header })
    expect(button.disabled).toEqual(true)
  })
  test('Renders correct header text', async () => {
    render(<ButtonTertiary header={header}>Button</ButtonTertiary>)
    const el = await screen.findByText(header)
    expect(el.parentElement).toBeVisible()
  })
  test('Closes after click when starting open', async () => {
    const user = userEvent.setup()
    render(
      <ButtonTertiary id={'1'} openByDefault={true} header={header}>
        Body
      </ButtonTertiary>
    )
    expect(await screen.findByText('Body')).toBeVisible()

    const button = await screen.findByRole('button')
    await user.click(button)

    expect(await screen.findByText('Body')).not.toBeVisible()
  })
  test('Renders toggle icon when accordion prop is true', () => {
    const { asFragment } = render(
      <ButtonTertiary header={header} accordion={true}>
        Body
      </ButtonTertiary>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
