import React from 'react';
import renderer from 'react-test-renderer';
import Text from './index';

describe('Text component', () => {
	test('Matches the snapshot', () => {
		const component = renderer.create(<Text>Default text here</Text>).toJSON();
		expect(component).toMatchSnapshot();
	});
});
