import React from 'react';

import { render } from '../../utils/test'
import Table from './index';

describe('Table component', () => {
    test('Matches the snapshot', () => {
        const { asFragment } = render(
          <Table>
            <TableHead>
              <TableRow>
                <TableCell type="th">Header 1</TableCell>
                <TableCell type="th" align="right">Header 2</TableCell>
                <TableCell type="th"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Left</TableCell>
                <TableCell align="right">Right</TableCell>
                <TableCell align="center">Center</TableCell>
                </TableRow>
              <TableRow>
                <TableCell>Left</TableCell>
                <TableCell align="right">Right</TableCell>
                <TableCell align="center">Center</TableCell>
            </TableRow>
            </TableBody>
          </Table>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
