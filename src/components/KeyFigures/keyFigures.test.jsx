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
        glossary={'Explain something'}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('Renders Glossary', () => {
    const { asFragment } = render(<KeyFigures number='789 398' glossary={'Explain something'} />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Renders time and number', async () => {
    render(<KeyFigures number='789 398' time='2018' />)
    expect(screen.getByText('2018')).toBeVisible()
    expect(screen.getByText('789 398')).toBeVisible()
  })
  test('Render no number text', () => {
    render(<KeyFigures title='KeyFigure without number' time='2018' noNumberText='Ingen tall' />)
    expect(screen.getByText('Ingen tall')).toBeVisible()
  })
  test('Render changes', () => {
    render(
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
    expect(screen.getByText('Ned 1 prosentpoeng')).toBeVisible()
    expect(screen.getByText('fra året før')).toBeVisible()
  })
  test('Render green box variation', () => {
    const { asFragment } = render(
      <KeyFigures title='Keyfigure with green box variation' time='2018' number='72,6' greenBox size='medium' />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
