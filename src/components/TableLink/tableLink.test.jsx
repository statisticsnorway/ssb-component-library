import React from 'react';
import {shallow} from 'enzyme';
import { ArrowRight } from 'react-feather';
import TableLink from './index';
import Card from "../Card";

describe('TableLink component', () => {
    test('Matches the snapshot', () => {
        const wrapper = shallow(<TableLink title="Tabell 1" href="" hrefText="TableLink" />);
        expect(wrapper).toMatchSnapshot();
    });
    test('Toggles classNames correctly', () => {
        const wrapper = shallow(<TableLink className="mb-2" title="Tabell 1" href="" hrefText="TableLink" />);
        expect(wrapper.hasClass('mb-2')).toEqual(true);
    });
    test('Render link Text', () => {
        const wrapper = shallow(<TableLink title="Tabell 1" href="" hrefText="TableLink text" />);
        expect(wrapper.find('.tl-text').render().text()).toBe('TableLink text');
    });

});
