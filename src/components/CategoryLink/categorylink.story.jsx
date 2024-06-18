import React from 'react'
import CategoryLink from './index'

export default {
  title: 'CategoryLink',
}

export const Default = () => (
  <div style={{ width: '1200px', display: 'flex', justifyContent: 'center' }}>
    <div style={{ width: '580px', marginRight: '20px' }}>
      <CategoryLink href=' ' titleText='Category link with description' subText='Description goes here' />
    </div>
    <div style={{ width: '580px' }}>
      <CategoryLink href=' ' titleText='Category link with description' subText='Description goes here' />
    </div>
  </div>
)
