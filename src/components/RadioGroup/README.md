RadioGroup
========

> A wrapper for multiple radio buttons

### Usage

#### HTML

```html
<div class="ssb-radio-group">
	<div class="radio-group-header">Header</div>
	<!-- Use flex-row If horizontal layout -->
    <div class="boxes flex-column">
        <div class="ssb-radio">
            <input tabindex="0" id="item-1" type="radio" value="item1">
            <label class="radio-label" for="item1">Item 1</label>
        </div>
        <div class="ssb-radio">
            <input tabindex="0" id="item-2" type="radio" value="item2">
            <label class="radio-label" for="item2">Item 2</label>
        </div>
        <div class="ssb-radio">
            <input tabindex="0" id="item-3" disabled="" type="radio" value="item3">
            <label class="radio-label" for="item3">Item 3</label>
        </div>
    </div>
</div>
```

#### React

```jsx harmony
const radioItems = [
	{
        id: 'item-1',
		label: 'Item 1',
		value: 'item1',
	}, {
        id: 'item-2',
		label: 'Item 2',
		value: 'item2',
	}, {
        id: 'item-3',
		label: 'Item 3',
		value: 'item3',
		disabled: 'true',
	},
];

<RadioGroup header="Header" items={radioItems} onChange={() => callback} selectedValue="item2" />

<RadioGroup header="Header" items={radioItems} onChange={() => callback} selectedValue="item2" orientation="row" />

```

Available props:

| Name       | Type           | Description  |
| ---------- | ------------- | ----- |
| className   | string | Optional container class|
| header | string | Renders a h5 title |
| items | arrayOf(id, label, value) | Required items for rendering radio buttons |
| onChange | func | Callback function when a value is changed |
| orientation | 'column' or 'row' , default column| Vertical og horizontal layout|
| selectedValue | string | Pre selected value |

__Dependencies__
 - [RadioButton](../RadioButton)
 - [Title](../Title)
