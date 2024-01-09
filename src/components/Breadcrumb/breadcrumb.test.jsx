import React from 'react';
import { screen, render } from '../../utils/test'
import Breadcrumb from './Breadcrumb';

const items = [
    {
        link: ' ',
        text: 'breadcrumb 1',
    },
    {
        link: ' ',
        text: 'breadcrumb 2',
    },
    {
        text: 'breadcrumb 3',
    },
];

describe('Breadcrumb component', () => {
    test('Matches the snapshot', () => {
        const { asFragment } = render(<Breadcrumb items={items} />);
        expect(asFragment()).toMatchSnapshot();
    });
    test('Renders all items', async () => {
        render(<Breadcrumb items={items} />);
        expect(await screen.findByText(items[0].text)).toBeVisible();
        expect(await screen.findByText(items[1].text)).toBeVisible();
        expect(await screen.findByText(items[2].text)).toBeVisible();
    })
});
