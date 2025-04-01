import React from 'react'
import Divider from '../Divider'
import Tabs from './index'

const items = [
  {
    title: 'Get Started',
    path: 'get-started/',
  },
  {
    title: 'Components',
    path: 'components/',
  },
  {
    title: 'Templates',
    path: 'templates/',
  },
]

const items2 = [
  {
    title: 'Get Started',
    path: 'get-started/',
  },
  {
    title: 'Components',
    path: 'components/',
  },
]

export default {
  title: 'Tabs',
}

export const Default = () => (
  <div>
    <Tabs items={items} activeOnInit='get-started/' />
    <Divider />
  </div>
)

export const Tabs2 = () => (
  <div>
    <Tabs items={items2} activeOnInit='get-started/' />
    <Divider />
  </div>
)

Tabs2.storyName = 'Tabs2';
