import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('Header', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Header><div>Content</div></Header>);
		expect(wrapper).toMatchSnapshot();
	});
});
