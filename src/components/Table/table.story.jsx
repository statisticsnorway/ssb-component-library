import React from 'react'
import Table, { TableHead, TableBody, TableFooter, TableRow, TableCell } from './index'
import Accordion from '../Accordion/index'

export default {
  title: 'Table',
  type: Table,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = () => (
  <div style={{ width: '740px', padding: '4rem' }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell type='th'>Header</TableCell>
          <TableCell type='th' align='right'>
            Header
          </TableCell>
          <TableCell type='th' />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Example</TableCell>
          <TableCell align='right'>1000</TableCell>
          <TableCell align='center'>Center</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Example</TableCell>
          <TableCell align='right'>500</TableCell>
          <TableCell align='center'>Center</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
)

export const Statistics = () => (
  <div style={{ padding: '4rem' }}>
    <Table caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '>
      <TableHead>
        <TableRow>
          <TableCell type='th' rowSpan={2} align='right'>
            2020
          </TableCell>
          <TableCell type='th' colSpan={2} scope='colgroup'>
            Second level
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell type='th' scope='col' align='right'>
            First level
          </TableCell>
          <TableCell type='th' scope='col' align='right'>
            First level<sup>1</sup>
          </TableCell>
          <TableCell type='th' scope='col' align='right'>
            First level
          </TableCell>
          <TableCell type='th' scope='col' align='right'>
            First level
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell type='th' scope='row'>
            Total (with numbers)
          </TableCell>
          <TableCell align='right'>1 000</TableCell>
          <TableCell align='right'>2 000</TableCell>
          <TableCell align='right'>3 000</TableCell>
          <TableCell align='right'>4 000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell type='th' scope='row' indentationLevel={1}>
            First level
          </TableCell>
          <TableCell align='right'>50</TableCell>
          <TableCell align='right'>100</TableCell>
          <TableCell align='right'>150</TableCell>
          <TableCell align='right'>200</TableCell>
        </TableRow>
        <TableRow>
          <TableCell type='th' scope='row' indentationLevel={2}>
            Second level
          </TableCell>
          <TableCell align='right'>200</TableCell>
          <TableCell align='right'>650</TableCell>
          <TableCell align='right'>800</TableCell>
          <TableCell align='right'>1050</TableCell>
        </TableRow>
        <TableRow>
          <TableCell type='th' scope='row' indentationLevel={3}>
            Third level
          </TableCell>
          <TableCell align='right'>500</TableCell>
          <TableCell align='right'>200</TableCell>
          <TableCell align='right'>700</TableCell>
          <TableCell align='right'>900</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell type='td' colSpan={3}>
            <div>
              <sup>1</sup> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia massa ut velit
              pulvinar, a ullamcorper odio pulvinar. Nulla vulputate congue justo a bibendum. Maecenas aliquet volutpat
              urna ac bibendum. Morbi at pharetra massa. Sed ornare diam eleifend, semper ipsum sed, feugiat purus.
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell type='td' colSpan={3}>
            <sup>2</sup> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non pretium felis.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell type='td' colSpan={3}>
            <sup>3</sup> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </div>
)
export const AttachmentTableStatistics = () => (
  <div style={{ padding: '4rem' }}>
    <Accordion subHeader='Tabell 1' header='This is a accordion title with a sub-header'>
      <div style={{ width: '100%' }}>
        <Table caption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '>
          <TableHead>
            <TableRow>
              <TableCell type='th' rowSpan={2} align='right'>
                2020
              </TableCell>
              <TableCell type='th' colSpan={2} scope='colgroup'>
                Second level
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell type='th' scope='col' align='right'>
                First level
              </TableCell>
              <TableCell type='th' scope='col' align='right'>
                First level<sup>1</sup>
              </TableCell>
              <TableCell type='th' scope='col' align='right'>
                First level
              </TableCell>
              <TableCell type='th' scope='col' align='right'>
                First level
              </TableCell>
              <TableCell type='th' scope='col' align='right'>
                First level
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell type='th' scope='row'>
                Total (with numbers)
              </TableCell>
              <TableCell align='right'>1 000</TableCell>
              <TableCell align='right'>2 000</TableCell>
              <TableCell align='right'>3 000</TableCell>
              <TableCell align='right'>4 000</TableCell>
              <TableCell align='right'>4 000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell type='th' scope='row' indentationLevel={1}>
                First level
              </TableCell>
              <TableCell align='right'>50</TableCell>
              <TableCell align='right'>100</TableCell>
              <TableCell align='right'>150</TableCell>
              <TableCell align='right'>200</TableCell>
              <TableCell align='right'>200</TableCell>
            </TableRow>
            <TableRow>
              <TableCell type='th' scope='row' indentationLevel={2}>
                Second level
              </TableCell>
              <TableCell align='right'>200</TableCell>
              <TableCell align='right'>650</TableCell>
              <TableCell align='right'>800</TableCell>
              <TableCell align='right'>1050</TableCell>
              <TableCell align='right'>1050</TableCell>
            </TableRow>
            <TableRow>
              <TableCell type='th' scope='row' indentationLevel={3}>
                Third level
              </TableCell>
              <TableCell align='right'>500</TableCell>
              <TableCell align='right'>200</TableCell>
              <TableCell align='right'>700</TableCell>
              <TableCell align='right'>900</TableCell>
              <TableCell align='right'>900</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell type='td' colSpan={3}>
                <div>
                  <sup>1</sup> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia massa ut velit
                  pulvinar, a ullamcorper odio pulvinar. Nulla vulputate congue justo a bibendum. Maecenas aliquet
                  volutpat urna ac bibendum. Morbi at pharetra massa. Sed ornare diam eleifend, semper ipsum sed,
                  feugiat purus.
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell type='td' colSpan={3}>
                <sup>2</sup> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non pretium felis.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell type='td' colSpan={3}>
                <sup>3</sup> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Accordion>
  </div>
)
