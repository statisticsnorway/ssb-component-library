import React from 'react'
import { render } from '../../utils/test'
import PictureCard from './index'
import cardImage from './cards_bilde.jpg'

describe('ImageLink component', () => {
  test('Matches the snapshot', () => {
    const { asFragment } = render(
      <PictureCard imageSrc={cardImage} onClick={() => {}} type='Type' altText='img alt' title='Tittel' />
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('Sets default orientation className', () => {
    const { asFragment } = render(
      <PictureCard imageSrc={cardImage} altText='alt img' onClick={() => {}} type='Type' title='Tittel' />
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('Switches className on orientation change', () => {
    const { asFragment } = render(
      <PictureCard
        orientation='horizontal'
        imageSrc={cardImage}
        altText='alt img'
        onClick={() => {}}
        type='Type'
        title='Tittel'
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
