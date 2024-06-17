import React from 'react'
import FormError from './index'

const errorMessages = ['Not a valid email', 'Select a country', 'Feed the dog']

export default {
  title: 'FormError',
}

export const Default = () => (
  <div style={{ width: '600px' }}>
    <FormError errorMessages={errorMessages} title='Some fields are not right!' />
  </div>
)

export const Negative = () => (
  <div style={{ background: '#274247', padding: '50px', width: '700px' }}>
    <FormError negative errorMessages={errorMessages} title='Some fields are not right!' />
  </div>
)
