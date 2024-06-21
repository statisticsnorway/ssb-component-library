import React from 'react'
import { screen, render } from '../../utils/test'
import BlockContent from './index'

describe('BlockContent component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<BlockContent>BlockContent</BlockContent>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Add 0 infront of sectionnumbers under 10', async () => {
    render(<BlockContent sectionNumber={5}>BlockContent</BlockContent>)
    expect(await screen.findByText('05')).toBeVisible()
  })
  test('Not add 0 infront of sectionnumbers above 9', async () => {
    render(<BlockContent sectionNumber={22}>BlockContent</BlockContent>)
    expect(await screen.queryByText('022')).toBeNull()
    expect(await screen.findByText('22')).toBeVisible()
  })
})
