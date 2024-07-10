import React from 'react'
import ExpansionBox from './ExpansionBox'

const mockedHeader = 'This is a expansion box header'
const mockedText =
  'This is a normal paragraph text where the explanation of the fact is written in. ' +
  'Here you can write a concise and descriptive text that helps the user understand the fact. '

const mockedContent = <span>Insert custom HTML if you want to display something else than just text</span>

export default {
  title: 'ExpansionBox',
}

export const Default = () => (
  <div style={{ height: '950px' }}>
    <ExpansionBox header={mockedHeader} text={mockedText} />
  </div>
)

export const DefaultOpen = () => (
  <div style={{ width: '450px' }}>
    <ExpansionBox header={mockedHeader} text={mockedContent} openByDefault />
  </div>
)

export const SneakPeek = () => (
  <div style={{ width: '450px' }}>
    <ExpansionBox header={mockedHeader} text={mockedContent} openByDefault />
  </div>
)

export const Icon = () => (
  <div style={{ width: '450px' }}>
    <ExpansionBox header={mockedHeader} text={mockedText} />
    <ExpansionBox header={mockedHeader} text={mockedContent} openByDefault />
  </div>
)
