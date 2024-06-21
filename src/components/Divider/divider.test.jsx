import React from 'react'
import { render } from '../../utils/test'
import Divider from './index'

describe('Divider component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Divider />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('set Light color', () => {
    const { asFragment } = render(<Divider light />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('set Dark color and optional className', () => {
    const { asFragment } = render(<Divider dark className='mt-3' />)
    expect(asFragment()).toMatchSnapshot()
  })
})
