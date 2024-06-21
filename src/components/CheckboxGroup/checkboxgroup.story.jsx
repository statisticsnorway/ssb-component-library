import React from 'react'
import CheckboxGroup from './index'

const checkboxItems = [
  {
    label: 'Item 1',
    value: 'item1',
  },
  {
    label: 'Item 2',
    value: 'item2',
  },
  {
    label: 'Item 3',
    value: 'item3',
    disabled: 'true',
  },
]

export default {
  title: 'CheckboxGroup',
}

export const Column = () => <CheckboxGroup header='Header' items={checkboxItems} />

export const Row = () => <CheckboxGroup header='Header' items={checkboxItems} orientation='row' />
