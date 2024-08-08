import React from 'react'

import { screen, render } from '../../utils/test'
import Card from './index'

jest.mock('../../utils/useId', () => {
  return { useId: () => 1 }
})

describe('Card component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(<Card href=''>ProfileBox</Card>)
    expect(asFragment()).toMatchSnapshot()
  })
  test('Toggles classNames profiled correctly', () => {
    const { asFragment } = render(
      <Card href='' profiled>
        ProfileBox
      </Card>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('Toggles classNames image correctly', async () => {
    const testId = 'testId'
    render(
      <Card href='' image={<img data-testid={testId} src='testImage' alt='testImage' />}>
        ProfileBox
      </Card>
    )
    expect(await screen.findByTestId(testId)).toBeVisible()
  })
  test('Show image orientation correctly', () => {
    const { asFragment } = render(
      <Card href='' image={<img src='testImage' alt='testImage' />} imagePlacement='left'>
        ProfileBox
      </Card>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('Show download link if fileLocation', async () => {
    render(
      <Card href='' fileLocation='./not_a_file.md' downloadText='Download'>
        ProfileBox
      </Card>
    )
    expect(await screen.findByText('Download')).toBeVisible()
  })
  test('Toggles classNames icon correctly', () => {
    const { asFragment } = render(
      <Card href='' icon={<i src='testIcon' />}>
        ProfileBox
      </Card>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('Render subtitle', async () => {
    render(
      <Card href='' subTitle='Subtitle'>
        ProfileBox
      </Card>
    )
    expect(await screen.findByText('Subtitle')).toBeVisible()
  })
  test('Render title', async () => {
    render(
      <Card href='' title='Tittel'>
        ProfileBox
      </Card>
    )
    expect(await screen.findByText('Tittel')).toBeVisible()
  })
  test('Render hrefText', async () => {
    render(
      <Card href='' hrefText='Handling'>
        ProfileBox
      </Card>
    )
    expect(await screen.findByText('Handling')).toBeVisible()
  })
  test('Has aria-label', async () => {
    render (
      <Card href='' ariaLabel="Alternative profiledBox screen reader text">
        ProfiledBox
      </Card>
    )
    expect(await screen.findByLabelText('Alternative profiledBox screen reader text')).toBeVisible()
  })
})
