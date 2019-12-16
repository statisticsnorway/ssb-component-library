import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

describe('Footer', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Footer><div>Content</div></Footer>);
		expect(wrapper).toMatchSnapshot();
	});
});
