Table
========

> A table component to display data in a structured, grid-like format

### Usage

#### HTML

```html
<div class="ssb-table-wrapper">
  <table class="ssb-table">
    <caption>
      <div class="caption-wrapper">
        <div class="caption-text-wrapper">Caption text</div>
      </div>
    </caption>
    <thead>
      <tr>
        <th>Header</th>
        <th class="align-right">Header<sup>1</sup></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Example</td>
        <td class="align-right">1000</td>
        <td class="align-center">Center value</td>
      </tr>
      <tr>
        <td>Example</td>
        <td class="align-right">500</td>
        <td class="align-center">Center value</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3"><sup>1</sup> Footer text</td>
      </tr>
    </tfoot>
  </table>
</div>
```

#### React

```jsx harmony
<Table
  caption="Caption text"
>
  <TableHead>
    <TableRow>
      <TableCell type="th">Header</TableCell>
      <TableCell type="th" align="right">Header<sup>1</sup></TableCell>
      <TableCell type="th"></TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Example</TableCell>
      <TableCell align="right">1000</TableCell>
      <TableCell align="center">Center value</TableCell>
      </TableRow>
    <TableRow>
      <TableCell>Example</TableCell>
      <TableCell align="right">500</TableCell>
      <TableCell align="center">Center value</TableCell>
  </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell type="td" colSpan={3}>
        <sup>1</sup> Footer text
      </TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

Available props:
##### Table
| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| className | string | Optional styling classes |
| caption | string | Optional caption text |
| dataNoteRefs | string | Optional caption text for data-noterefs attribute |
| children | Required node | Table content (TableHead, TableBody, and TableFooter components) |

##### TableHead, TableBody, TableFooter, and TableRow
| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| className |  string | Optional styling classes |
| children | Required node | Component content |

##### Table Cell
| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| className |  string | Optional styling classes |
| type | 'th' or 'td' | Define what type of element your table cell is. Optional and defaults to td |
| rowSpan | number | Define how many rows the table cell spans. Optional |
| colSpan | number | Define how many columns the table cell spans. Optional |
| children | Optional node, string, or number | Table cell value |
| headers | string | id attributes that provide the headers for the cell. Optional |
| scope | 'col', 'colgroup', 'row', or 'rowgroup' | Define the cells that the th element relates to. Optional |
| align | 'left', 'center', or 'right' | Optional lign table cell content to left, center, or right side |
| indentationLevel | '1', '2', or '3' | Optional indentation to cell value |