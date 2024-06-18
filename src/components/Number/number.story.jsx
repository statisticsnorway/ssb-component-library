import React from 'react'
import Number from './index'

export default {
  title: 'Number',
}

export const Small = () => (
  <div>
    <Number size='small'>599 246 391</Number>
  </div>
)

export const Medium = () => (
  <div>
    <Number size='medium'>59 923</Number>
  </div>
)

export const Large = () => (
  <div>
    <Number size='large'>789 398</Number>
  </div>
)
