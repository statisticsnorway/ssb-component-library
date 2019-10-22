import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

describe('Button component', () => {
	test('Matches the snapshot', () => {
		const component = renderer.create(<Button>Button</Button>).toJSON();
		expect(component).toMatchSnapshot();
	});
});
