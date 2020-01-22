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
	test('Renders time and number', () => {
		const wrapper = shallow(<KeyFigures number="789 398" time="2018" />);
		expect(wrapper.find('.kf-time').render().text()).toBe('2018');
		expect(wrapper.find('Number').render().text()).toBe('789 398');
	});
	test('Render no number text', () => {
		const wrapper = shallow(<KeyFigures title="KeyFigure without number" time="2018" noNumberText="Ingen tall"/>);
		expect(wrapper.find('.no-number').render().text()).toBe('Ingen tall');
	});
	test('Render changes', () => {
		const wrapper = shallow(<KeyFigures
			title="KeyFigure without number"
			time="2018"
				changes={{
				changeDirection: 'down',
				changeText: 'Ned 1 prosentpoeng',
				changePeriod: 'fra året før',
			}}
		/>);
		// console.log(wrapper.debug());
		expect(wrapper.find('.kf-changes').exists()).toEqual(true);
		expect(wrapper.find('ArrowDown').exists()).toEqual(true);
		// expect(wrapper.find('.kf-changes').render().text()).toBe('Ingen tall');
	});
	test('Render green box variation', () => {
		const wrapper = shallow(<KeyFigures title="Keyfigure with green box variation" time="2018" number="72,6" greenBox size="medium"/>);
		expect(wrapper.find('.green-box').exists()).toEqual(true);
	})
});
