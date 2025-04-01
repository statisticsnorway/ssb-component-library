import React from 'react'
import { Star } from 'react-feather'
import Tag from './index'

export default {
  title: 'Tag',
}

export const Default = () => (
  <div>
    <Tag>Tag</Tag>
  </div>
)

export const TagWithIcon = () => (
  <div>
    <Tag icon={<Star size={18} />}>Tag with icon</Tag>
  </div>
)

TagWithIcon.storyName = 'Tag with icon'
