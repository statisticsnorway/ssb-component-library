import React from 'react'
import Title from './index'

export default {
  title: 'Title',
}

export const Default = () => (
  <div>
    <Title size={1}>This is a h1 title</Title>
    <Title size={2}>This is a h2 title</Title>
    <Title size={3}>This is a h3 title</Title>
    <Title size={4}>This is a h4 title</Title>
    <Title size={5}>This is a h5 title</Title>
    <Title size={5} className='semibold'>This is a h5 semibold title</Title>
  </div>
)
