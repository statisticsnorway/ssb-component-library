import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Title from './index';
import { ssbWhite } from '../../style/colors';

describe('Text component', () => {
	test('Matches the snapshot', () => {
		const component = renderer.create(<Title>Default title here</Title>).toJSON();
		expect(component).toMatchSnapshot();
	});

});
