import React from 'react'

import { render } from '../../utils/test'
import Dialog from './index'

describe('Dialog component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Dialog title='Dialog Title'>Dialog</Dialog>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Change dialog type Toggles classNames correctly', () => {
    const { asFragment } = render(
      <Dialog title='Dialog Title' type='warning'>
        Dialog
      </Dialog>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
