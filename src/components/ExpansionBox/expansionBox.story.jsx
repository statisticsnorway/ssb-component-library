import React from 'react'
import { Sun } from 'react-feather'
import ExpansionBox from './ExpansionBox'

const mockedHeader = 'This is a expansion box header'

const mockedContent = (
  <div>
    <p>
      This is a normal paragraph text where the explanation of the fact is written. Here you can write a concise and
      descriptive text that helps the user understand the content. This is a normal paragraph text where the explanation
      of the fact is written. Here you can write a concise and descriptive text that helps the user understand the
      content.
    </p>

    <h3>Mulighet for tittel i boksen</h3>
    <ul>
      <li>Mulighet for punktliste</li>
      <li>Må være med</li>
      <li>Flere punkter</li>
    </ul>

    <p>
      <strong>Bold stiling</strong>: Det må også være rom for bold stiling av ord, avsnitt og setninger i boksen. This
      is a normal paragraph text where the explanation of the fact is written. Here you can write a concise and
      descriptive text that helps the user understand the content.
    </p>

    <p>
      This is a normal paragraph text <a href='https://www.ssb.no'>lenke i løpende tekst</a> where the explanation of
      the fact is written. Here you can write a concise and descriptive text that helps the user understand the content.
    </p>
  </div>
)

export default {
  title: 'ExpansionBox',
}

export const Default = () => (
  <div style={{ height: '950px' }}>
    <ExpansionBox header={mockedHeader} text={mockedContent} />
  </div>
)

export const DefaultOpen = () => (
  <div style={{ width: '450px' }}>
    <ExpansionBox header={mockedHeader} text={mockedContent} openByDefault />
  </div>
)

export const SneakPeek = () => (
  <div style={{ width: '450px' }}>
    <ExpansionBox header={mockedHeader} text={mockedContent} icon={<Sun size={32} />} sneakPeek />
  </div>
)

export const Icon = () => (
  <div style={{ width: '450px' }}>
    <ExpansionBox header={mockedHeader} text={mockedContent} icon={<Sun size={32} />} />
  </div>
)
