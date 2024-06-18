import React from 'react'
import { render } from '../../utils/test'
import References from './index'

const referenceList = [
  {
    href: ' ',
    label: 'Link 1',
  },
  {
    href: ' ',
    label: 'Link 2',
  },
  {
    href: ' ',
    label: 'Link 3',
    plainText: 'A paragraph',
  },
]

describe('References component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<References title='Source' referenceList={referenceList} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
