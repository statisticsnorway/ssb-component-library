import React from 'react'
import { screen, render } from '../../utils/test'
import { Home } from 'react-feather'
import KeyFigures from './index'

const title = 'Antall husholdninger'

describe('KeyFigures component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(
      <KeyFigures
        number='789 398'
        title={title}
        numberDescription='husholdninger'
        time='2018'
        size='large'
        icon={<Home className='feather-home' />}
        glossary='Explain something'
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('Renders Glossary', () => {
    const { asFragment } = render(<KeyFigures title={title} number='789 398' glossary='Explain something' />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Renders time and number', async () => {
    const { getByText } = render(<KeyFigures number='789 398' time='2018' />)
    expect(getByText('2018')).toBeVisible()
    expect(getByText('789 398')).toBeVisible()
  })
  test('Render no number text', () => {
    const { getByText } = render(<KeyFigures title='KeyFigure without number' time='2018' noNumberText='Ingen tall' />)
    expect(getByText('Ingen tall')).toBeVisible()
  })
  test('Render changes', () => {
    const { asFragment, getByText } = render(
      <KeyFigures
        title='KeyFigure without number'
        time='2018'
        changes={{
          changeDirection: 'down',
          changeText: 'Ned 1 prosentpoeng',
          changePeriod: 'fra året før',
        }}
      />
    )
    expect(getByText('Ned 1 prosentpoeng')).toBeVisible()
    expect(asFragment().querySelector('.changes-text')).toHaveAttribute('aria-hidden', 'false')
    expect(getByText('fra året før')).toBeVisible()
    expect(asFragment().querySelector('.changes-periode')).toHaveAttribute('aria-hidden', 'false')
  })
  test('Render changes with screen reader text', () => {
    const { asFragment, getByText } = render(
      <KeyFigures
        title='KeyFigure without number'
        time='2018'
        changes={{
          changeDirection: 'up',
          changeText: '30 999 kroner',
          changePeriod: 'fra året før',
          srChangeText: 'Oppgang 30 999 kroner fra året før'
        }}
      />
    )
    expect(getByText('30 999 kroner')).toBeVisible()
    expect(asFragment().querySelector('.changes-text')).toHaveAttribute('aria-hidden', 'true')
    expect(getByText('Oppgang 30 999 kroner fra året før')).toHaveClass('sr-only')
  })
  test('Render green box variation', () => {
    const { asFragment } = render(
      <KeyFigures title='Keyfigure with green box variation' time='2018' number='72,6' greenBox size='medium' />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
