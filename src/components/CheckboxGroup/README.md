CheckboxGroup
========

> A wrapper for multiple checkbox buttons

### Usage

#### HTML

```html
<div class="ssb-checkbox-group">
	<div class="checkbox-group-header">Header</div>
	<!-- Use flex-row If horizontal layout -->
    <div class="boxes flex-column">
        <div class="ssb-checkbox">
            <input tabindex="0" id="item1" type="checkbox" value="item1">
            <label class="checkbox-label" for="item1">Item 1</label>
        </div>
        <div class="ssb-checkbox">
            <input tabindex="0" id="item2" type="checkbox" value="item2">
            <label class="checkbox-label" for="item2">Item 2</label>
        </div>
        <div class="ssb-checkbox">
            <input tabindex="0" disabled="" id="item3" type="checkbox" value="item3">
            <label class="checkbox-label" for="item3">Item 3</label>
        </div>
    </div>
</div>
```

#### React

```jsx harmony
const checkboxItems = [
	{
      label: 'Item 1',
      value: 'item1',
    },
    {
      label: 'Item 2',
      value: 'item2',
    },
];

<CheckboxGroup header="Header" items={checkboxItems} onChange={() => callback} />

<CheckboxGroup header="Header" items={checkboxItems} onChange={() => callback} orientation="row" />
```

Available props:

| Name | Type | Description |
| ---- | ---- | ---- |
| header | string | Renders a h5 title |
| items | arrayOf(label, value) | Required items for rendering radio buttons |
| onChange | func | Callback function when a value is changed |
| orientation | 'column' or 'row' , default column| Vertical og horizontal layout|
| selectedValue | string | Pre selected value |

__Dependencies__
 - [Checkbox](../Checkbox)
 - [Title](../Title)
