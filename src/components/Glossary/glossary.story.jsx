import React from 'react'
import Glossary from './index'
import Text from '../Text'

const placeholderText = `This is the explanation of the word
written in one or more paragraphs depending on the amount of space needed`

export default {
  title: 'Glossary',
}

export const AsAWrapper = () => (
  <Text>
    You can explain a single{' '}
    <Glossary explanation={placeholderText} closeText='Close'>
      word
    </Glossary>
    &nbsp;in a sentence.
  </Text>
)

AsAWrapper.storyName = 'As a wrapper'
