import React from 'react';
import {shallow} from 'enzyme';
import { Home } from 'react-feather';
import KeyFigures from './index';
import WordExplanation from '../WordExplanation';

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
				wordExplanation={'Explain something'}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test('Renders WordExplanation conditionally', () => {
		const wrapper = shallow(
			<KeyFigures number="789 398" wordExplanation={'Explain something'} />
		);
		expect(wrapper.find(WordExplanation)).toHaveLength(1);

		const wrapper2 = shallow(
			<KeyFigures number="789 398" />
		);
		expect(wrapper2.find(WordExplanation)).toHaveLength(0);
	});
});
