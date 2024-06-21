import React from 'react'

import { screen, render } from '../../utils/test'
import TableLink from './index'

describe('TableLink component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<TableLink text='Tabell 1' href='' description='TableLink' />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Toggles classNames correctly', () => {
    const { asFragment } = render(<TableLink className='mb-2' text='Tabell 1' href='' description='TableLink' />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Render link Text', () => {
    render(<TableLink text='Tabell 1' href='' description='TableLink text' />)

    expect(screen.getByText('Tabell 1')).toBeInTheDocument()
    expect(screen.getByText('TableLink text')).toBeInTheDocument()
  })
})
