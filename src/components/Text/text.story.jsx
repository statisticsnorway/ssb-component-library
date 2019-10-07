import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import Text from './index';

storiesOf('Text', module).addDecorator(centered)
  .add('Default', () => (
    <Text>Here</Text>
  ));
