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
  <div className='d-md-none'>
    <Breadcrumb items={mockedItems} />
  </div>
)

export const mobileCompressedView = () => (

      <div className='d-none d-md-block'>
        <Breadcrumb items={mockedItems} mobileCompressedView />
      </div>
)
