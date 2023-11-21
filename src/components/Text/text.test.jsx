import React from 'react';
import {shallow} from 'enzyme';
import {render} from '@testing-library/react'
import Text from './index';

describe('Text component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Text>Text</Text>);
		expect(asFragment()).toMatchSnapshot ();
	});
	test('Toggles className correctly', () => {
		const wrapper = shallow(<Text small negative>Text</Text>);
		expect(wrapper.find('.ssb-text-wrapper').hasClass('small-text')).toEqual(true);
		expect(wrapper.find('.ssb-text-wrapper').hasClass('negative')).toEqual(true);
	});
});
