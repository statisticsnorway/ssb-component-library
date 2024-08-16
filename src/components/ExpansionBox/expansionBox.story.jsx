import React from 'react'
import ExpansionBox from './ExpansionBox'

const mockedHeader = 'This is a expansion box header'
const mockedText =
  // eslint-disable-next-line max-len
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const mockedContent = (
  <div>
    <span>
      This is a normal paragraph text where the explanation of the fact is written. Here you can write a concise and
      descriptive text that helps the user understand the content. This is a normal paragraph text where the explanation
      of the fact is written. Here you can write a concise and descriptive text that helps the user understand the
      content.
    </span>

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

    <span>
      This is a normal paragraph text <a href='https://www.ssb.no'>lenke i løpende tekst</a> where the explanation of
      the fact is written. Here you can write a concise and descriptive text that helps the user understand the content.
    </span>
  </div>
)

export default {
  title: 'ExpansionBox',
}

export const Default = () => (
  <div style={{ width: '750px' }}>
    <ExpansionBox header={mockedHeader} text={mockedContent} />
  </div>
)

export const DefaultOpen = () => (
  <div style={{ width: '750px' }}>
    <ExpansionBox header={mockedHeader} text={mockedContent} openByDefault />
  </div>
)

export const SneakPeek = () => (
  <div style={{ width: '1800px', display: 'flex', justifyContent: 'center' }}>
    <div style={{ width: '740px', marginRight: '10px' }}>
      <ExpansionBox header='ExpansionBox with sneakpeek text' text={mockedText} sneakPeek />
    </div>
    <div style={{ width: '740px' }}>
      <ExpansionBox header='ExpansionBox with icon and sneakpeek content' text={mockedContent} sparkleIcon sneakPeek />
    </div>
  </div>
)
