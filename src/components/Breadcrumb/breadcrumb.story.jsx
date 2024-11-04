import React from 'react'
import Breadcrumb from './index'

const mockedItems = [
  {
    link: ' ',
    text: 'breadcrumb 1',
  },
  {
    link: ' ',
    text: 'breadcrumb 2',
  },
  {
    text: 'breadcrumb 3',
  },
]

export default {
  title: 'Breadcrumb',
}

export const Default = () => (
  <div>
    <Breadcrumb items={mockedItems} />
  </div>
)

export const mobileCompressedView = () => (
  <div>
    <Breadcrumb mobileCompressedView items={mockedItems} />
  </div>
)
