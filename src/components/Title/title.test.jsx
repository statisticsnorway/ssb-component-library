import React from 'react';

import { screen, render } from '../../utils/test'
import Title from './index';

describe('Text component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Title>Title</Title>);
		expect(asFragment()).toMatchSnapshot();
	});

	test('Renders children', () => {
		render(<Title>Hey 123</Title>);
		expect(screen.getByText('Hey 123')).toBeVisible();
	});

	test('Sets negative class', () => {
		const { asFragment } = render(<Title negative>Title</Title>);
		expect(asFragment()).toMatchSnapshot();
	});

	test('Sets custom class', () => {
		const { asFragment } = render(<Title className="some-class">Title</Title>);
		expect(asFragment()).toMatchSnapshot();
	});

	test('Renders correct default size', () => {
		const { asFragment } = render(<Title>Title</Title>);
		expect(asFragment()).toMatchSnapshot();
	});

	test('Renders correct size', () => {
		const { asFragment } = render(<Title size={1}>Title</Title>);
		expect(asFragment()).toMatchSnapshot();
	});

	test('Renders correct size', () => {
		const { asFragment } = render(<Title size={2}>Title</Title>);
		expect(asFragment()).toMatchSnapshot();
	});

	test('Renders correct size', () => {
		const { asFragment } = render(<Title size={3}>Title</Title>);
		expect(asFragment()).toMatchSnapshot();
	});

	test('Renders correct size', () => {
		const { asFragment } = render(<Title size={4}>Title</Title>);
		expect(asFragment()).toMatchSnapshot();
	});

	test('Renders correct size', () => {
		const { asFragment } = render(<Title size={5}>Title</Title>);
		expect(asFragment()).toMatchSnapshot();
	});

	test('Renders correct size', () => {
		const { asFragment } = render(<Title size={6}>Title</Title>);
		expect(asFragment()).toMatchSnapshot();
	});
});
