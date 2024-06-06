import React from 'react';

import { render } from '../../utils/test'
import Table from './index';

describe('Table component', () => {
    test('Matches the snapshot', () => {
        const { asFragment } = render(
          <Table>
            <TableHead>
              <TableRow>
                <TableCell type="th">Header</TableCell>
                <TableCell type="th" align="right">Header</TableCell>
                <TableCell type="th"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Example</TableCell>
                <TableCell align="right">1000</TableCell>
                <TableCell align="center">Center</TableCell>
                </TableRow>
              <TableRow>
                <TableCell>Example</TableCell>
                <TableCell align="right">500</TableCell>
                <TableCell align="center">Center</TableCell>
            </TableRow>
            </TableBody>
          </Table>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
