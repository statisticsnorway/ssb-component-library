import React from 'react';
import {shallow} from 'enzyme';
import {render} from '@testing-library/react'
import Paragraph from './index';

describe('Paragraph component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Paragraph>Paragraph</Paragraph>);
		expect(asFragment()).toMatchSnapshot ();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<Paragraph className="mt-3" negative>Paragraph</Paragraph>);
		expect(wrapper.hasClass('mt-3')).toEqual(true);
		expect(wrapper.hasClass('negative')).toEqual(true);
	});

});
