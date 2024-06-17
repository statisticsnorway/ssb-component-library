import React from 'react'
import FactBox from './index'

const mockedHeader = 'This is a fact box header'
const mockedText =
  'This is a normal paragraph text where the explanation of the fact is written in. ' +
  'Here you can write a concise and descriptive text that helps the user understand the fact. '

const mockedContent = <span>Insert custom HTML if you want to display something else than just text</span>

export default {
  title: 'FactBox',
}

export const Default = () => (
  <div style={{ width: '450px' }}>
    <FactBox header={mockedHeader} text={mockedText} />
    <FactBox header={mockedHeader} text={mockedContent} openByDefault />
  </div>
)
