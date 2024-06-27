import React from 'react'
import Input from './index'

let someValue = ''
const handleChange = (e) => {
  someValue = e
}

const handleSubmit = (e) => {
  console.log(e)
}

export default {
  title: 'Input',
}

export const Default = () => (
  <div style={{ width: '280px' }}>
    <Input label='Input field' value={someValue} handleChange={handleChange} />
  </div>
)

export const SearchField = () => (
  <div style={{ width: '280px' }}>
    <Input
      ariaLabel='Input field Search'
      ariaLabelSearchButton='Search'
      searchField
      submitCallback={handleSubmit}
      placeholder='Search text'
    />
  </div>
)

export const WithValue = () => (
  <div style={{ width: '280px' }}>
    <Input label='Input field' value='Already filled' />
  </div>
)

export const Disabled = () => (
  <div style={{ width: '280px' }}>
    <Input label='Input field' disabled />
  </div>
)

export const Error = () => (
  <div style={{ width: '280px' }}>
    <Input label='Input field' error errorMessage='Beklager, dette er feil' />
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
    <Input label='Input field' negative value={someValue} handleChange={handleChange} />
    <Input label='Input field' negative searchField submitCallback={handleSubmit} placeholder='Search text' />
    <Input label='Input field' negative value={someValue} error errorMessage='Beklager, dette er feil' />
  </div>
)

export const LargeInput = () => (
  <div
    style={{
      width: '980px',
      height: '240px',
      background: '#ecfeed',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Input searchField size='lg' placeholder='Søk' />
  </div>
)
