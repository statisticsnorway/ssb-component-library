import React from 'react';
import { shallow } from 'enzyme';
import Glossary from './index';

describe('Glossary', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Glossary explanation="placeholderText">Glossary</Glossary>);
		expect(wrapper).toMatchSnapshot();
	});
});