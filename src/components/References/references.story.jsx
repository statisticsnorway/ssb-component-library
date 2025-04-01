import React from 'react'
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

const referenceList2 = [
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
  },
]

export default {
  title: 'References',
}

export const Regular = () => <References title='Source' referenceList={referenceList2} />

export const WithParagraph = () => <References title='Source' referenceList={referenceList} />

WithParagraph.storyName = 'With paragraph';
