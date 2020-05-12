import React from 'react';
import {shallow} from 'enzyme';
import TableLink from './index';

describe('TableLink component', () => {
    test('Matches the snapshot', () => {
        const wrapper = shallow(<TableLink text="Tabell 1" href="" description="TableLink" />);
        expect(wrapper).toMatchSnapshot();
    });
    test('Toggles classNames correctly', () => {
        const wrapper = shallow(<TableLink className="mb-2" text="Tabell 1" href="" description="TableLink" />);
        expect(wrapper.hasClass('mb-2')).toEqual(true);
    });
    test('Render link Text', () => {
        const wrapper = shallow(<TableLink text="Tabell 1" href="" description="TableLink text" />);
        expect(wrapper.find('.tl-description').render().text()).toBe('TableLink text');
    });

});
