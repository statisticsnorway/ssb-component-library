import React from 'react'
import TextArea from './index'

let someValue = ''
const handleChange = (e) => {
  someValue = e
}

export default {
  title: 'TextArea',
}

export const Default = () => (
  <div style={{ width: '500px' }}>
    <TextArea label='Label' placeholder='I can be resized...' handleChange={handleChange} value={someValue} />
  </div>
)

export const Negative = () => (
  <div
    style={{
      width: '40em',
      height: '20em',
      background: '#274247',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <TextArea negative label='Label' handleChange={handleChange} value={someValue} />
    <TextArea
      negative
      label='Label'
      handleChange={handleChange}
      value={someValue}
      error
      errorMessage='You made a mistake, fool! What the hell'
    />
  </div>
)

export const RowsCols = () => (
  <div>
    <TextArea label='rows cols' rows={20} cols={50} value={someValue} handleChange={handleChange} />
  </div>
)

RowsCols.storyName = 'Rows/Cols'
