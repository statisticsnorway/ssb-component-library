import React from 'react'
import Quote from './index'

const negativeStyle = {
  backgroundColor: '#274247',
  padding: '100px',
}

export default {
  title: 'Quote',
}

export const Default = () => (
  <div style={{ padding: '100px' }}>
    <Quote>
      «Ser du etter en hytte med slik beliggenhet, må du regne med å måtte ut med en bra slump med penger hvis du ikke
      er så heldig å arve – selv om også dét kan være dyrt.»
    </Quote>
  </div>
)

export const Negative = () => (
  <div style={negativeStyle}>
    <Quote negative>
      «Ser du etter en hytte med slik beliggenhet, må du regne med å måtte ut med en bra slump med penger hvis du ikke
      er så heldig å arve – selv om også dét kan være dyrt.»
    </Quote>
  </div>
)
