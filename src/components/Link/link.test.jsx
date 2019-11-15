import React from 'react';
import {shallow} from 'enzyme';
import Link from './index';
import { ArrowRight } from 'react-feather'

describe('Link component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Link href="">A regular link</Link>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Toggles classNames correctly', () => {
		const wrapper = shallow(<Link className="mt-3" isExternal href="" negative linkType="profiled">Profile link</Link>);
		expect(wrapper.hasClass('mt-3')).toEqual(true);
		expect(wrapper.hasClass('negative')).toEqual(true);
		expect(wrapper.hasClass('profiled')).toEqual(true);
		expect(wrapper.props().rel).toEqual('noopener noreferrer');
	});
	test('render icon', () => {
		const wrapper = shallow(<Link href=" " linkType="profiled" icon={<ArrowRight size={20} />}>A profiled link with icon</Link>);
		expect(wrapper.hasClass('with-icon')).toEqual(true);
		expect(wrapper.containsMatchingElement(<ArrowRight size={20} color="currentColor" />)).toEqual(true);
	});

});
