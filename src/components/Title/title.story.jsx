import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './index';

storiesOf('Title', module)
  .add('Default', () => (
    <div>
      <Title size={1}>This is a h1 title</Title>
      <Title size={2}>This is a h2 title</Title>
      <Title size={3}>This is a h3 title</Title>
      <Title size={4}>This is a h4 title</Title>
      <Title size={5}>This is a h5 title</Title>
      <Title size={6}>This is a h6 title</Title>
    </div>
  ))
  .add('Long words', () => (
    <div style={{ maxWidth: '500px' }}>
      <p>
        When long titles run out of space, long words would not break to the
        next line, but flow outside the viewport. This is an example of how we
        fix this with <code>hyphens: auto;</code>
      </p>
      <Title size={1}>
        This is a h1 title and contains the Very Long Word
        antidisestablishmentarianism
      </Title>
      <Title size={2}>
        This is a h2 title and contains the Very Long Word
        pseudopseudohypoparathyroidism
      </Title>
      <Title size={3}>
        This is a h3 title and contains the Very Long Word
        supercalifragilisticexpialidocious
      </Title>
      <Title size={4}>
        This is a h4 title and contains the Very Long Word
        pneumonoultramicroscopicsilicovolcanoconiosis
      </Title>
      <Title size={5}>
        This is a h5 title and contains the Very Long Word
        Gammaracanthuskytodermogammarus loricatobaicalensis
      </Title>
      <Title size={6}>
        This is a h6 title and contains the Very Long Word Austrocephalocereus
        dolichospermaticus
      </Title>
    </div>
  ));
