import React from 'react'
import Highlight from './index'

const negativeStyle = {
  backgroundColor: '#274247',
  padding: '100px',
}

export default {
  title: 'Highlight',
}

export const Default = () => (
  <div style={{ padding: '100px' }}>
    <p>
      «Ser du etter en hytte med slik beliggenhet, må du regne med å måtte ut med en bra slump med penger
      <Highlight>hvis du ikke er så heldig å arve</Highlight>– selv om også dét kan være dyrt.»
    </p>
  </div>
)

export const Negative = () => (
  <div style={negativeStyle}>
    <p>
      «Ser du etter en hytte med slik beliggenhet, må du regne med å måtte ut med en bra slump med penger
      <Highlight negative>hvis du ikke er så heldig å arve</Highlight>– selv om også dét kan være dyrt.»
    </p>
  </div>
)
