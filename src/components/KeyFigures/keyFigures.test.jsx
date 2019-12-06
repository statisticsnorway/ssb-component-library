import React from 'react';
import {shallow} from 'enzyme';
import { Home } from 'react-feather';
import KeyFigures from './index';
import Glossary from '../Glossary';

const title = 'Antall husholdninger';

describe('KeyFigures component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(
			<KeyFigures
				number="789 398"
				title={title}
				numberDescription="husholdninger"
				time="2018"
				size="large"
				icon={<Home className="feather-home" />}
				glossary={'Explain something'}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test('Renders Glossary conditionally', () => {
		const wrapper = shallow(
			<KeyFigures number="789 398" glossary={'Explain something'} />
		);
		expect(wrapper.find(Glossary)).toHaveLength(1);

		const wrapper2 = shallow(
			<KeyFigures number="789 398" />
		);
		expect(wrapper2.find(Glossary)).toHaveLength(0);
	});
});
