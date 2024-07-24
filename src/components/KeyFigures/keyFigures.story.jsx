import React from 'react'
import KeyFigures from './index'
import Divider from '../Divider'
import HouseIcon from '../../media/house-icon.svg'

const title = 'Antall husholdninger'
const placeholderText = `This is the explanation of the word
written in one or more paragraphs depending on the amount of space needed`

export default {
  title: 'KeyFigures',
}

export const Large = () => (
  <div>
    <KeyFigures
      number='789 398'
      title={title}
      numberDescription='husholdninger'
      time='2018'
      size='large'
      icon={<HouseIcon />}
      glossary={placeholderText}
    />
  </div>
)

export const Medium = () => (
  <div>
    <KeyFigures
      number='789 398'
      title={title}
      numberDescription='husholdninger'
      time='2018'
      size='medium'
      icon={<HouseIcon />}
    />
  </div>
)

export const Small = () => (
  <div style={{ width: '400px' }}>
    <KeyFigures
      number='789'
      title='Antall plasser i helse- og omsorgsinstitusjoner'
      numberDescription='plasser'
      time='2018'
      size='small'
      icon={<HouseIcon />}
    />
  </div>
)

export const WithoutIcon = () => (
  <div>
    <KeyFigures
      number='789 398'
      title={title}
      numberDescription='husholdninger'
      time='2018'
      size='large'
      glossary={placeholderText}
    />
    <br />
    <Divider />
    <KeyFigures number='789 398' title={title} numberDescription='husholdninger' time='2018' size='medium' />
    <br />
    <Divider />
    <KeyFigures
      number='789'
      title='Antall plasser i helse- og omsorgsinstitusjoner'
      numberDescription='plasser'
      time='2018'
      size='small'
    />
  </div>
)

export const WithoutNumber = () => (
  <KeyFigures
    title='Antall plasser i helse- og omsorgsinstitusjoner'
    numberDescription='plasser'
    time='2018'
    size='small'
    icon={<HouseIcon />}
  />
)

export const WithChanges = () => (
  <div>
    <KeyFigures
      number='789 398'
      title={title}
      numberDescription='husholdninger'
      time='2018'
      size='large'
      icon={<HouseIcon />}
      glossary={placeholderText}
      changes={{
        changeDirection: 'up',
        changeText: 'Opp 30 999 kroner',
        changePeriod: 'fra året før',
      }}
    />
    <br />
    <br />
    <Divider />
    <br />
    <KeyFigures
      number='789 398'
      title={title}
      numberDescription='husholdninger'
      time='2018'
      size='medium'
      icon={<HouseIcon />}
      changes={{
        changeDirection: 'same',
        changeText: 'Ingen endring',
        changePeriod: 'fra året før',
      }}
    />
    <br />
    <br />
    <Divider />
    <br />
    <KeyFigures
      number='789'
      title='Antall plasser i helse- og omsorgsinstitusjoner'
      numberDescription='plasser'
      time='2018'
      size='small'
      icon={<HouseIcon />}
      changes={{
        changeDirection: 'down',
        changeText: 'Ned 1 prosentpoeng',
        changePeriod: 'fra året før',
      }}
    />
  </div>
)

export const WithChangesAndScreenReaderOnlyText = () => (
  <div>
    <KeyFigures
      number='789 398'
      title={title}
      numberDescription='husholdninger'
      time='2018'
      size='large'
      icon={<HouseIcon />}
      glossary={placeholderText}
      changes={{
        changeDirection: 'up',
        changeText: '1,5%',
        changePeriod: 'fra året før',
        srChangeText: 'Oppgang 1,5% fra året før',
      }}
    />
  </div>
)

export const GreenboxVariasjonMedium = () => (
  <KeyFigures
    title='Valgdeltagelse ved stortingsvalg'
    numberDescription='prosent'
    number='78,2'
    time='2018'
    size='medium'
    greenBox
  />
)

export const GreenboxVariasjonStor = () => (
  <KeyFigures
    title='Valgdeltagelse ved stortingsvalg'
    numberDescription='prosent'
    number='78,2'
    time='2018'
    size='large'
    greenBox
  />
)
