import React from 'react';
import renderer from 'react-test-renderer';
import Title from './index';

describe('Text component', () => {
	test('Matches the snapshot', () => {
		const component = renderer.create(<Title>Default title here</Title>).toJSON();
		expect(component).toMatchSnapshot();
	});

});
