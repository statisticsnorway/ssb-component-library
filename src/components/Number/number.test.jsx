import React from 'react';
import {shallow} from 'enzyme';
import {render} from '@testing-library/react'
import Number from './index';

describe('Number component', () => {
	test('Matches the snapshot', () => {
		const { asFragment } = render(<Number>599 246 391</Number>);
		expect(asFragment()).toMatchSnapshot ();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<Number size="small">599 246 391</Number>);
		expect(wrapper.hasClass('small')).toEqual(true);
	});

});
